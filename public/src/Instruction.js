"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instruction = /** @class */ (function () {
    function Instruction(description, opcode, asm, type, pcSteps, fn) {
        this.description = description;
        this.opcode = opcode;
        this.asm = asm;
        this.type = type;
        this.pcSteps = pcSteps;
        this.fn = fn;
    }
    return Instruction;
}());
exports.Instruction = Instruction;
var Z80InstructionType;
(function (Z80InstructionType) {
    Z80InstructionType[Z80InstructionType["LOAD08BIT"] = 0] = "LOAD08BIT";
    Z80InstructionType[Z80InstructionType["LOAD16BIT"] = 1] = "LOAD16BIT";
    Z80InstructionType[Z80InstructionType["MATH08BIT"] = 2] = "MATH08BIT";
    Z80InstructionType[Z80InstructionType["MATH16BIT"] = 3] = "MATH16BIT";
    Z80InstructionType[Z80InstructionType["SHIFTBITS"] = 4] = "SHIFTBITS";
    Z80InstructionType[Z80InstructionType["SINGLEBIT"] = 5] = "SINGLEBIT";
    Z80InstructionType[Z80InstructionType["CONTROLER"] = 6] = "CONTROLER";
    Z80InstructionType[Z80InstructionType["JUMPCOMMD"] = 7] = "JUMPCOMMD";
})(Z80InstructionType = exports.Z80InstructionType || (exports.Z80InstructionType = {}));
//# sourceMappingURL=Instruction.js.map