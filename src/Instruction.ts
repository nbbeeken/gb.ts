import Z80 from "./Z80";

declare type InstructionFunction = (cpu: Z80) => void;

export class Instruction {
    constructor(
        public description: string,
        public opcode: number,
        public asm: string,
        public type: any,
        public pcSteps: number,
        public fn: InstructionFunction,
    ) { }
}

export enum Z80InstructionType {
    LOAD08BIT,
    LOAD16BIT,
    MATH08BIT,
    MATH16BIT,
    SHIFTBITS,
    SINGLEBIT,
    CONTROLER,
    JUMPCOMMD,
}
