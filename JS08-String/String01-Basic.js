function string01() {

    // Strings are sequences of characters enclosed in single (' '), double (" "), or backticks (` `) quotes. 

    //String Concatination
    var str1 = "Azmat";
    var str2 = "Ali";
    var str3 = str1 + " " + str2;
    console.log(str3); // Output: Azmat Ali

    //String Interpolation
    var str4 = `My name is ${str1} ${str2}`;
    console.log(str4); // Output: My name is Azmat Ali
}
string01();