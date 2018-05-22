import RAM from "./RAM";
import { Z80Instructions } from "./Z80Instructions";
import Z80Registers from "./Z80Registers";

export default class Z80 {

    public registers: Z80Registers;

    public interruptVector: number; // I
    public stop = false;

    constructor(public ram: RAM) {
        this.registers = new Z80Registers();
    }

    public execute() {
        console.log(`ram len: ${this.ram.length}`);
        const s = new Set<number>();
        for (const instruction of Z80Instructions) {
            if (s.has(instruction.opcode)) {
                console.error("CONFLICT");
                console.dir(instruction);
            }
            s.add(instruction.opcode);
        }
        console.dir(s);
        console.log(Z80Instructions.length);
    }
}
