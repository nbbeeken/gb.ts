
function assert(condition?: boolean, message?: string) {
    if (condition)
        console.log("registers:", message);
}

export default class Z80Registers {

    public flags: number;
    public interruptsEnabled: boolean;
    private regA: number;
    private regB: number;
    private regC: number;
    private regD: number;
    private regE: number;
    private regH: number;
    private regL: number;
    private programCounter: number;
    private stackPointer: number;

    constructor() {
        this.reset();
    }

    public reset() {
        this.flags = 0;
        this.interruptsEnabled = false;
        this.regA = 0;
        this.regB = 0;
        this.regC = 0;
        this.regD = 0;
        this.regE = 0;
        this.regH = 0;
        this.regL = 0;
        this.programCounter = 0;
        this.stackPointer = 0;
    }

    // C flag: 4th bit from 0
    get carry() { return this.flags & 0b0001_0000; }
    set carry(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 4; }

    // H flag: 5th bit from 0
    get halfCarry() { return !!(this.flags & 0b0010_0000); }
    set halfCarry(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 5; }

    /**
     * N flag: 6th bit from 0
     */
    get isSub() { return !!(this.flags & 0b0100_0000); }
    set isSub(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 6; }

    /**
     * Z flag: 7th bit from 0
     *
     * This bit becomes set (1) if the result of an operation has been zero (0). Used for conditional jumps.
     */
    get zero() { return !!(this.flags & 0b1000_0000); }
    set zero(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 7; }

    // Registers

    get A() { return this.regA; }
    set A(value: number) {
        assert(value <= 0xFF, "A Value exceeds 8 bits");
        this.regA = value & 0xFF;
    }

    get B() { return this.regB; }
    set B(value: number) {
        assert(value <= 0xFF, "B Value exceeds 8 bits");
        this.regB = value & 0xFF;
    }

    get C() { return this.regC; }
    set C(value: number) {
        assert(value <= 0xFF, "C Value exceeds 8 bits");
        this.regC = value & 0xFF;
    }

    get D() { return this.regD; }
    set D(value: number) {
        assert(value <= 0xFF, "D Value exceeds 8 bits");
        this.regD = value & 0xFF;
    }

    get E() { return this.regE; }
    set E(value: number) {
        assert(value <= 0xFF, "E Value exceeds 8 bits");
        this.regE = value & 0xFF;
    }

    get H() { return this.regH; }
    set H(value: number) {
        assert(value <= 0xFF, "H Value exceeds 8 bits");
        this.regH = value & 0xFF;
    }

    get L() { return this.regL; }
    set L(value: number) {
        assert(value <= 0xFF, "L Value exceeds 8 bits");
        this.regL = value & 0xFF;
    }

    get AF() { return ((this.A << 8) | this.flags); }
    set AF(value: number) {
        assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
        this.A = (value & 0xFF00) >> 8;
        this.flags = value & 0x00FF;
    }

    get BC() { return ((this.B << 8) | this.C); }
    set BC(value: number) {
        assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
        this.B = (value & 0xFF00) >> 8;
        this.C = value & 0x00FF;
    }

    get DE() { return ((this.D << 8) | this.E); }
    set DE(value: number) {
        assert(value <= 0xFFFF, "DE Value exceeds 16 bits");
        this.D = (value & 0xFF00) >> 8;
        this.E = value & 0x00FF;
    }

    get HL() { return ((this.H << 8) | this.L); }
    set HL(value: number) {
        assert(value <= 0xFFFF, "HL Value exceeds 16 bits");
        this.H = (value & 0xFF00) >> 8;
        this.L = value & 0x00FF;
    }

    // TODO: Add sanity checks
    get PC() { return this.programCounter; }
    set PC(value: number) { this.programCounter = value; }

    get SP() { return this.stackPointer; }
    set SP(value: number) { this.stackPointer = value; }
}
