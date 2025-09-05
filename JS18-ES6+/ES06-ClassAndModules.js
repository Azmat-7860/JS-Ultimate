class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello my name : ${this.name} and age : ${this.age}`);
    }
}
let person = new Person("Azmat",24);

person.greet();