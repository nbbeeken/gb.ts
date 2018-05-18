
export default class RAM extends Uint8ClampedArray {

    constructor(array: number[]) {
        super(array);
    }

    public read8(address: number) {
        if (address > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        return this[address];
    }

    public read16(address: number) {
        if (address > this.length || (address + 1) > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        const val = (this[address + 1] << 8) | this[address];
        console.log(`read16: ${((this[address + 1] << 8)).toString(16)} | ${this[address].toString(16)} = ${val.toString(16)}`);
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
