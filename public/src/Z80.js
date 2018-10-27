"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Z80Instructions_1 = require("./Z80Instructions");
var Z80Registers_1 = require("./Z80Registers");
var Z80 = /** @class */ (function () {
    function Z80(ram) {
        var e_1, _a;
        this.ram = ram;
        this.Z80InstructionsMap = {};
        this.stop = false;
        this.resetRoutines = {
            0: function () {
                console.log("reset routine: 0x00");
            },
            1: function () {
                console.log("reset routine: 0x08");
            },
            2: function () {
                console.log("reset routine: 0x10");
            },
            3: function () {
                console.log("reset routine: 0x18");
            },
            4: function () {
                console.log("reset routine: 0x20");
            },
            5: function () {
                console.log("reset routine: 0x28");
            },
            6: function () {
                console.log("reset routine: 0x30");
            },
            7: function () {
                console.log("reset routine: 0x38");
            },
        };
        this.registers = new Z80Registers_1.default();
        try {
            for (var Z80Instructions_2 = __values(Z80Instructions_1.Z80Instructions), Z80Instructions_2_1 = Z80Instructions_2.next(); !Z80Instructions_2_1.done; Z80Instructions_2_1 = Z80Instructions_2.next()) {
                var instruction = Z80Instructions_2_1.value;
                this.Z80InstructionsMap[instruction.opcode] = instruction;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (Z80Instructions_2_1 && !Z80Instructions_2_1.done && (_a = Z80Instructions_2.return)) _a.call(Z80Instructions_2);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    Z80.prototype.execute = function (data) {
        var e_2, _a;
        var s = new Set();
        var i = 0;
        while (i < data.byteLength) {
            var byte = 0;
            if (data.getUint8(i) === 0xCB) {
                byte = data.getUint8(i) | data.getUint8(i + 1);
                i += 1;
            }
            else {
                byte = data.getUint8(i);
            }
            if (byte in this.Z80InstructionsMap) {
                var instruction = this.Z80InstructionsMap[byte];
                instruction.fn(this);
                i += instruction.pcSteps;
            }
            else {
                s.add(byte);
                console.log("cpu      :", "Missing 0x" + byte.toString(16));
                i++;
            }
        }
        console.log("cpu      :", "missing " + s.size + " instructions");
        var a = [];
        try {
            for (var s_1 = __values(s), s_1_1 = s_1.next(); !s_1_1.done; s_1_1 = s_1.next()) {
                var n = s_1_1.value;
                a.push("0x" + padStart(n.toString(16), 2, "0"));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (s_1_1 && !s_1_1.done && (_a = s_1.return)) _a.call(s_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        console.log("cpu      :\n", a.join("\n"));
    };
    return Z80;
}());
exports.default = Z80;
function padStart(str, targetLength, padString) {
    targetLength = targetLength >> 0; // truncate if number or convert non-number to 0;
    padString = String((typeof padString !== "undefined" ? padString : " "));
    if (str.length > targetLength) {
        return String(str);
    }
    else {
        targetLength = targetLength - str.length;
        if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length); // append to original to ensure we are longer than needed
        }
        return padString.slice(0, targetLength) + String(str);
    }
}
//# sourceMappingURL=Z80.js.map