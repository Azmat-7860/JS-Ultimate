

/* Scope Chain :
👉 When JS looks for a variable, it searches:
Inside the current function/block.
If not found, looks in the outer function.
If not found, looks in the global scope.
If still not found → ReferenceError.
*/

let globalVar = "i am Global variable" 

function outerFunction() {
    var outerVar = "i am outer variable";

    function innerFunction() {
        var innerVar = "i am inner variable";
        
        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVar);


    }
    innerFunction();
 
}
outerFunction();