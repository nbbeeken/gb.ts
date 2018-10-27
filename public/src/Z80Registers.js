"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function assert(condition, message) {
    if (condition)
        console.log("registers:", message);
}
var Z80Registers = /** @class */ (function () {
    function Z80Registers() {
        this.reset();
    }
    Z80Registers.prototype.reset = function () {
        this.flags = 0;
        this.interruptsEnabled = false;
        this.regA = 0;
        this.regB = 0;
        this.regC = 0;
        this.regD = 0;
        this.regE = 0;
        this.regH = 0;
        this.regL = 0;
        this.programCounter = 0;
        this.stackPointer = 0;
    };
    Object.defineProperty(Z80Registers.prototype, "carry", {
        // C flag: 4th bit from 0
        get: function () { return this.flags & 16; },
        set: function (value) { this.flags |= ((!!value) ? 1 : 0) << 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "halfCarry", {
        // H flag: 5th bit from 0
        get: function () { return !!(this.flags & 32); },
        set: function (value) { this.flags |= ((!!value) ? 1 : 0) << 5; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "isSub", {
        /**
         * N flag: 6th bit from 0
         */
        get: function () { return !!(this.flags & 64); },
        set: function (value) { this.flags |= ((!!value) ? 1 : 0) << 6; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "zero", {
        /**
         * Z flag: 7th bit from 0
         *
         * This bit becomes set (1) if the result of an operation has been zero (0). Used for conditional jumps.
         */
        get: function () { return !!(this.flags & 128); },
        set: function (value) { this.flags |= ((!!value) ? 1 : 0) << 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "A", {
        // Registers
        get: function () { return this.regA; },
        set: function (value) {
            assert(value <= 0xFF, "A Value exceeds 8 bits");
            this.regA = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "B", {
        get: function () { return this.regB; },
        set: function (value) {
            assert(value <= 0xFF, "B Value exceeds 8 bits");
            this.regB = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "C", {
        get: function () { return this.regC; },
        set: function (value) {
            assert(value <= 0xFF, "C Value exceeds 8 bits");
            this.regC = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "D", {
        get: function () { return this.regD; },
        set: function (value) {
            assert(value <= 0xFF, "D Value exceeds 8 bits");
            this.regD = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "E", {
        get: function () { return this.regE; },
        set: function (value) {
            assert(value <= 0xFF, "E Value exceeds 8 bits");
            this.regE = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "H", {
        get: function () { return this.regH; },
        set: function (value) {
            assert(value <= 0xFF, "H Value exceeds 8 bits");
            this.regH = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "L", {
        get: function () { return this.regL; },
        set: function (value) {
            assert(value <= 0xFF, "L Value exceeds 8 bits");
            this.regL = value & 0xFF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "AF", {
        get: function () { return ((this.A << 8) | this.flags); },
        set: function (value) {
            assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
            this.A = (value & 0xFF00) >> 8;
            this.flags = value & 0x00FF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "BC", {
        get: function () { return ((this.B << 8) | this.C); },
        set: function (value) {
            assert(value <= 0xFFFF, "BC Value exceeds 16 bits");
            this.B = (value & 0xFF00) >> 8;
            this.C = value & 0x00FF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "DE", {
        get: function () { return ((this.D << 8) | this.E); },
        set: function (value) {
            assert(value <= 0xFFFF, "DE Value exceeds 16 bits");
            this.D = (value & 0xFF00) >> 8;
            this.E = value & 0x00FF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "HL", {
        get: function () { return ((this.H << 8) | this.L); },
        set: function (value) {
            assert(value <= 0xFFFF, "HL Value exceeds 16 bits");
            this.H = (value & 0xFF00) >> 8;
            this.L = value & 0x00FF;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "PC", {
        // TODO: Add sanity checks
        get: function () { return this.programCounter; },
        set: function (value) { this.programCounter = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Z80Registers.prototype, "SP", {
        get: function () { return this.stackPointer; },
        set: function (value) { this.stackPointer = value; },
        enumerable: true,
        configurable: true
    });
    return Z80Registers;
}());
exports.default = Z80Registers;
//# sourceMappingURL=Z80Registers.js.map