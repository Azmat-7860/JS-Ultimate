try {
    let result = x +5;
    // let x; //-->Cannot access 'x' before initialization
    console.log("result go to catch block");
    
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference Error Occurd : ",error.message);
        
    } else {
        console.log("Error Found : ",error.message);    
    }
    
}