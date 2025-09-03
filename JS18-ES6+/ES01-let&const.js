/*1.let/const
Before ES6 we use var, Now we can use let and const
-	var can redeclare, reassign, hoisting. var is a function scoped variable
-	let and const cannot do redeclare and Hoisting.
-	let and const are block scoped variable.
-	let can reassign and const cannot.
*/

    // Hoisting : in JS variable and function declaration moved to top. 

    console.log(a);//undefiend -> hoisted
    var a;

    console.log(b);// error -> Not hoisted
    console.log(c); // error -> Not hoisted
    let b;
    const c=0;
    
