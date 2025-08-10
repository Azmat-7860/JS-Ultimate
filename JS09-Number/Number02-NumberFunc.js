function numberFunc() {

    //a. parseInt()
    let numString = "123";
    let num = parseInt(numString);
    console.log("After parseInt: ", num); // Output: After parseInt: 123

    //b. parseFloat()
    let floatString = "123.4a5"; //it stop parsing when it encounters a non-digit character.
    let floatNum = parseFloat(floatString);
    console.log("After parseFloat: ", floatNum); // Output: After parseFloat: 123.4

    //c. isNaN() - checks if a value is NaN (Not-a-Number)
    let value1 = "Hello";
    let value2 = 123;
    console.log("Is value1 NaN : ", isNaN(value1)); // Output: Is value1 NaN : true
    console.log("Is value2 NaN : ", isNaN(value2)); // Output: Is value2 NaN : false

    //d. Number() - converts a value to a number
    let strNum = "456";
    let numFromStr = Number(strNum);
    console.log("After Number(): ", numFromStr); // Output: After Number(): 456

    

    
}
numberFunc();