//@ts-check
const { format } = require('util');
const { writeSync, openSync, closeSync } = require('fs');

const REGS = {
    '111': 'A',
    '000': 'B',
    '001': 'C',
    '010': 'D',
    '011': 'E',
    '100': 'H',
    '101': 'L',
};

const DD_REGS = {
    '00': 'BC',
    '01': 'DE',
    '10': 'HL',
    '11': 'SP',
};

const QQ_REGS = {
    '00': 'BC',
    '01': 'DE',
    '10': 'HL',
    '11': 'AF',
}

const printfuncs = [
    function regLoads08bit() {
        const array = [];
        const text = `
        new Instruction(
            "load %s into %s",
            %s,
            "ld %s, %s", Z80InstructionType.LOAD08BIT, 1,

            (cpu) => {
                cpu.registers.%s = cpu.registers.%s;
            },
        ),`;

        for (const num1 in REGS) {
            const reg1 = REGS[num1];
            for (const num2 in REGS) {
                const reg2 = REGS[num2];
                const opcode = `0b01_${num1}_${num2}`
                array.push(format(text, reg2, reg1, opcode, reg1, reg2, reg1, reg2));
            }
        }
        return array;
    },
    function immLoads08bit() {
        const array = [];
        const text = `
        new Instruction(
            "load immediate n into %s stored at PC+1",
            0b00_%s_110,
            "ld %s, n", Z80InstructionType.LOAD08BIT, 2,

            (cpu) => {
                cpu.registers.%s = cpu.ram.read8(cpu.registers.PC + 1);
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function HLLoads08bit() {
        const array = [];
        const text = `
        new Instruction(
            "load from memory at (HL) into %s",
            0b01_%s_110,
            "ld %s, (HL)", Z80InstructionType.LOAD08BIT, 1,

            (cpu) => {
                cpu.registers.%s = cpu.ram.read8(cpu.registers.HL);
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function HLStores08bit() {
        const array = [];
        const text = `
        new Instruction(
            "store contents of %s at (HL)",
            0b01110_%s,
            "ld (HL), %s", Z80InstructionType.LOAD08BIT, 1,

            (cpu) => {
                cpu.ram.write8(cpu.registers.HL, cpu.registers.%s);
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function immLoads16bit() {
        const array = [];
        const text = `
        new Instruction(
            "load nn to %s",
            0b00_%s_0001,
            "ld %s, nn", Z80InstructionType.LOAD16BIT, 3,

            (cpu) => {
                cpu.registers.%s = cpu.ram.read16(cpu.registers.PC + 1);
            },
        ),`;

        for (const num in DD_REGS) {
            const reg = DD_REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function push16bit() {
        const array = [];
        const text = `
        new Instruction(
            "store %s on to the stack",
            0b11_%s_0101,
            "push %s", Z80InstructionType.LOAD16BIT, 1,

            (cpu) => {
                cpu.registers.SP -= 2;
                cpu.ram.write16(cpu.registers.SP, cpu.registers.%s);
            },
        ),`;

        for (const num in QQ_REGS) {
            const reg = QQ_REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function pop16bit() {
        const array = [];
        const text = `
        new Instruction(
            "load from the stack into %s",
            0b11_%s_0001,
            "pop %s", Z80InstructionType.LOAD16BIT, 1,

            (cpu) => {
                cpu.registers.%s = cpu.ram.read16(cpu.registers.SP);
                cpu.registers.SP += 2;
            },
        ),`;

        for (const num in QQ_REGS) {
            const reg = QQ_REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function add08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Add %s to A",
            0b10000_%s,
            "add A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A + cur%s;

                cpu.registers.carry = result > 0xFF;
                cpu.registers.zero = result === 0x00;
                cpu.registers.halfCarry = result > 0x0F;

                cpu.registers.A = result;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    }
];

function main() {
    const FILENAME = "./src/GeneratedInstructions.ts";
    const file = openSync(FILENAME, "w");

    let allArraysStr = "\nexport const GeneratedInstructions = [\n";

    writeSync(file, `import { Instruction, Z80InstructionType } from "./Instruction";\n`);
    for (const fn of printfuncs) {
        writeSync(file, `\nconst ${fn.name} = [\n`);
        const array = fn();
        for(const str of array) {
            writeSync(file, str);
            writeSync(file, "\n");
        }
        writeSync(file, `];\n`);
        allArraysStr += `    ...${fn.name},\n`;
    }
    allArraysStr += "];\n";
    writeSync(file, allArraysStr);
    closeSync(file);
}

if (typeof require != 'undefined' && require.main==module) {
    main();
}
