
export default class RAM extends Uint8ClampedArray {

    constructor(size) {
        super(size);
    }

    public read8(address: number, signed = false) {
        if (address > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        let val = this[address];
        if (signed && !!(val & 0x80)) {
            val = -((~val + 1) & 0xFF);
        }
        return val;
    }

    public read16(address: number, signed = false) {
        if (address > this.length || (address + 1) > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        let val = (this[address + 1] << 8) | this[address];
        if (signed && !!(val & 0x8000)) {
            val = -((~val + 1) & 0xFFFF);
        }
        console.log(`read16: ${((this[address + 1] << 8)).toString(16)} | ${this[address].toString(16)} = ${val.toString(16)} or ${val}`);
        return val;
    }

    public write8(address: number, value: number) {
        if (address > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        this[address] = value & 0xF;
    }

    public write16(address: number, value: number) {
        if (address > this.length || (address + 1) > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        this[address + 1] = value & 0x0F; // bottom byte
        this[address] = (value & 0xF0) >> 8; // upper byte shifted down
    }
}
