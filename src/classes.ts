class Animal {
    name: string;
     #age: number;
    constructor(name: string) {
        this.name = name;
        this.#age = 30;
    }

    move(distanceInMeters: number): void {
        console.log(`${this.name} moved ${distanceInMeters} meters`);
        console.log(`age is ${ this.#age }`)
    }
}


let dog = new Animal('Puppy');
dog.move(100);

class Bird extends Animal{
    fly(distanceInMeter: number) {
        console.log(`${this.name} flew ${distanceInMeter} meters`);
    }
}
