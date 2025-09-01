
//Lexical scope means: “A function can access variables where it was written(defined), not where it is called.
let a = 10;
function printA() {
  console.log(a);
}

function callHere() {
  let a = 20;
  printA(); // called inside here
}

callHere();  
