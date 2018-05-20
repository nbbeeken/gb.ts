
export default class RAM extends Uint8ClampedArray {

    constructor(size) {
        super(size);
    }

    /**
     * Read 8 bits (1 byte) from ram
     * @param address location to read from
     * @param signed sign the result by doing the two's comp math
     */
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

    /**
     * Read 16 bits (2 bytes) from ram.
     * high order bytes come from address.
     * low order bytes come from address + 1.
     * @param address location to read from
     * @param signed sign the result by doing the two's comp math
     */
    public read16(address: number, signed = false) {
        if (address > this.length || (address + 1) > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        // TODO: Check this low/high correctness
        let val = (this[address] << 8) | this[address + 1];
        if (signed && !!(val & 0x8000)) {
            val = -((~val + 1) & 0xFFFF);
        }
        console.log(`read16: ${((this[address + 1] << 8)).toString(16)} | ${this[address].toString(16)} = ${val.toString(16)} or ${val}`);
        return val;
    }

    /**
     * Write 8 bits (1 byte) from ram
     * @param address location to write to
     * @param value value to be written
     */
    public write8(address: number, value: number) {
        if (address > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        this[address] = value & 0xFF;
    }

    /**
     * Write 16 bits (2 bytes) from ram.
     * high order bytes go to address.
     * low order bytes go to address + 1.
     * @param address location to write to
     * @param value value to be written
     */
    public write16(address: number, value: number) {
        if (address > this.length || (address + 1) > this.length) {
            throw Error(`Address 0x${address.toString(16)} Out of Bounds`);
        }
        this[address + 1] = value & 0x00FF; // bottom byte
        this[address] = (value & 0xFF00) >> 8; // upper byte shifted down
    }
}
