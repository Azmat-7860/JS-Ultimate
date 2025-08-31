function divideCalc(a , b){
    if (b === 0 ) {
        throw new Error("You can't divide with Zero.")
    }
    return a/b
}
try {
   let result = divideCalc(10,2)
   console.log("Ans : ",result);
   
    
} catch (error) {
    console.log("Error : ",error.message);
    
}