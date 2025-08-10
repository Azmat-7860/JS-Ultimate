function numberFormating(){

    let num = 123.123456789;

    //a. toFixed() - formats the decimal place number and returns a string
    console.log("num.toFixed(2): ", num.toFixed(2)); // Output: num.toFixed(2):  123.12

    //b. toPrecision() - forats the total number 
    console.log("num.toPrecision(5): ", num.toPrecision(5)); // Output: num.toPrecision(5):  123.12
    console.log("num.toPrecision(2): ", num.toPrecision(3)); // Output: num.toPrecision(2):  1.2e+2

 
}
numberFormating();