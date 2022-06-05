type User = { id: string };
type Product = { id: string };

let user: User = { id: "user-1234" };
let product: Product = { id: "product-XHH-22" };


type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 0, y: 11 };
let point3D: Point3D = { x: 11, y: 22, z: 33 };

function takesPoint2D(point: Point2D) {
    // ...
}

function takesPoint3D(point: Point3D) {
    // ...
}