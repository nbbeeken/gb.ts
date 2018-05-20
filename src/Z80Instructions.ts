import Z80 from "./Z80";

declare type InstructionFunction = (binary: number, cpu: Z80) => void;

export class Instruction {
    constructor(
        public description: string,
        public opcode: number,
        public asm: string,
        public type: any,
        public pcSteps: number,
        public fn: InstructionFunction,
    ) { }
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

const loadRegToRegInstructions = [
    /* GENERATED gen_8bit_reg_loads INSTRUCTIONS BEGIN */

    new Instruction(
        "load A into A",
        0b01_111_111,
        "ld A, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into A",
        0b01_111_000,
        "ld A, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into A",
        0b01_111_001,
        "ld A, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into A",
        0b01_111_010,
        "ld A, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into A",
        0b01_111_011,
        "ld A, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into A",
        0b01_111_100,
        "ld A, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into A",
        0b01_111_101,
        "ld A, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into B",
        0b01_000_111,
        "ld B, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into B",
        0b01_000_000,
        "ld B, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into B",
        0b01_000_001,
        "ld B, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into B",
        0b01_000_010,
        "ld B, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into B",
        0b01_000_011,
        "ld B, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into B",
        0b01_000_100,
        "ld B, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into B",
        0b01_000_101,
        "ld B, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into C",
        0b01_001_111,
        "ld C, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into C",
        0b01_001_000,
        "ld C, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into C",
        0b01_001_001,
        "ld C, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into C",
        0b01_001_010,
        "ld C, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into C",
        0b01_001_011,
        "ld C, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into C",
        0b01_001_100,
        "ld C, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into C",
        0b01_001_101,
        "ld C, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into D",
        0b01_010_111,
        "ld D, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into D",
        0b01_010_000,
        "ld D, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into D",
        0b01_010_001,
        "ld D, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into D",
        0b01_010_010,
        "ld D, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into D",
        0b01_010_011,
        "ld D, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into D",
        0b01_010_100,
        "ld D, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into D",
        0b01_010_101,
        "ld D, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into E",
        0b01_011_111,
        "ld E, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into E",
        0b01_011_000,
        "ld E, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into E",
        0b01_011_001,
        "ld E, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into E",
        0b01_011_010,
        "ld E, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into E",
        0b01_011_011,
        "ld E, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into E",
        0b01_011_100,
        "ld E, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into E",
        0b01_011_101,
        "ld E, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into H",
        0b01_100_111,
        "ld H, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into H",
        0b01_100_000,
        "ld H, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into H",
        0b01_100_001,
        "ld H, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into H",
        0b01_100_010,
        "ld H, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into H",
        0b01_100_011,
        "ld H, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into H",
        0b01_100_100,
        "ld H, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into H",
        0b01_100_101,
        "ld H, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.registers.L;
        },
    ),

    new Instruction(
        "load A into L",
        0b01_101_111,
        "ld L, A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.A;
        },
    ),

    new Instruction(
        "load B into L",
        0b01_101_000,
        "ld L, B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.B;
        },
    ),

    new Instruction(
        "load C into L",
        0b01_101_001,
        "ld L, C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.C;
        },
    ),

    new Instruction(
        "load D into L",
        0b01_101_010,
        "ld L, D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.D;
        },
    ),

    new Instruction(
        "load E into L",
        0b01_101_011,
        "ld L, E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.E;
        },
    ),

    new Instruction(
        "load H into L",
        0b01_101_100,
        "ld L, H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.H;
        },
    ),

    new Instruction(
        "load L into L",
        0b01_101_101,
        "ld L, L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.registers.L;
        },
    ),

    /* GENERATED gen_8bit_reg_loads INSTRUCTIONS END */
];

const loadImmediateToRegInstructions = [
    /* GENERATED gen_8bit_imm_loads INSTRUCTIONS BEGIN */

    new Instruction(
        "load immediate n into A stored at PC+1",
        0b00_111_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into B stored at PC+1",
        0b00_000_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.B = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into C stored at PC+1",
        0b00_001_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.C = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into D stored at PC+1",
        0b00_010_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.D = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into E stored at PC+1",
        0b00_011_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.E = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into H stored at PC+1",
        0b00_100_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.H = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

        new Instruction(
        "load immediate n into L stored at PC+1",
        0b00_101_110,
        "ld r, n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            cpu.registers.L = cpu.ram.read8(cpu.registers.PC + 1);
        },
    ),

    /* GENERATED gen_8bit_imm_loads INSTRUCTIONS END */
];

