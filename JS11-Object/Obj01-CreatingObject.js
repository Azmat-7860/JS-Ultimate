function creatingObject() {

    //1. Create an object using object literal ->
    let person = {
        name: "John",
        age: 30,
        city: "New York",
        sayDetails: function () {
            console.log(`Name : ${this.name}, Age : ${this.age}, City : ${this.city}`);
        }
    };
    console.log("Person Details : ", person);
    person.sayDetails(); // Output: Name : John, Age ; 30, City : New York

    console.log("-------------------------------------------------------");

    //2. Create an object using the Object constructor ->
    let car = new Object();
    car.make = "Toyota";
    car.model = "Camry";
    car.year = 2020;
    car.displayInfo = function () {
        console.log(`Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
    console.log("Car Details : ", car);
    car.displayInfo(); // Output: Car Make: Toyota, Model: Camry, Year: 2020

    console.log("-------------------------------------------------------");

    //3. Create an object using a constructor function ->
    function Animal(name, sound) {
        this.name = name;
        this.sound = sound;
        this.makeSound = function () {
            console.log(`${this.name} makes a sound: ${this.sound}`);
        }
    }

    const dog = new Animal("Dog","Barking");
    console.log("Animal Details : ",dog);
    dog.makeSound();

    
}
creatingObject();