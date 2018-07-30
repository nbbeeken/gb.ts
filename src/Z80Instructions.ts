import { GeneratedInstructions } from "./GeneratedInstructions";
import { Instruction, Z80InstructionType } from "./Instruction";

const load8bitInstructions = [

    new Instruction(
        "store immediate n at (HL)",
        0b00110110,
        "ld (HL), n", Z80InstructionType.LOAD08BIT, 2,

        (cpu) => {
            const value = cpu.ram.read8(cpu.registers.PC + 1);
            cpu.ram.write8(cpu.registers.HL, value);
        },
    ),

    new Instruction(
        "load (BC) into A",
        0b00001010,
        "ld A, (BC)", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.BC);
        },
    ),

    new Instruction(
        "load (DE) into A",
        0b00011010,
        "ld A, (DE)", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.DE);
        },
    ),

    new Instruction(
        "store A at (BC)",
        0b00000010,
        "ld (BC), A", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.ram.write8(cpu.registers.BC, cpu.registers.A);
        },
    ),

    new Instruction(
        "store A at (DE)",
        0b00010010,
        "ld (DE), A", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.ram.write8(cpu.registers.DE, cpu.registers.A);
        },
    ),

    // OPERATION 0xEA: normal z80 JP PE, nn -> Gameboy z80 LD (nn), A
    // TODO: Requires confirmation of correctness
    new Instruction(
        "store A at (nn)",
        0b11101010,
        "ld (nn), A", Z80InstructionType.LOAD08BIT, 3,

        (cpu) => {
            const address = cpu.ram.read16(cpu.registers.PC + 1); // nn
            cpu.ram.write8(address, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+n) into A, read from io-port n (memory FF00+n)",
        0b11110000,
        "ld A, (FF00+n)", Z80InstructionType.LOAD08BIT, 2,

        (cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.PC + 1); // n
            cpu.registers.A = cpu.ram.read8(ioOffset + n);
        },
    ),

    new Instruction(
        "store A at (0xFF00+n), write to io-port n (memory FF00+n)",
        0b11100000,
        "ld (FF00+n), A", Z80InstructionType.LOAD08BIT, 2,

        (cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.PC + 1); // n
            cpu.ram.write8(ioOffset + n, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+C) into A, read from io-port C (memory FF00+C)",
        0b11110010,
        "ld A, (FF00+C)", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            const ioOffset = 0xFF00;
            cpu.registers.A = cpu.ram.read8(ioOffset + cpu.registers.C);
        },
    ),

    new Instruction(
        "store A at (0xFF00+C), write to io-port C (memory FF00+C)",
        0b11100010,
        "ld (FF00+C), A", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            const ioOffset = 0xFF00;
            cpu.ram.write8(ioOffset + cpu.registers.C, cpu.registers.A);
        },
    ),

    new Instruction(
        "load (HL) into A and increment HL, A=(HL) -> HL=HL+1",
        0b00101010,
        "ldi A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
            cpu.registers.HL += 1;
        },
    ),

    new Instruction(
        "store A at (HL) and increment HL, (HL)=A -> HL=HL+1",
        0b00100010,
        "ldi (HL),", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL += 1;
        },
    ),

    // REAL z80
    // new Instruction(
    //     "load (nn) into A",
    //     0b00111010,  // 0x3A, 58
    //     "ld A, (nn)", Z80InstructionType.LOAD08BIT, 3,

    //     (cpu) => {
    //         const address = cpu.ram.read16(cpu.registers.PC + 1); // nn
    //         cpu.registers.A = cpu.ram.read8(address);
    //     },
    // ),

    // REAL GAMEBOY z80
    new Instruction(
        "load (HL) into A and decrement HL, A=(HL) -> HL=HL-1",
        0b00111010, // 0x3A, 58
        "ldd A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
            cpu.registers.HL -= 1;
        },
    ),

    // OPERATION 0x32: normal z80 LD (nn),A -> Gameboy z80 LDD (HL), A
    // TODO: Requires confirmation of correctness
    new Instruction(
        "store A at (HL) and decrement HL, (HL)=A -> HL=HL-1",
        0b00110010,
        "ldd (HL),", Z80InstructionType.LOAD08BIT, 1,

        (cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL -= 1;
        },
    ),

    new Instruction(
        "Compare next 8 bits to Accumulator",
        0b1111_1110,
        "cp n", Z80InstructionType.LOAD08BIT, 2,
        (cpu) => {
            // TODO: correctness check needed
            const n = cpu.ram.read8(cpu.registers.PC);
            const result = (cpu.registers.A === n) ? 0 : 1;
            cpu.registers.zero = result;
        },
    ),
];

const load16bitInstructions = [

    new Instruction(
        "load HL to SP",
        0b1111_1001,
        "ld SP, HL", Z80InstructionType.LOAD16BIT, 1,

        (cpu) => {
            cpu.registers.SP = cpu.registers.HL;
        },
    ),
];

const specialInstructions = [
    new Instruction(
        "nop",
        0b0000_0000,
        "nop", null, 1,
        (cpu) => { return; },
    ),
];

export const Z80Instructions = [
    ...GeneratedInstructions,
    ...load8bitInstructions,
    ...load16bitInstructions,
    ...specialInstructions,
];