const loadAddressInHLToRegInstructions = [
    /* GENERATED gen_8bit_hl_loads INSTRUCTIONS BEGIN */

    new Instruction(
        "load from memory at (HL) into A",
        0b01_111_110,
        "ld A, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into B",
        0b01_000_110,
        "ld B, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.B = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into C",
        0b01_001_110,
        "ld C, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.C = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into D",
        0b01_010_110,
        "ld D, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.D = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into E",
        0b01_011_110,
        "ld E, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.E = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into H",
        0b01_100_110,
        "ld H, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.H = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    new Instruction(
        "load from memory at (HL) into L",
        0b01_101_110,
        "ld L, (HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.L = cpu.ram.read8(cpu.registers.HL);
        },
    ),

    /* GENERATED gen_8bit_hl_loads INSTRUCTIONS END */
];

const storeRegToAdressInHL = [
    /* GENERATED gen_8bit_hl_stores INSTRUCTIONS BEGIN */

    new Instruction(
        "store contents of A at (HL)",
        0b01110_111,
        "ld (HL), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
        },
    ),

    new Instruction(
        "store contents of B at (HL)",
        0b01110_000,
        "ld (HL), B", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.B);
        },
    ),

    new Instruction(
        "store contents of C at (HL)",
        0b01110_001,
        "ld (HL), C", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.C);
        },
    ),

    new Instruction(
        "store contents of D at (HL)",
        0b01110_010,
        "ld (HL), D", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.D);
        },
    ),

    new Instruction(
        "store contents of E at (HL)",
        0b01110_011,
        "ld (HL), E", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.E);
        },
    ),

    new Instruction(
        "store contents of H at (HL)",
        0b01110_100,
        "ld (HL), H", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.H);
        },
    ),

    new Instruction(
        "store contents of L at (HL)",
        0b01110_101,
        "ld (HL), L", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.L);
        },
    ),

    /* GENERATED gen_8bit_hl_stores INSTRUCTIONS BEGIN */
];

const load8bitInstructions = [
    ...loadRegToRegInstructions,
    ...loadImmediateToRegInstructions,
    ...loadAddressInHLToRegInstructions,
    ...storeRegToAdressInHL,

    new Instruction(
        "store immediate n at (HL)",
        0b00110110,
        "ld (HL), n", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            const value = cpu.ram.read8(cpu.registers.PC + 1);
            cpu.ram.write8(cpu.registers.HL, value);
        },
    ),

    new Instruction(
        "load (BC) into A",
        0b00001010,
        "ld A, (BC)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.BC);
        },
    ),

    new Instruction(
        "load (DE) into A",
        0b00011010,
        "ld A, (DE)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.DE);
        },
    ),

    new Instruction(
        "store A at (BC)",
        0b00000010,
        "ld (BC), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.BC, cpu.registers.A);
        },
    ),

    new Instruction(
        "store A at (DE)",
        0b00010010,
        "ld (DE), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.DE, cpu.registers.A);
        },
    ),

    // OPERATION 0xEA: normal z80 JP PE, nn -> Gameboy z80 LD (nn), A
    // TODO: Requires confirmation of correctness
    new Instruction(
        "store A at (nn)",
        0b11101010,
        "ld (nn), A", Z80InstructionType.LOAD08BIT, 3,

        (binary, cpu) => {
            const address = cpu.ram.read16(cpu.registers.PC + 1); // nn
            cpu.ram.write8(address, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+n) into A, read from io-port n (memory FF00+n)",
        0b11110000,
        "ld A, (FF00+n)", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.PC + 1); // n
            cpu.registers.A = cpu.ram.read8(ioOffset + n);
        },
    ),

    new Instruction(
        "store A at (0xFF00+n), write to io-port n (memory FF00+n)",
        0b11100000,
        "ld (FF00+n), A", Z80InstructionType.LOAD08BIT, 2,

        (binary, cpu) => {
            const ioOffset = 0xFF00;
            const n = cpu.ram.read8(cpu.registers.PC + 1); // n
            cpu.ram.write8(ioOffset + n, cpu.registers.A);
        },
    ),

    new Instruction(
        "load from (0xFF00+C) into A, read from io-port C (memory FF00+C)",
        0b11110010,
        "ld A, (FF00+C)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            const ioOffset = 0xFF00;
            cpu.registers.A = cpu.ram.read8(ioOffset + cpu.registers.C);
        },
    ),

    new Instruction(
        "store A at (0xFF00+C), write to io-port C (memory FF00+C)",
        0b11100010,
        "ld (FF00+C), A", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            const ioOffset = 0xFF00;
            cpu.ram.write8(ioOffset + cpu.registers.C, cpu.registers.A);
        },
    ),

    new Instruction(
        "load (HL) into A and increment HL, A=(HL) -> HL=HL+1",
        0b00101010,
        "ldi A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
            cpu.registers.HL += 1;
        },
    ),

    new Instruction(
        "store A at (HL) and increment HL, (HL)=A -> HL=HL+1",
        0b00100010,
        "ldi (HL),", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL += 1;
        },
    ),

    // REAL z80
    // new Instruction(
    //     "load (nn) into A",
    //     0b00111010,  // 0x3A, 58
    //     "ld A, (nn)", Z80InstructionType.LOAD08BIT, 3,

    //     (binary, cpu) => {
    //         const address = cpu.ram.read16(cpu.registers.PC + 1); // nn
    //         cpu.registers.A = cpu.ram.read8(address);
    //     },
    // ),

    // REAL GAMEBOY z80
    new Instruction(
        "load (HL) into A and decrement HL, A=(HL) -> HL=HL-1",
        0b00111010, // 0x3A, 58
        "ldd A,(HL)", Z80InstructionType.LOAD08BIT, 1,

        (binary, cpu) => {
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

        (binary, cpu) => {
            cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
            cpu.registers.HL -= 1;
        },
    ),
];

