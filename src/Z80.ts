import RAM from "./RAM";
import Z80Instructions from "./Z80Instructions";
import Z80Registers from "./Z80Registers";

enum Z80RegIndex {
    main = 0,
    alt = 1,
}

export default class Z80 {

    public registerSet = [new Z80Registers(), new Z80Registers()];
    public regIndex: Z80RegIndex;

    public indexX: number;
    public indexY: number;
    public stackPointer: number;

    public interruptVector: number; // I
    public refreshCounter: number;  // R
    public programCounter: number;  // PC

    public clock = { mCycles: 0, tCycles: 0 };

    constructor(public ram: RAM) {
        this.programCounter = 0;
        this.regIndex = Z80RegIndex.main;
    }

    /**
     * Execute code in RAM
     * note the programCounter++, all instructions expect pc to be pointing at
     * desired immediate if one is expected
     */
    public execute() {
        console.log(`ram len: ${this.ram.length}`);
        while (true) {
            let byte = this.ram.read8(this.programCounter++); // Fetch

            if (!byte) return; // done

            if (byte === 0xCB) {
                byte <<= 8;
                byte |= this.ram.read8(this.programCounter++);
            }

            console.log(`byte 0x${byte.toString(16)}`);
            Z80Instructions[byte](this); // Execute

            this.programCounter += 1;
        }
    }

    get pc() {
        console.assert(this.programCounter < this.ram.length);
        return this.programCounter;
    }

    get registers() {
        return this.registerSet[this.regIndex];
    }

}
