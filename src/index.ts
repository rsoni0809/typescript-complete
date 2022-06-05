
let message: string = "message";
let age: number = 30;
let isDefined: boolean = false;
let notInitialized: undefined = undefined;
let notPresent: null = null;
let penta: symbol = Symbol('star');
let regexp: RegExp = new RegExp('ab+c');
let array: Array<number> = [1, 4, 6];
//OR
let array2: number[] = [1, 2, 3];
// Fixed Length
let tuple: [number, number] = [1, 2];
let newSet: Set<number> = new Set([1, 3, 4, 5]);

// Object
type Points = { x: number, y: number };
let centerObj: Points = {
    x: 10, 
    y: 12
}
let centerObj2: Points = {
    x: 11,
    y: 13
}


// Functions

function add(first: number, second: number): number{
    return first + second;
}
function log(message: string): void {
    console.log('LOG', message);
}

function sum(...values: number[]) {
    return values.reduce((value, acc) => value + acc, 0);
}

type AddProps= (first: number, second: number) => number;

let addition: AddProps;

addition =  (first: number, second: number): number => {
    return first + second;
}

 
