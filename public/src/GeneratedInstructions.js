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
var Instruction_1 = require("./Instruction");
var regLoads08bit = [
    new Instruction_1.Instruction("load H into H", 100, "ld H, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into H", 101, "ld H, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into H", 103, "ld H, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into H", 96, "ld H, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into H", 97, "ld H, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into H", 98, "ld H, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into H", 99, "ld H, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into L", 108, "ld L, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into L", 109, "ld L, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into L", 111, "ld L, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into L", 104, "ld L, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into L", 105, "ld L, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into L", 106, "ld L, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into L", 107, "ld L, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into A", 124, "ld A, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into A", 125, "ld A, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into A", 127, "ld A, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into A", 120, "ld A, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into A", 121, "ld A, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into A", 122, "ld A, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into A", 123, "ld A, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into B", 68, "ld B, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into B", 69, "ld B, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into B", 71, "ld B, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into B", 64, "ld B, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into B", 65, "ld B, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into B", 66, "ld B, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into B", 67, "ld B, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into C", 76, "ld C, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into C", 77, "ld C, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into C", 79, "ld C, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into C", 72, "ld C, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into C", 73, "ld C, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into C", 74, "ld C, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into C", 75, "ld C, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into D", 84, "ld D, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into D", 85, "ld D, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into D", 87, "ld D, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into D", 80, "ld D, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into D", 81, "ld D, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into D", 82, "ld D, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into D", 83, "ld D, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.registers.E;
    }),
    new Instruction_1.Instruction("load H into E", 92, "ld E, H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.H;
    }),
    new Instruction_1.Instruction("load L into E", 93, "ld E, L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.L;
    }),
    new Instruction_1.Instruction("load A into E", 95, "ld E, A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.A;
    }),
    new Instruction_1.Instruction("load B into E", 88, "ld E, B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.B;
    }),
    new Instruction_1.Instruction("load C into E", 89, "ld E, C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.C;
    }),
    new Instruction_1.Instruction("load D into E", 90, "ld E, D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.D;
    }),
    new Instruction_1.Instruction("load E into E", 91, "ld E, E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.registers.E;
    }),
];
var immLoads08bit = [
    new Instruction_1.Instruction("load immediate n into H stored at PC+1", 38, "ld H, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.H = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into L stored at PC+1", 46, "ld L, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.L = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into A stored at PC+1", 62, "ld A, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into B stored at PC+1", 6, "ld B, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.B = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into C stored at PC+1", 14, "ld C, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.C = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into D stored at PC+1", 22, "ld D, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.D = cpu.ram.read8(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load immediate n into E stored at PC+1", 30, "ld E, n", Instruction_1.Z80InstructionType.LOAD08BIT, 2, function (cpu) {
        cpu.registers.E = cpu.ram.read8(cpu.registers.PC + 1);
    }),
];
var HLLoads08bit = [
    new Instruction_1.Instruction("load from memory at (HL) into H", 102, "ld H, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.H = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into L", 110, "ld L, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.L = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into A", 126, "ld A, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.A = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into B", 70, "ld B, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.B = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into C", 78, "ld C, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.C = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into D", 86, "ld D, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.D = cpu.ram.read8(cpu.registers.HL);
    }),
    new Instruction_1.Instruction("load from memory at (HL) into E", 94, "ld E, (HL)", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.registers.E = cpu.ram.read8(cpu.registers.HL);
    }),
];
var HLStores08bit = [
    new Instruction_1.Instruction("store contents of H at (HL)", 116, "ld (HL), H", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.H);
    }),
    new Instruction_1.Instruction("store contents of L at (HL)", 117, "ld (HL), L", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.L);
    }),
    new Instruction_1.Instruction("store contents of A at (HL)", 119, "ld (HL), A", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.A);
    }),
    new Instruction_1.Instruction("store contents of B at (HL)", 112, "ld (HL), B", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.B);
    }),
    new Instruction_1.Instruction("store contents of C at (HL)", 113, "ld (HL), C", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.C);
    }),
    new Instruction_1.Instruction("store contents of D at (HL)", 114, "ld (HL), D", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.D);
    }),
    new Instruction_1.Instruction("store contents of E at (HL)", 115, "ld (HL), E", Instruction_1.Z80InstructionType.LOAD08BIT, 1, function (cpu) {
        cpu.ram.write8(cpu.registers.HL, cpu.registers.E);
    }),
];
var immLoads16bit = [
    new Instruction_1.Instruction("load nn to HL", 33, "ld HL, nn", Instruction_1.Z80InstructionType.LOAD16BIT, 3, function (cpu) {
        cpu.registers.HL = cpu.ram.read16(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load nn to SP", 49, "ld SP, nn", Instruction_1.Z80InstructionType.LOAD16BIT, 3, function (cpu) {
        cpu.registers.SP = cpu.ram.read16(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load nn to BC", 1, "ld BC, nn", Instruction_1.Z80InstructionType.LOAD16BIT, 3, function (cpu) {
        cpu.registers.BC = cpu.ram.read16(cpu.registers.PC + 1);
    }),
    new Instruction_1.Instruction("load nn to DE", 17, "ld DE, nn", Instruction_1.Z80InstructionType.LOAD16BIT, 3, function (cpu) {
        cpu.registers.DE = cpu.ram.read16(cpu.registers.PC + 1);
    }),
];
var push16bit = [
    new Instruction_1.Instruction("store HL on to the stack", 229, "push HL", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.SP -= 2;
        cpu.ram.write16(cpu.registers.SP, cpu.registers.HL);
    }),
    new Instruction_1.Instruction("store AF on to the stack", 245, "push AF", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.SP -= 2;
        cpu.ram.write16(cpu.registers.SP, cpu.registers.AF);
    }),
    new Instruction_1.Instruction("store BC on to the stack", 197, "push BC", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.SP -= 2;
        cpu.ram.write16(cpu.registers.SP, cpu.registers.BC);
    }),
    new Instruction_1.Instruction("store DE on to the stack", 213, "push DE", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.SP -= 2;
        cpu.ram.write16(cpu.registers.SP, cpu.registers.DE);
    }),
];
var pop16bit = [
    new Instruction_1.Instruction("load from the stack into HL", 225, "pop HL", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.HL = cpu.ram.read16(cpu.registers.SP);
        cpu.registers.SP += 2;
    }),
    new Instruction_1.Instruction("load from the stack into AF", 241, "pop AF", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.AF = cpu.ram.read16(cpu.registers.SP);
        cpu.registers.SP += 2;
    }),
    new Instruction_1.Instruction("load from the stack into BC", 193, "pop BC", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.BC = cpu.ram.read16(cpu.registers.SP);
        cpu.registers.SP += 2;
    }),
    new Instruction_1.Instruction("load from the stack into DE", 209, "pop DE", Instruction_1.Z80InstructionType.LOAD16BIT, 1, function (cpu) {
        cpu.registers.DE = cpu.ram.read16(cpu.registers.SP);
        cpu.registers.SP += 2;
    }),
];
var add08bit = [
    new Instruction_1.Instruction("Add H to A", 132, "add A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A + curH;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add L to A", 133, "add A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A + curL;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add A to A", 135, "add A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A + curA;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add B to A", 128, "add A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A + curB;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add C to A", 129, "add A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A + curC;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add D to A", 130, "add A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A + curD;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Add E to A", 131, "add A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A + curE;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
];
var adc08bit = [
    new Instruction_1.Instruction("Adc H to A (reg form)", 140, "adc A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A + curH + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc L to A (reg form)", 141, "adc A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A + curL + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc A to A (reg form)", 143, "adc A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A + curA + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc B to A (reg form)", 136, "adc A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A + curB + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc C to A (reg form)", 137, "adc A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A + curC + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc D to A (reg form)", 138, "adc A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A + curD + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Adc E to A (reg form)", 139, "adc A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A + curE + ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
];
var sub08bit = [
    new Instruction_1.Instruction("Sub H from A", 148, "sub A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A - curH;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub L from A", 149, "sub A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A - curL;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub A from A", 151, "sub A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A - curA;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub B from A", 144, "sub A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A - curB;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub C from A", 145, "sub A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A - curC;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub D from A", 146, "sub A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A - curD;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub E from A", 147, "sub A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A - curE;
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
];
var subc08bit = [
    new Instruction_1.Instruction("Sub H from A", 156, "sub A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A - curH - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub L from A", 157, "sub A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A - curL - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub A from A", 159, "sub A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A - curA - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub B from A", 152, "sub A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A - curB - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub C from A", 153, "sub A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A - curC - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub D from A", 154, "sub A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A - curD - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Sub E from A", 155, "sub A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A - curE - ((cpu.registers.carry) ? 1 : 0);
        cpu.registers.carry = result > 0xFF;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = result > 0x0F;
        cpu.registers.A = result;
    }),
];
var and08bit = [
    new Instruction_1.Instruction("And H with A", 164, "and A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A & curH;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And L with A", 165, "and A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A & curL;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And A with A", 167, "and A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A & curA;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And B with A", 160, "and A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A & curB;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And C with A", 161, "and A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A & curC;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And D with A", 162, "and A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A & curD;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("And E with A", 163, "and A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A & curE;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = true;
        cpu.registers.A = result;
    }),
];
var or08bit = [
    new Instruction_1.Instruction("Or H with A", 180, "or A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A | curH;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or L with A", 181, "or A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A | curL;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or A with A", 183, "or A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A | curA;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or B with A", 176, "or A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A | curB;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or C with A", 177, "or A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A | curC;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or D with A", 178, "or A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A | curD;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Or E with A", 179, "or A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A | curE;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
];
var xor08bit = [
    new Instruction_1.Instruction("Xor H with A", 172, "xor A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A ^ curH;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor L with A", 173, "xor A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A ^ curL;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor A with A", 175, "xor A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A ^ curA;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor B with A", 168, "xor A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A ^ curB;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor C with A", 169, "xor A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A ^ curC;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor D with A", 170, "xor A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A ^ curD;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
    new Instruction_1.Instruction("Xor E with A", 171, "xor A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A ^ curE;
        cpu.registers.carry = false;
        cpu.registers.zero = result === 0x00;
        cpu.registers.halfCarry = false;
        cpu.registers.A = result;
    }),
];
var cp08bit = [
    new Instruction_1.Instruction("cp H against A", 188, "cp A, H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curH = cpu.registers.H;
        var result = A === curH;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp L against A", 189, "cp A, L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curL = cpu.registers.L;
        var result = A === curL;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp A against A", 191, "cp A, A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curA = cpu.registers.A;
        var result = A === curA;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp B against A", 184, "cp A, B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curB = cpu.registers.B;
        var result = A === curB;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp C against A", 185, "cp A, C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curC = cpu.registers.C;
        var result = A === curC;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp D against A", 186, "cp A, D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curD = cpu.registers.D;
        var result = A === curD;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
    new Instruction_1.Instruction("cp E against A", 187, "cp A, E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        var A = cpu.registers.A;
        var curE = cpu.registers.E;
        var result = A === curE;
        cpu.registers.carry = false;
        cpu.registers.halfCarry = false;
        cpu.registers.zero = result;
    }),
];
var inc08bit = [
    new Instruction_1.Instruction("increment H", 36, "inc H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.H += 1;
        cpu.registers.zero = cpu.registers.H === 0;
    }),
    new Instruction_1.Instruction("increment L", 44, "inc L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.L += 1;
        cpu.registers.zero = cpu.registers.L === 0;
    }),
    new Instruction_1.Instruction("increment A", 60, "inc A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.A += 1;
        cpu.registers.zero = cpu.registers.A === 0;
    }),
    new Instruction_1.Instruction("increment B", 4, "inc B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.B += 1;
        cpu.registers.zero = cpu.registers.B === 0;
    }),
    new Instruction_1.Instruction("increment C", 12, "inc C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.C += 1;
        cpu.registers.zero = cpu.registers.C === 0;
    }),
    new Instruction_1.Instruction("increment D", 20, "inc D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.D += 1;
        cpu.registers.zero = cpu.registers.D === 0;
    }),
    new Instruction_1.Instruction("increment E", 28, "inc E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.E += 1;
        cpu.registers.zero = cpu.registers.E === 0;
    }),
];
var dec08bit = [
    new Instruction_1.Instruction("decrement H", 37, "dec H", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.H -= 1;
        cpu.registers.zero = cpu.registers.H === 0;
    }),
    new Instruction_1.Instruction("decrement L", 45, "dec L", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.L -= 1;
        cpu.registers.zero = cpu.registers.L === 0;
    }),
    new Instruction_1.Instruction("decrement A", 61, "dec A", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.A -= 1;
        cpu.registers.zero = cpu.registers.A === 0;
    }),
    new Instruction_1.Instruction("decrement B", 5, "dec B", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.B -= 1;
        cpu.registers.zero = cpu.registers.B === 0;
    }),
    new Instruction_1.Instruction("decrement C", 13, "dec C", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.C -= 1;
        cpu.registers.zero = cpu.registers.C === 0;
    }),
    new Instruction_1.Instruction("decrement D", 21, "dec D", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.D -= 1;
        cpu.registers.zero = cpu.registers.D === 0;
    }),
    new Instruction_1.Instruction("decrement E", 29, "dec E", Instruction_1.Z80InstructionType.MATH08BIT, 1, function (cpu) {
        cpu.registers.E -= 1;
        cpu.registers.zero = cpu.registers.E === 0;
    }),
];
var add16bit = [
    new Instruction_1.Instruction("add HL to HL", 41, "add HL, HL", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        var HL = cpu.registers.HL;
        var curHL = cpu.registers.HL;
        var result = HL + curHL;
        cpu.registers.carry = result > 0xFFFF;
        cpu.registers.zero = result === 0x0000;
        cpu.registers.halfCarry = (HL & 0x0400) && (curHL & 0x0400);
        cpu.registers.HL = result;
    }),
    new Instruction_1.Instruction("add SP to HL", 57, "add HL, SP", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        var HL = cpu.registers.HL;
        var curSP = cpu.registers.SP;
        var result = HL + curSP;
        cpu.registers.carry = result > 0xFFFF;
        cpu.registers.zero = result === 0x0000;
        cpu.registers.halfCarry = (HL & 0x0400) && (curSP & 0x0400);
        cpu.registers.HL = result;
    }),
    new Instruction_1.Instruction("add BC to HL", 9, "add HL, BC", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        var HL = cpu.registers.HL;
        var curBC = cpu.registers.BC;
        var result = HL + curBC;
        cpu.registers.carry = result > 0xFFFF;
        cpu.registers.zero = result === 0x0000;
        cpu.registers.halfCarry = (HL & 0x0400) && (curBC & 0x0400);
        cpu.registers.HL = result;
    }),
    new Instruction_1.Instruction("add DE to HL", 25, "add HL, DE", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        var HL = cpu.registers.HL;
        var curDE = cpu.registers.DE;
        var result = HL + curDE;
        cpu.registers.carry = result > 0xFFFF;
        cpu.registers.zero = result === 0x0000;
        cpu.registers.halfCarry = (HL & 0x0400) && (curDE & 0x0400);
        cpu.registers.HL = result;
    }),
];
var inc16bit = [
    new Instruction_1.Instruction("increment HL", 35, "inc HL", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.HL += 1;
    }),
    new Instruction_1.Instruction("increment SP", 51, "inc SP", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.SP += 1;
    }),
    new Instruction_1.Instruction("increment BC", 3, "inc BC", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.BC += 1;
    }),
    new Instruction_1.Instruction("increment DE", 19, "inc DE", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.DE += 1;
    }),
];
var dec16bit = [
    new Instruction_1.Instruction("decrement HL", 43, "dec HL", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.HL -= 1;
    }),
    new Instruction_1.Instruction("decrement SP", 59, "dec SP", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.SP -= 1;
    }),
    new Instruction_1.Instruction("decrement BC", 11, "dec BC", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.BC -= 1;
    }),
    new Instruction_1.Instruction("decrement DE", 27, "dec DE", Instruction_1.Z80InstructionType.MATH16BIT, 1, function (cpu) {
        cpu.registers.DE -= 1;
    }),
];
var rlc08bit = [
    new Instruction_1.Instruction("rotate left H", 0xCB00 | 4, "rlc H", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.H & 0x80);
        cpu.registers.H <<= 1;
        cpu.registers.H |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left L", 0xCB00 | 5, "rlc L", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.L & 0x80);
        cpu.registers.L <<= 1;
        cpu.registers.L |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left A", 0xCB00 | 7, "rlc A", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.A & 0x80);
        cpu.registers.A <<= 1;
        cpu.registers.A |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left B", 0xCB00 | 0, "rlc B", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.B & 0x80);
        cpu.registers.B <<= 1;
        cpu.registers.B |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left C", 0xCB00 | 1, "rlc C", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.C & 0x80);
        cpu.registers.C <<= 1;
        cpu.registers.C |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left D", 0xCB00 | 2, "rlc D", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.D & 0x80);
        cpu.registers.D <<= 1;
        cpu.registers.D |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left E", 0xCB00 | 3, "rlc E", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        cpu.registers.carry = !!(cpu.registers.E & 0x80);
        cpu.registers.E <<= 1;
        cpu.registers.E |= cpu.registers.carry ? 0x1 : 0x0;
    }),
];
var rl08bit = [
    new Instruction_1.Instruction("rotate left H through carry", 0xCB00 | 20, "rl H", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.H & 0x80);
        cpu.registers.H <<= 1;
        cpu.registers.H |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left L through carry", 0xCB00 | 21, "rl L", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.L & 0x80);
        cpu.registers.L <<= 1;
        cpu.registers.L |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left A through carry", 0xCB00 | 23, "rl A", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.A & 0x80);
        cpu.registers.A <<= 1;
        cpu.registers.A |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left B through carry", 0xCB00 | 16, "rl B", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.B & 0x80);
        cpu.registers.B <<= 1;
        cpu.registers.B |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left C through carry", 0xCB00 | 17, "rl C", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.C & 0x80);
        cpu.registers.C <<= 1;
        cpu.registers.C |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left D through carry", 0xCB00 | 18, "rl D", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.D & 0x80);
        cpu.registers.D <<= 1;
        cpu.registers.D |= cpu.registers.carry ? 0x1 : 0x0;
    }),
    new Instruction_1.Instruction("rotate left E through carry", 0xCB00 | 19, "rl E", Instruction_1.Z80InstructionType.SHIFTBITS, 2, function (cpu) {
        var setCarry = !!(cpu.registers.E & 0x80);
        cpu.registers.E <<= 1;
        cpu.registers.E |= cpu.registers.carry ? 0x1 : 0x0;
    }),
];
var reset = [
    new Instruction_1.Instruction("call reset routine 0b000", 199, "rst 0b000", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[0]();
    }),
    new Instruction_1.Instruction("call reset routine 0b001", 207, "rst 0b001", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[1]();
    }),
    new Instruction_1.Instruction("call reset routine 0b010", 215, "rst 0b010", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[2]();
    }),
    new Instruction_1.Instruction("call reset routine 0b011", 223, "rst 0b011", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[3]();
    }),
    new Instruction_1.Instruction("call reset routine 0b100", 231, "rst 0b100", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[4]();
    }),
    new Instruction_1.Instruction("call reset routine 0b101", 239, "rst 0b101", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[5]();
    }),
    new Instruction_1.Instruction("call reset routine 0b110", 247, "rst 0b110", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[6]();
    }),
    new Instruction_1.Instruction("call reset routine 0b111", 255, "rst 0b111", Instruction_1.Z80InstructionType.JUMPCOMMD, 1, function (cpu) {
        cpu.resetRoutines[7]();
    }),
];
var jump16bitCondition = [
    new Instruction_1.Instruction("jump to nn based on condition", 194, "jp cc, nn", Instruction_1.Z80InstructionType.JUMPCOMMD, 3, function (cpu) {
        if (cpu.registers.zero) {
            cpu.registers.PC = cpu.ram.read16(cpu.registers.PC + 1);
        }
    }),
    new Instruction_1.Instruction("jump to nn based on condition", 202, "jp cc, nn", Instruction_1.Z80InstructionType.JUMPCOMMD, 3, function (cpu) {
        if (cpu.registers.zero) {
            cpu.registers.PC = cpu.ram.read16(cpu.registers.PC + 1);
        }
    }),
    new Instruction_1.Instruction("jump to nn based on condition", 210, "jp cc, nn", Instruction_1.Z80InstructionType.JUMPCOMMD, 3, function (cpu) {
        if (cpu.registers.carry) {
            cpu.registers.PC = cpu.ram.read16(cpu.registers.PC + 1);
        }
    }),
    new Instruction_1.Instruction("jump to nn based on condition", 218, "jp cc, nn", Instruction_1.Z80InstructionType.JUMPCOMMD, 3, function (cpu) {
        if (cpu.registers.carry) {
            cpu.registers.PC = cpu.ram.read16(cpu.registers.PC + 1);
        }
    }),
];
exports.GeneratedInstructions = __spread(regLoads08bit, immLoads08bit, HLLoads08bit, HLStores08bit, immLoads16bit, push16bit, pop16bit, add08bit, adc08bit, sub08bit, subc08bit, and08bit, or08bit, xor08bit, cp08bit, inc08bit, dec08bit, add16bit, inc16bit, dec16bit, rlc08bit, rl08bit, reset, jump16bitCondition);
//# sourceMappingURL=GeneratedInstructions.js.map