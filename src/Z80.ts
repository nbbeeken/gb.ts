import RAM from "./RAM";
import { Z80Instructions } from "./Z80Instructions";
import Z80Registers from "./Z80Registers";
import { registerProxy } from "./Z80Registers";

export default class Z80 {

    public registers: Z80Registers;

    public interruptVector: number; // I
    public stop = false;

    constructor(public ram: RAM) {
        this.registers = new Proxy(new Z80Registers(), registerProxy);
    }

    /**
     * Execute code in RAM
     * note the programCounter++, all instructions expect pc to be pointing at
     * desired immediate if one is expected
     */
    public execute() {
        console.log(`ram len: ${this.ram.length}`);
    }
}
