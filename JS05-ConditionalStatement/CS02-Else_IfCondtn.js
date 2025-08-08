function ifCondition(){
    let pass ="azmat123"
    let isStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pass);

    // else if :: this give one more condition to chek if previous one is false,u can use multiple else if block 
    if (isStrong ) {
        console.log("Your Passoword is strong");
    }
    else if (pass.length >= 6) {
        console.log("Your password is Normal");
        
    }
     else {
        console.log("Your Passoword is Poor");
    }

}
ifCondition();