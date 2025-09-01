/*Closure happens when a inner function can use or remember the variable from the place where it define(inner())
even after outer() is finished.*/

function outer() {
    let count = 0;
    function inner() {
        count++; //remember
        console.log(count); //use
        
    }
    return inner; 
}
let myCount = outer();
myCount();
myCount();