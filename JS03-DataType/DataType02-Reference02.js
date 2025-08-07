function Reference02() {
    // 7 Reference Data Types in JavaScript :
    // Object, Array, Function, Date, RegExp, Map, Set

    // 5.RegExp Datatype
    let regex = /[A-Z]/;
    console.log("RegExp Datatype: ", regex.test("Azmat")); // true

    //Realtime example of RegExp
    let pass = "Azmat123";
    let letter = /[A-Z]/;
    let smLetter = /[a-z]/;
    let hasSpecial = /[!@#$%&*]/.test(pass);
    let digit = /\d/; // \d means any digit (0-9)
    if (digit.test(pass) && letter.test(pass) && smLetter.test(pass) && hasSpecial && pass.length >= 6) {
        console.log("Valid password");
    } else {
        console.log("Invalid password");
    }

    //Another RegExp example
    let isValidPass  =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(pass);
    if (isValidPass && pass.length >= 6) {
        console.log("My new password is Strong");
    }else{
        console.log("My new password is Poor");
        
    }



}

Reference02();