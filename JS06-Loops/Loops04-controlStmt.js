function controlStatement() {

    let iteration = 12;
    for (let i = 0; i < iteration; i++) {
       
        if (i % 2 == 0) {
            console.log("Even Number SKIP the iteration");
            continue; // continue :: skips the current iteration.
        }
        if (i == 11) {
            console.log("Loop is gooing too loooong....., BREAK the Loop booss");
            break; // break :: used to exit the loop 
            
        }
        console.log("odd number : ",i);
        

    }
}
controlStatement();