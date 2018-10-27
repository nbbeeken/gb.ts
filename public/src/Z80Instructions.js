"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GeneratedInstructions_1 = require("./GeneratedInstructions");
var Instruction_1 = require("./Instruction");
var load8bitInstructions = [
    new Instruction_1.Instruction("store immediate n at (HL)", 54, "ld (HL), n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        var value = cpu.ram.read8(cpu.registers.PC + 1);
        cpu.ram.write8(cpu.registers.HL, value);
    }),
    new Instruction_1.Instruction("load (BC) into A", 10, "ld A, (BC)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.BC);
    }),
    new Instruction_1.Instruction("load (DE) into A", 26, "ld A, (DE)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.DE);
    }),
    new Instruction_1.Instruction("store A at (BC)", 2, "ld (BC), A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.BC, cpu.registers.A);
    }),
    new Instruction_1.Instruction("store A at (DE)", 18, "ld (DE), A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.DE, cpu.registers.A);
    }),
    // OPERATION 0xEA: normal z80 JP PE, nn -> Gameboy z80 LD (nn), A
    // TODO: Requires confirmation of correctness
    new Instruction_1.Instruction("store A at (nn)", 234, "ld (nn), A", Instruction_1.Z80InstructionType.LOAD08BIT, 3, function (cpu) {
        var address = cpu.ram.read16(cpu.registers.PC + 1); // nn
        cpu.ram.write8(address, cpu.registers.A);
    }),
    new Instruction_1.Instruction("load from (0xFF00+n) into A, read from io-port n (memory FF00+n)", 240, "ld A, (FF00+n)", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        var ioOffset = 0xFF00;
        var n = cpu.ram.read8(cpu.registers.PC + 1); // n
        cpu.registers.A = cpu.ram.read8(ioOffset + n);
    }),
    new Instruction_1.Instruction("store A at (0xFF00+n), write to io-port n (memory FF00+n)", 224, "ld (FF00+n), A", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        var ioOffset = 0xFF00;
        var n = cpu.ram.read8(cpu.registers.PC + 1); // n
        cpu.ram.write8(ioOffset + n, cpu.registers.A);
    }),
    new Instruction_1.Instruction("load from (0xFF00+C) into A, read from io-port C (memory FF00+C)", 242, "ld A, (FF00+C)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        var ioOffset = 0xFF00;
        cpu.registers.A = cpu.ram.read8(ioOffset + cpu.registers.C);
    }),
    new Instruction_1.Instruction("store A at (0xFF00+C), write to io-port C (memory FF00+C)", 226, "ld (FF00+C), A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        var ioOffset = 0xFF00;
        cpu.ram.write8(ioOffset + cpu.registers.C, cpu.registers.A);
    }),
    new Instruction_1.Instruction("load (HL) into A and increment HL, A=(HL) -> HL=HL+1", 42, "ldi A,(HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
        cpu.registers.HL += 1;
    }),
    new Instruction_1.Instruction("store A at (HL) and increment HL, (HL)=A -> HL=HL+1", 34, "ldi (HL),", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
        cpu.registers.HL += 1;
    }),
    // REAL z80
    // new Instruction(
    //     "load (nn) into A",
    //     0b00111010,  // 0x3A, 58
    //     "ld A, (nn)", Z80InstructionType.LOAD08BIT, 3,
    //     (cpu) => {
    //         const address = cpu.ram.read16(cpu.registers.PC + 1); // nn
    //         cpu.registers.A = cpu.ram.read8(address);
    //     },
    // ),
    // REAL GAMEBOY z80
    new Instruction_1.Instruction("load (HL) into A and decrement HL, A=(HL) -> HL=HL-1", 58, // 0x3A, 58
    "ldd A,(HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
        cpu.registers.HL -= 1;
    }),
    // OPERATION 0x32: normal z80 LD (nn),A -> Gameboy z80 LDD (HL), A
    // TODO: Requires confirmation of correctness
    new Instruction_1.Instruction("store A at (HL) and decrement HL, (HL)=A -> HL=HL-1", 50, "ldd (HL),", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
        cpu.registers.HL -= 1;
    }),
    new Instruction_1.Instruction("Compare next 8 bits to Accumulator", 254, "cp n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        // TODO: correctness check needed
        var n = cpu.ram.read8(cpu.registers.PC);
        var result = (cpu.registers.A === n) ? 0 : 1;
        cpu.registers.zero = result;
    }),
];
var load16bitInstructions = [
    new Instruction_1.Instruction("load HL to SP", 249, "ld SP, HL", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.SP = cpu.registers.HL;
    }),
];
var jumpInstructions = [
    new Instruction_1.Instruction("jump to nn (16bit imm.)", 195, "jp nn", Instruction_1.Z80InstructionType.JUMPCOMMD, 3, function (cpu) {
        cpu.registers.PC = cpu.ram.read16(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("jump to address in HL", 233, "jp (HL)", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.registers.PC = cpu.registers.HL;
    }),
    new Instruction_1.Instruction("jump to offset 8bit imm", 24, "jr C, e", Instruction_1.Z80InstructionType.JUMPCOMMD, 2, function (cpu) {
        var jloc = cpu.registers.PC + cpu.ram.read8(cpu.registers.PC + 1, true);
        cpu.registers.PC = jloc;
    }),
    new Instruction_1.Instruction("jump to offset 8bit imm if carry", 233, "jr C, e", Instruction_1.Z80InstructionType.JUMPCOMMD, 2, function (cpu) {
        if (cpu.registers.carry) {
            var jloc = cpu.registers.PC + cpu.ram.read8(cpu.registers.PC + 1, true);
            cpu.registers.PC = jloc;
        }
    }),
];
var specialInstructions = [
    new Instruction_1.Instruction("nop", 0, "nop", null, 1, function (cpu) { return; }),
];
exports.Z80Instructions = __spread(GeneratedInstructions_1.GeneratedInstructions, load8bitInstructions, load16bitInstructions, jumpInstructions, specialInstructions);
//# sourceMappingURL=Z80Instructions.js.map