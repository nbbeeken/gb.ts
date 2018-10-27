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
var Z80Instructions_1 = require("../src/Z80Instructions");
function instructionCheck() {
    var e_1, _a;
    var s = new Set();
    try {
        for (var Z80Instructions_2 = __values(Z80Instructions_1.Z80Instructions), Z80Instructions_2_1 = Z80Instructions_2.next(); !Z80Instructions_2_1.done; Z80Instructions_2_1 = Z80Instructions_2.next()) {
            var instruction = Z80Instructions_2_1.value;
            if (s.has(instruction.opcode)) {
                console.error("CONFLICT");
                console.dir(instruction);
                throw new Error("two instructions are equal");
            }
            s.add(instruction.opcode);
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
(function () {
    instructionCheck();
})();
//# sourceMappingURL=test.js.map