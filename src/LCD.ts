import {
    BoxGeometry,
    Camera,
    DoubleSide,
    Face3,
    Geometry,
    Mesh,
    MeshBasicMaterial,
    OrthographicCamera,
    Scene,
    Vector3,
    WebGLRenderer,
} from "three";

export class LCD {

    public canvas: HTMLCanvasElement;

    constructor() {
        this.canvas = document.getElementById("display") as HTMLCanvasElement;

        const camera = new OrthographicCamera(
            this.canvas.width / -2, this.canvas.width / 2,
            this.canvas.height / 2, this.canvas.height / -2,
            0, 40,
        );

        const scene = new Scene();

        const square = new Geometry();
        console.log(square);
        square.vertices.push(new Vector3(1, 1, 0));
        square.vertices.push(new Vector3(1, 9, 0));
        square.vertices.push(new Vector3(9, 1, 0));
        square.vertices.push(new Vector3(9, 9, 0));

        square.faces.push(new Face3(0, 1, 2));
        square.faces.push(new Face3(1, 2, 3));

        const squareMaterial = new MeshBasicMaterial({
            color: 0xF6831E,
            side: DoubleSide,
        });

        const squareMesh = new Mesh(square, squareMaterial);
        scene.add(squareMesh);

        const renderer = new WebGLRenderer({
            antialias: true,
            canvas: this.canvas,
        });
        renderer.render(scene, camera);
    }
}
