/* Scope defines where a variable is accessible in your code.
        Global Scope → variable accessible everywhere.
        Function Scope → variable declared inside a function is only available inside that function.
        Block Scope → variables declared with let and const are only available inside { }.
*/
let globalVar = "i am Global variable" //-> 1.global scope

function outerFunction() {
    var outerVar = "i am outer variable";// -> 2.function scope

    if (true) {
        let blockVar = "i am a block variable" //-> 3. block scope

        //Accesible
        console.log(blockVar);
        console.log(outerVar);
        console.log(globalVar);
        
        
    }
    console.log(blockVar);// Not Accesible


}
outerFunction();