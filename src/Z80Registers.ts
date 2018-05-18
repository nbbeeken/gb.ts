export default class IZ80Registers {
    private regA: number = 0;
    private regF: number = 0;
    private regB: number = 0;
    private regC: number = 0;
    private regD: number = 0;
    private regE: number = 0;
    private regH: number = 0;
    private regL: number = 0;

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

    get HL() { return ((this.D << 8) & this.E); }
    set HL(value: number) {
        console.assert(value <= 0xFFFF, "HL Value exceeds 16 bits");
        this.D = value & 0xF0;
        this.E = value & 0x0F;
    }
}
