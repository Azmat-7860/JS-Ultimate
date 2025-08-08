function ifCondition() {
    let pass = "Azmat123"
    let isStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(pass);

    // if :: this statement is used to execute a block of code if a specified condition is true. 
    if (isStrong && pass.length >= 6) {
        console.log("Your Passoword is strong");
    }
    // else :: this statement is execute when if condition is false
    else {
        console.log("Your Passoword is Poor");
    }

}
ifCondition();