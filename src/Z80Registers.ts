export default class IZ80Registers {
    public flags: number = 0;
    public interruptsEnabled: boolean;
    private regA: number = 0;
    private regB: number = 0;
    private regC: number = 0;
    private regD: number = 0;
    private regE: number = 0;
    private regH: number = 0;
    private regL: number = 0;

    // C flag
    get carry() { return this.flags & 0x1; }
    set carry(value: number | boolean) { this.flags |= (!!value) ? 1 : 0; }

    // N flag
    get isSub() { return !!(this.flags & 0x2); }
    set isSub(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 1; }

    // P/V flag
    get parity() { return !!(this.flags & 0x4); }
    set parity(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 2; }

    // H flag
    get halfCarry() { return !!(this.flags & 0x8); }
    set halfCarry(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 3; }

    // Z flag
    get zero() { return !!(this.flags & 0x32); }
    set zero(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 5; }

    // S flag
    get sign() { return !!(this.flags & 0x64); }
    set sign(value: number | boolean) { this.flags |= ((!!value) ? 1 : 0) << 7; }

    // Registers

    get A() { return this.regA; }
    set A(value: number) {
        console.assert(value <= 0xFF, "A Value exceeds 8 bits");
        this.regA = value & 0xF;
    }

    get B() { return this.regB; }
    set B(value: number) {
        console.assert(value <= 0xFF, "B Value exceeds 8 bits");
        this.regB = value & 0xF;
    }

    get C() { return this.regC; }
    set C(value: number) {
        console.assert(value <= 0xFF, "C Value exceeds 8 bits");
        this.regC = value & 0xF;
    }

    get D() { return this.regD; }
    set D(value: number) {
        console.assert(value <= 0xFF, "D Value exceeds 8 bits");
        this.regD = value & 0xF;
    }

    get E() { return this.regE; }
    set E(value: number) {
        console.assert(value <= 0xFF, "E Value exceeds 8 bits");
        this.regE = value & 0xF;
    }

    get H() { return this.regH; }
    set H(value: number) {
        console.assert(value <= 0xFF, "H Value exceeds 8 bits");
        this.regH = value & 0xF;
    }

    get L() { return this.regL; }
    set L(value: number) {
        console.assert(value <= 0xFF, "L Value exceeds 8 bits");
        this.regL = value & 0xF;
    }

    get BC() { return ((this.B << 8) & this.C); }
    set BC(value: number) {
        console.assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
        this.B = value & 0xF0;
        this.C = value & 0x0F;
    }

    get DE() { return ((this.D << 8) & this.E); }
    set DE(value: number) {
        console.assert(value <= 0xFFFF, "DE Value exceeds 16 bits");
        this.D = value & 0xF0;
        this.E = value & 0x0F;
    }

    get HL() { return ((this.H << 8) & this.L); }
    set HL(value: number) {
        console.assert(value <= 0xFFFF, "HL Value exceeds 16 bits");
        this.H = value & 0xF0;
        this.L = value & 0x0F;
    }
}
