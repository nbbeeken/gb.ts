"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var LCD = /** @class */ (function () {
    function LCD() {
        this.canvas = document.getElementById("display");
        var camera = new three_1.OrthographicCamera(this.canvas.width / -2, this.canvas.width / 2, this.canvas.height / 2, this.canvas.height / -2, 0, 40);
        var scene = new three_1.Scene();
        var square = new three_1.Geometry();
        console.log(square);
        square.vertices.push(new three_1.Vector3(1, 1, 0));
        square.vertices.push(new three_1.Vector3(1, 9, 0));
        square.vertices.push(new three_1.Vector3(9, 1, 0));
        square.vertices.push(new three_1.Vector3(9, 9, 0));
        square.faces.push(new three_1.Face3(0, 1, 2));
        square.faces.push(new three_1.Face3(1, 2, 3));
        var squareMaterial = new three_1.MeshBasicMaterial({
            color: 0xF6831E,
            side: three_1.DoubleSide,
        });
        var squareMesh = new three_1.Mesh(square, squareMaterial);
        scene.add(squareMesh);
        var renderer = new three_1.WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
        });
        renderer.render(scene, camera);
    }
    return LCD;
}());
exports.LCD = LCD;
//# sourceMappingURL=LCD.js.map