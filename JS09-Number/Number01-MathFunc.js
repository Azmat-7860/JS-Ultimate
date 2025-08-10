function MathFunction(){

    //a. round() - Rounds a number to the nearest integer
    let num1 =3.4;
    console.log("Math.round(num1): ", Math.round(num1)); // Output: 3

    //b. ceil() - Rounds a number up to the nearest integer
    let num2 = 3.1;
    console.log("Math.ceil(num2): ", Math.ceil(num2)); // Output: 4

    //c. floor() - Rounds a number down to the nearest integer
    let num3 = 3.9;
    console.log("Math.floor(num3): ", Math.floor(num3)); // Output: 3

    //d. random() - Generates a random number between 0 (inclusive) and 1 (exclusive)
    let randomNum = Math.random()* 100;
    console.log("Math.random(): ", randomNum); // Math.random():  52.59445334843693
    console.log("Math.random() rounded: ", Math.round(randomNum)); // for logigical output we use round/ceil/floor()
    
    
}
MathFunction();