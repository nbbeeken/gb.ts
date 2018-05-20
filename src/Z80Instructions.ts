import { fromJS, Map } from "immutable";
import Z80 from "./Z80";

declare type InstructionFunction = (binary: number, match: RegExpExecArray,  cpu: Z80) => void;

class Instruction {

    public pattern: RegExp;

    constructor(
        public description: string,
        private patternStr: string,
        public asm: string,
        public type: any,
        public pcSteps: number,
        public fn: InstructionFunction,
    ) {
        this.pattern = new RegExp(patternStr + "$");
    }
}

enum Z80InstructionType {
    LOAD08BIT,
    LOAD16BIT,
    MATH08BIT,
    MATH16BIT,
    SHIFTBITS,
    SINGLEBIT,
    CONTROLER,
    JUMPCOMMD,
}

const REG = /((?:000|001|010|011|100|101|111))/;
const DBLREG = /((?:00|01|10|11))/;

const loadCommands8bit = [
    new Instruction(
        "load reg into reg",
        `01${REG}${REG}`,
        "ld r, r'", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers[match[1]] = cpu.registers[match[2]];
        },
    ),

    new Instruction(
        "load immediate n into reg stored at pc+1",
        `00${REG}110`,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, match, cpu) => {
            cpu.registers[match[1]] = cpu.ram.read8(cpu.registers.pc + 1);
        },
    ),

    new Instruction(
        "load from memory at (HL) into reg",
        `01${REG}110`,
        "ld r, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers[match[1]] = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "store contents of r at (HL)",
        `01110${REG}`,
        "ld (HL), r", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers[match[1]]);
        },
    ),

    new Instruction(
        "store immediate n at (HL)",
        `00110110`,
        "ld (HL), n", Z80InstructionType.LOAD08BIT, 2,

        (binary, match, cpu) => {
            const value = cpu.ram.read8(cpu.registers.pc + 1);
            cpu.ram.write8(cpu.registers.HL, value);
        },
    ),

    new Instruction(
        "load (BC) into A",
        `00001010`,
        "ld A, (BC)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.BC);
        },
    ),

    new Instruction(
        "load (DE) into A",
        `00011010`,
        "ld A, (DE)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.DE);
        },
    ),

    new Instruction(
        "load (nn) into A",
        `00111010`,
        "ld A, (nn)", Z80InstructionType.LOAD08BIT, 3,

        (binary, match, cpu) => {
            const address = cpu.ram.read16(cpu.registers.pc + 1); // nn
            cpu.registers.A = cpu.ram.read8(address);
        },
    ),

    new Instruction(
        "store A at (BC)",
        `00000010`,
        "ld (BC), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.ram.write8(cpu.registers.BC, cpu.registers.A);
        },
    ),

    new Instruction(
        "store A at (DE)",
        `00010010`,
        "ld (DE), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.ram.write8(cpu.registers.DE, cpu.registers.A);
        },
    ),

    // OPERATION 0xEA: normal z80 JP PE, nn -> Gameboy z80 LD (nn), A
    // TODO: Requires confirmation of correctness
    new Instruction(
        "store A at (nn)",
        `11101010`,
        "ld (nn), A", Z80InstructionType.LOAD08BIT, 3,

        (binary, match, cpu) => {
            const address = cpu.ram.read16(cpu.registers.pc + 1); // nn
            cpu.ram.write8(address, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+n) into A, read from io-port n (memory FF00+n)",
        `11110000`,
        "ld A, (FF00+n)", Z80InstructionType.LOAD08BIT, 2,

        (binary, match, cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.pc + 1); // n
            cpu.registers.A = cpu.ram.read8(ioOffset + n);
        },
    ),

    new Instruction(
        "store A at (0xFF00+n), write to io-port n (memory FF00+n)",
        `11100000`,
        "ld (FF00+n), A", Z80InstructionType.LOAD08BIT, 2,

        (binary, match, cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.pc + 1); // n
            cpu.ram.write8(ioOffset + n, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+C) into A, read from io-port C (memory FF00+C)",
        `11110010`,
        "ld A, (FF00+C)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            const ioOffset = 0xFF00;
            cpu.registers.A = cpu.ram.read8(ioOffset + cpu.registers.C);
        },
    ),

    new Instruction(
        "store A at (0xFF00+C), write to io-port C (memory FF00+C)",
        `11100010`,
        "ld (FF00+C), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            const ioOffset = 0xFF00;
            cpu.ram.write8(ioOffset + cpu.registers.C, cpu.registers.A);
        },
    ),

    new Instruction(
        "load (HL) into A and increment HL, A=(HL) -> HL=HL+1",
        `00101010`,
        "ldi A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
            cpu.registers.HL += 1;
        },
    ),

    new Instruction(
        "store A at (HL) and increment HL, (HL)=A -> HL=HL+1",
        `00100010`,
        "ldi (HL),", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL += 1;
        },
    ),

    new Instruction(
        "load (HL) into A and decrement HL, A=(HL) -> HL=HL-1",
        `00111010`,
        "ldd A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
            cpu.registers.HL -= 1;
        },
    ),

    // OPERATION 0x32: normal z80 LD (nn),A -> Gameboy z80 LDD (HL), A
    // TODO: Requires confirmation of correctness
    new Instruction(
        "store A at (HL) and decrement HL, (HL)=A -> HL=HL-1",
        `00110010`,
        "ldd (HL),", Z80InstructionType.LOAD08BIT, 1,

        (binary, match, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL -= 1;
        },
    ),
];

const loadCommands16bit = [

    new Instruction(
        "load nn to rr",
        ``,
        "ld rr, nn", Z80InstructionType.LOAD16BIT, 1,

        (binary, match, cpu) => {
            //
        },
    ),

];

export const Z80Instructions = fromJS([
    ...loadCommands8bit,
]);
