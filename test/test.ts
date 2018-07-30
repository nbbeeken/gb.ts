import { Z80Instructions } from "../src/Z80Instructions";

function instructionCheck() {
    const s = new Set<number>();
    for (const instruction of Z80Instructions) {
        if (s.has(instruction.opcode)) {
            console.error("CONFLICT");
            console.dir(instruction);
            throw new Error("two instructions are equal");
        }
        s.add(instruction.opcode);
    }
}

(() => {
    instructionCheck();
})();
