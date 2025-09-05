
// Array Destructuring : Extracts values from arrays into variables.
let numbers = [1, 2, 4];
let [a, b, c] = numbers;
console.log("a : ",a +", b : ", b+ ", c :", c);
console.log("========================================");

//Array destructuring with default value : 
let colors =["red","blue"];
let [first,second,third = "white"]= colors;

console.log("========================================");
console.log("First Color : ",first);
console.log("Second Color : ",second);
console.log("Third Color : ",third);


console.log("========================================");
//Nested Array Destructuring

let num = [2,5,[56,66]];
let [one,two,[three,four]] = num;

console.log("First Number : ",one);
console.log("Second Number : ",two);
console.log("Third Number : ",three);
console.log("Fourth Number : ",four);
console.log("========================================");


// ----------------------------------Object Destructing----------------------------
// Object Destructuring : Extracts values from object into variables.
const person = { name: "Azmat", age: 25 };
const { name, age } = person;
console.log(name, age); // Azmat 25
console.log("========================================");


//Object Destructuring with default values
let details = {myName : "Azmat"};
let {myName, myAge = 43 }  = details;

console.log("My Details, Name : ",myName ,", age : ",myAge);
console.log("========================================");

// Object Destructuring with nested object
let employee = {
    empId : 3,
    profile : {firstName : "Azmat",lastName : "Khan"}
}

let {profile : {firstName,lastName}}= employee

console.log("FirstName : ",firstName);
console.log("lastName : ",lastName);

