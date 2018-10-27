"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LCD_1 = require("./LCD");
var RAM_1 = require("./RAM");
var Z80_1 = require("./Z80");
function main() {
    var lcd = new LCD_1.LCD();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/octet-stream");
    var myInit = {
        cache: "default",
        headers: myHeaders,
        method: "GET",
        mode: "cors",
    };
    var gbromReq = new Request("test.gb", myInit);
    fetch(gbromReq).then(function (res) { return res.arrayBuffer(); }, function (reason) {
        console.error(reason);
    }).then(function (data) {
        console.log(data);
        var ram = new RAM_1.default([0]);
        var cpu = new Z80_1.default(ram);
        cpu.execute(new DataView(data));
    });
}
var isBrowser = new Function("try {return this===window;}catch(e){return false;}");
var isNode = new Function("try {return this===global;}catch(e){return false;}");
if (isNode()) {
    main();
}
if (isBrowser()) {
    document.addEventListener("DOMContentLoaded", main);
}
//# sourceMappingURL=app.js.map