// When we initialize typescript configuration option with command
// npx tsc --init //successfully create tsconfig.json
// strict optin by default true
// strict is true then all other following options are implicitly true
// Still we can make individual options as false but other options will remain true
//
// strict false
// class Point3 {
//     x: number;
//     y: number;
//     move(x: number, y: number) {
//         this.x += x;
//         this.y += y;
//     }
// }
// const point = new Point3();
// point.move(1, 4);
// strict true:
class Point3 {
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
const point = new Point3();
point.move(1, 4);