const loadImmediateToDoubleRegInstructions = [
    /* GENERATED gen_16bit_imm_loads INSTRUCTIONS BEGIN */

    new Instruction(
        "load nn to BC",
        0b00000001,
        "ld BC, nn", Z80InstructionType.LOAD16BIT, 3,

        (binary, cpu) => {
            cpu.registers.BC = cpu.ram.read16(cpu.registers.PC + 1);
        },
    ),

    new Instruction(
        "load nn to DE",
        0b00010001,
        "ld DE, nn", Z80InstructionType.LOAD16BIT, 3,

        (binary, cpu) => {
            cpu.registers.DE = cpu.ram.read16(cpu.registers.PC + 1);
        },
    ),

    new Instruction(
        "load nn to HL",
        0b00100001,
        "ld HL, nn", Z80InstructionType.LOAD16BIT, 3,

        (binary, cpu) => {
            cpu.registers.HL = cpu.ram.read16(cpu.registers.PC + 1);
        },
    ),

    new Instruction(
        "load nn to SP",
        0b00110001,
        "ld SP, nn", Z80InstructionType.LOAD16BIT, 3,

        (binary, cpu) => {
            cpu.registers.SP = cpu.ram.read16(cpu.registers.PC + 1);
        },
    ),

    /* GENERATED gen_16bit_imm_loads INSTRUCTIONS END */
];

const push16bitRegs = [
    new Instruction(
        "store BC on to the stack",
        0b11_00_0101,
        "push BC", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.SP -= 2;
            cpu.ram.write16(cpu.registers.SP, cpu.registers.BC);
        },
    ),

    new Instruction(
        "store DE on to the stack",
        0b11_01_0101,
        "push DE", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.SP -= 2;
            cpu.ram.write16(cpu.registers.SP, cpu.registers.DE);
        },
    ),

    new Instruction(
        "store HL on to the stack",
        0b11_10_0101,
        "push HL", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.SP -= 2;
            cpu.ram.write16(cpu.registers.SP, cpu.registers.HL);
        },
    ),

    new Instruction(
        "store AF on to the stack",
        0b11_11_0101,
        "push AF", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.SP -= 2;
            cpu.ram.write16(cpu.registers.SP, cpu.registers.AF);
        },
    ),
];

const pop16bitRegs = [

    new Instruction(
        "load from the stack into BC",
        0b11_00_0001,
        "pop BC", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.BC = cpu.ram.read16(cpu.registers.SP);
            cpu.registers.SP += 2;
        },
    ),

    new Instruction(
        "load from the stack into DE",
        0b11_01_0001,
        "pop DE", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.DE = cpu.ram.read16(cpu.registers.SP);
            cpu.registers.SP += 2;
        },
    ),

    new Instruction(
        "load from the stack into HL",
        0b11_10_0001,
        "pop HL", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.HL = cpu.ram.read16(cpu.registers.SP);
            cpu.registers.SP += 2;
        },
    ),

    new Instruction(
        "load from the stack into AF",
        0b11_11_0001,
        "pop AF", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.AF = cpu.ram.read16(cpu.registers.SP);
            cpu.registers.SP += 2;
        },
    ),

];

const load16bitInstructions = [
    ...loadImmediateToDoubleRegInstructions,
    ...push16bitRegs,
    ...pop16bitRegs,

    new Instruction(
        "load HL to SP",
        0b1111_1001,
        "ld SP, HL", Z80InstructionType.LOAD16BIT, 1,

        (binary, cpu) => {
            cpu.registers.SP = cpu.registers.HL;
        },
    ),
];

export const Z80Instructions = [
    ...load8bitInstructions,
    ...load16bitInstructions,
];
