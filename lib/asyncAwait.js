// Descriminated Unions
function area2(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * (Math.pow(shape.radius, 2));
    }
    if (shape.kind === 'rectangle') {
        return shape.width * shape.length;
    }
    if (shape.kind === 'square') {
        return shape.size * shape.size;
    }
}
area2({ kind: 'circle', radius: 1 }); // 3.14
area2({ kind: 'square', size: 4 }); // 16
area2({ kind: 'rectangle', width: 3, length: 6 }); //18
function area(shape) {
    if ('size' in shape) {
        const { size } = shape;
        return size * size;
    }
    if ('width' in shape) {
        const { width, length } = shape;
        return width * length;
    }
}
area({ size: 4 }); // 16
area({ width: 3, length: 6 }); //18
function move(distanceInMeter, direction) {
    console.log(`Moving ${distanceInMeter} meter towards ${direction} direction`);
}
move(200, 'East');
// const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
// const mainAsync = async () => {
//     await delay(1000);
//     console.log('1s');
//     await delay(1000);
//     console.log('2s');
//     await delay(1000);
//     console.log('3s');
//     await delay(1000);
//     console.log('4s');
// }
// mainAsync();
// /** 
//  * How to prevent to update any of the object property in Typescript:
//  * This can be prevented by setting "readonly" keyword before individual property in object.
//  * Here x  and y are declared as readonly thus updating values will throw compile time error:
// **/
// type Points = {
//    readonly x: number,
//    readonly y: number,
//     z: number
// }
// const points: Points = {
//     x: 1,
//     y: 2,
//     z: 3
// }
// points.x = 10; 
// points.y = 20;
// points.z = 30
class PetAnimal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}
const cat = new PetAnimal('Cat', 'brown');
console.log(cat.color); //Allow
cat.color = 'white'; // DisAllow
