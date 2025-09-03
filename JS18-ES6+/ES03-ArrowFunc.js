/*
3. Before es6 we use Function as variable using funtion expression ,now we write funtion in modern way
*/

/*Before ->
    var greet = function (){
        console.log("Good Morning");
    }
*/

var greet = () => console.log("Good Morning");// Modern way 
greet();

//==========================Default Parameter==============================
// this is come with ES6
let add = (a,b=5) => {
    console.log("Addtion : ",a+b);
}
add(3);// add with default b 3+5 = 8
add(4,5); //4+5 = 9