function TernaryOperator(){

    let pass = "Azmat123";
    let hasValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pass);

//Ternary operator ::  It's a shorthand way of writing conditional expressions. 
   let result =  hasValid ? "Strong Password" : "Poor Password"; 
   console.log(result);
   
}
TernaryOperator()