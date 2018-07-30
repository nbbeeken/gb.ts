
export default class RAM {

    public mem: Uint8ClampedArray;

    constructor(iterable?: number[]) {
        this.mem = new Uint8ClampedArray(1024 ** 3);
        if (iterable)
            for (let i = 0; i < iterable.length; i++) {
                this.mem[i] = iterable[i];
            }
    }

    /**
     * Read 8 bits (1 byte) from ram
     * @param address location to read from
     * @param signed sign the result by doing the two's comp math
     */
    public read8(address: number, signed = false) {
        if (address > this.mem.length || 0 > address) {
            console.log("ram      :", `Address 0x${address.toString(16)} Out of Bounds`);
            return;
        }
        let val = this.mem[address];
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
        if (address > this.mem.length || (address + 1) > this.mem.length || 0 > address) {
            console.log("ram      :", `Address 0x${address.toString(16)} Out of Bounds`);
            return;
        }
        // TODO: Check this.mem low/high correctness
        let val = (this.mem[address] << 8) | this.mem[address + 1];
        if (signed && !!(val & 0x8000)) {
            val = -((~val + 1) & 0xFFFF);
        }
        console.log("ram      :", `read16: ${((this.mem[address + 1] << 8)).toString(16)} | ${this.mem[address].toString(16)} = ${val.toString(16)} or ${val}`);
        return val;
    }

    /**
     * Write 8 bits (1 byte) from ram
     * @param address location to write to
     * @param value value to be written
     */
    public write8(address: number, value: number) {
        if (address > this.mem.length || 0 > address) {
            console.log("ram      :", `Address 0x${address.toString(16)} Out of Bounds`);
            return;
        }
        this.mem[address] = value & 0xFF;
    }

    /**
     * Write 16 bits (2 bytes) from ram.
     * high order bytes go to address.
     * low order bytes go to address + 1.
     * @param address location to write to
     * @param value value to be written
     */
    public write16(address: number, value: number) {
        if (address > this.mem.length || (address + 1) > this.mem.length || 0 > address) {
            console.log("ram      :", `Address 0x${address.toString(16)} Out of Bounds`);
            return;
        }
        this.mem[address + 1] = value & 0x00FF; // bottom byte
        this.mem[address] = (value & 0xFF00) >> 8; // upper byte shifted down
    }
}
