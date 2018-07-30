import { Instruction } from "./Instruction";
import RAM from "./RAM";
import { Z80Instructions } from "./Z80Instructions";
import Z80Registers from "./Z80Registers";

export default class Z80 {

    public registers: Z80Registers;
    public Z80InstructionsMap: any = {};

    public interruptVector: number; // I
    public stop = false;

    public resetRoutines = {
        0b000: () => {
            console.log("reset routine: 0x00");
        },
        0b001: () => {
            console.log("reset routine: 0x08");
        },
        0b010: () => {
            console.log("reset routine: 0x10");
        },
        0b011: () => {
            console.log("reset routine: 0x18");
        },
        0b100: () => {
            console.log("reset routine: 0x20");
        },
        0b101: () => {
            console.log("reset routine: 0x28");
        },
        0b110: () => {
            console.log("reset routine: 0x30");
        },
        0b111: () => {
            console.log("reset routine: 0x38");
        },
    };

    constructor(public ram: RAM) {
        this.registers = new Z80Registers();
        for (const instruction of Z80Instructions) {
            this.Z80InstructionsMap[instruction.opcode] = instruction;
        }
    }

    public execute(data: DataView) {
        const s = new Set<number>();
        let i = 0;
        while (i < data.byteLength) {
            let byte: number = 0;

            if (data.getUint8(i) === 0xCB) {
                byte = data.getUint8(i) | data.getUint8(i + 1);
                i += 1;
            } else {
                byte = data.getUint8(i);
            }

            if (byte in this.Z80InstructionsMap) {
                const instruction: Instruction = this.Z80InstructionsMap[byte];
                instruction.fn(this);
                i += instruction.pcSteps;
            } else {
                s.add(byte);
                console.log("cpu      :", "Missing 0x" + byte.toString(16));
                i++;
            }
        }

        console.log("cpu      :", `missing ${s.size} instructions`);
        const a = [];
        for (const n of s) {
            a.push("0x" + padStart(n.toString(16), 2, "0"));
        }
        console.log("cpu      :\n", a.join("\n"));
    }
}

function padStart(str, targetLength, padString) {
    targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
    padString = String((typeof padString !== "undefined" ? padString : " "));
    if (str.length > targetLength) {
        return String(str);
    } else {
        targetLength = targetLength - str.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(str);
    }
}
