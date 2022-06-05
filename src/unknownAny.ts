let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 999;
exampleAny = "typescript";

// any

exampleAny.property1.property12.property123 = 111;


//unknown

exampleUnknown = 888;
exampleUnknown = "typescript";

// unknown

//exampleUnknown.property1.property12.property123 = 111; // Error -> Object is of type unknown
// This is the difference from any here in case of nested or object should be specific
// if string /number

if (typeof exampleUnknown === 'string') {
    exampleUnknown.trim();
}
if (typeof exampleUnknown === 'boolean') {
    let isExampleUnknown: boolean = exampleUnknown;
}



// ***********

function log2(value: unknown) {
    if (typeof value === 'number') {
        console.log("Value", value.toFixed(2));
    } else if(typeof value === 'string') {
        console.log("value string", value.toString());
    }
    
}

log2(10);
log2("Hello");




