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

const DD_REGS = { // same as SS
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
    },
    function adc08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Adc %s to A (reg form)",
            0b10001_%s,
            "adc A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A + cur%s + ((cpu.registers.carry) ? 1 : 0);

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
    },
    function sub08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Sub %s from A",
            0b10010_%s,
            "sub A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A - cur%s;

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
    },
    function subc08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Sub %s from A",
            0b10011_%s,
            "sub A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A - cur%s - ((cpu.registers.carry) ? 1 : 0);

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
    },
    function and08bit() {
        const array = [];
        const text = `
        new Instruction(
            "And %s with A",
            0b10100_%s,
            "and A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A & cur%s;

                cpu.registers.carry = false;
                cpu.registers.zero = result === 0x00;
                cpu.registers.halfCarry = true;

                cpu.registers.A = result;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function or08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Or %s with A",
            0b10110_%s,
            "or A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A | cur%s;

                cpu.registers.carry = false;
                cpu.registers.zero = result === 0x00;
                cpu.registers.halfCarry = false;

                cpu.registers.A = result;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function xor08bit() {
        const array = [];
        const text = `
        new Instruction(
            "Xor %s with A",
            0b10101_%s,
            "xor A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A ^ cur%s;

                cpu.registers.carry = false;
                cpu.registers.zero = result === 0x00;
                cpu.registers.halfCarry = false;

                cpu.registers.A = result;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function cp08bit() {
        const array = [];
        const text = `
        new Instruction(
            "cp %s against A",
            0b10111_%s,
            "cp A, %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                const A = cpu.registers.A;
                const cur%s = cpu.registers.%s;
                const result = A === cur%s;

                cpu.registers.carry = false;
                cpu.registers.halfCarry = false;

                cpu.registers.zero = result;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function inc08bit() {
        const array = [];
        const text = `
        new Instruction(
            "increment %s",
            0b00_%s_100,
            "inc %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                cpu.registers.%s += 1;
                cpu.registers.zero = cpu.registers.%s === 0;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg))
        }
        return array;
    },
    function dec08bit() {
        const array = [];
        const text = `
        new Instruction(
            "decrement %s",
            0b00_%s_101,
            "dec %s", Z80InstructionType.MATH08BIT, 1,

            (cpu) => {
                cpu.registers.%s -= 1;
                cpu.registers.zero = cpu.registers.%s === 0;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg))
        }
        return array;
    },
    function add16bit() {
        const array = [];
        const text = `
        new Instruction(
            "add %s to HL",
            0b00_%s_1001,
            "add HL, %s", Z80InstructionType.MATH16BIT, 1,

            (cpu) => {
                const HL = cpu.registers.HL;
                const cur%s = cpu.registers.%s;
                const result = HL + cur%s;

                cpu.registers.carry = result > 0xFFFF;
                cpu.registers.zero = result === 0x0000;
                cpu.registers.halfCarry = (HL & 0x0400) && (cur%s & 0x0400);

                cpu.registers.HL = result;
            },
        ),`;

        for (const num in DD_REGS) {
            const reg = DD_REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg, reg))
        }
        return array;
    },
    function inc16bit() {
        const array = [];
        const text = `
        new Instruction(
            "increment %s",
            0b00_%s_0011,
            "inc %s", Z80InstructionType.MATH16BIT, 1,

            (cpu) => {
                cpu.registers.%s += 1;
            },
        ),`;

        for (const num in DD_REGS) {
            const reg = DD_REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function dec16bit() {
        const array = [];
        const text = `
        new Instruction(
            "decrement %s",
            0b00_%s_1011,
            "dec %s", Z80InstructionType.MATH16BIT, 1,

            (cpu) => {
                cpu.registers.%s -= 1;
            },
        ),`;

        for (const num in DD_REGS) {
            const reg = DD_REGS[num];
            array.push(format(text, reg, num, reg, reg))
        }
        return array;
    },
    function rlc08bit() {
        const array = [];
        const text = `
        new Instruction(
            "rotate left %s",
            0xCB00 | 0b00000_%s,
            "rlc %s", Z80InstructionType.SHIFTBITS, 2,

            (cpu) => {
                cpu.registers.carry = !!(cpu.registers.%s & 0x80);
                cpu.registers.%s <<= 1;
                cpu.registers.%s |= cpu.registers.carry ? 0x1 : 0x0;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function rl08bit() {
        const array = [];
        const text = `
        new Instruction(
            "rotate left %s through carry",
            0xCB00 | 0b00010_%s,
            "rl %s", Z80InstructionType.SHIFTBITS, 2,

            (cpu) => {
                const setCarry = !!(cpu.registers.%s & 0x80);
                cpu.registers.%s <<= 1;
                cpu.registers.%s |= cpu.registers.carry ? 0x1 : 0x0;
            },
        ),`;

        for (const num in REGS) {
            const reg = REGS[num];
            array.push(format(text, reg, num, reg, reg, reg, reg))
        }
        return array;
    },
    function reset() {
        const array = [];
        const text = `
        new Instruction(
            "call reset routine 0b%s",
            0b11_%s_111,
            "rst 0b%s", Z80InstructionType.JUMPCOMMD, 1,

            (cpu) => {
                cpu.resetRoutines[0b%s]();
            },
        ),`;
        const locations = ['000', '001', '010', '011', '100', '101', '110', '111'];
        for (const num of locations) {
            array.push(format(text, num, num, num, num))
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
