import { LCD } from "./LCD";
import RAM from "./RAM";
import Z80 from "./Z80";

function main() {

    const lcd = new LCD();

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/octet-stream");

    const myInit = {
        cache: "default",
        headers: myHeaders,
        method: "GET",
        mode: "cors",
    };

    const gbromReq = new Request("test.gb", myInit as RequestInit);

    fetch(gbromReq).then(
        (res) => res.arrayBuffer(),
        (reason) => {
            console.error(reason);
        },
    ).then((data: ArrayBuffer) => {
        console.log(data);
        const ram = new RAM([0]);
        const cpu = new Z80(ram);
        cpu.execute(new DataView(data));
    });
}

const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
const isNode = new Function("try {return this===global;}catch(e){return false;}");

if (isNode()) {
    main();
}

if (isBrowser()) {
    document.addEventListener("DOMContentLoaded", main);
}
