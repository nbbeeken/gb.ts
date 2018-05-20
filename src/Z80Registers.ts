
function fixRegRequest(property): string {
    if (property.length === 2) {
        switch (property) {
            case "00": property = "BC"; break;
            case "01": property = "DE"; break;
            case "10": property = "HL"; break;
            case "11": property = "sp"; break;
            default: throw Error("bad prop");
        }
    }
    if (!isNaN(property)) {
        let base;
        if (property.startsWith("0b")) {
            // Binary
            property = property.slice(2);
            base = 2;
        } else if (property.startsWith("0x")) {
            // Hex
            property = property.slice(2);
            base = 16;
        } else {
            // Decimal
            base = 10;
        }
        switch (parseInt(property, base)) {
            case 0b111: property = "A"; break;
            case 0b000: property = "B"; break;
            case 0b001: property = "C"; break;
            case 0b010: property = "D"; break;
            case 0b011: property = "E"; break;
            case 0b100: property = "H"; break;
            case 0b101: property = "L"; break;
            default: throw Error(`Unsupported Reg ${property}`);
        }
    }
    return property;
}

export const registerProxy = {
    get: (target, property) => {
        return target[fixRegRequest(property)];
    },
    set: (target, property, value) => {
        property = fixRegRequest(property);
        return target[fixRegRequest(property)] = value;
    },
};

export default class Z80Registers {

    public  flags: number;
    public  interruptsEnabled: boolean;
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
        console.assert(value <= 0xFF, "A Value exceeds 8 bits");
        this.regA = value & 0xFF;
    }

    get B() { return this.regB; }
    set B(value: number) {
        console.assert(value <= 0xFF, "B Value exceeds 8 bits");
        this.regB = value & 0xFF;
    }

    get C() { return this.regC; }
    set C(value: number) {
        console.assert(value <= 0xFF, "C Value exceeds 8 bits");
        this.regC = value & 0xFF;
    }

    get D() { return this.regD; }
    set D(value: number) {
        console.assert(value <= 0xFF, "D Value exceeds 8 bits");
        this.regD = value & 0xFF;
    }

    get E() { return this.regE; }
    set E(value: number) {
        console.assert(value <= 0xFF, "E Value exceeds 8 bits");
        this.regE = value & 0xFF;
    }

    get H() { return this.regH; }
    set H(value: number) {
        console.assert(value <= 0xFF, "H Value exceeds 8 bits");
        this.regH = value & 0xFF;
    }

    get L() { return this.regL; }
    set L(value: number) {
        console.assert(value <= 0xFF, "L Value exceeds 8 bits");
        this.regL = value & 0xFF;
    }

    get BC() { return ((this.B << 8) & this.C); }
    set BC(value: number) {
        console.assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
        this.B = value & 0xFF00;
        this.C = value & 0x00FF;
    }

    get DE() { return ((this.D << 8) & this.E); }
    set DE(value: number) {
        console.assert(value <= 0xFFFF, "DE Value exceeds 16 bits");
        this.D = value & 0xFF00;
        this.E = value & 0x00FF;
    }

    get HL() { return ((this.H << 8) & this.L); }
    set HL(value: number) {
        console.assert(value <= 0xFFFF, "HL Value exceeds 16 bits");
        this.H = value & 0xFF00;
        this.L = value & 0x00FF;
    }

    // TODO: Add sanity checks
    get pc() { return this.programCounter; }
    set pc(value: number) { this.programCounter = value; }

    get sp() { return this.stackPointer; }
    set sp(value: number) { this.stackPointer = value; }
}
