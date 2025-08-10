function commonMethods() {
    // Common String Methods in JavaScript

    //a. length() - returns the length of the string
    const str = "Hello, Azmat Ali!";
    console.log("Length of the str : ",str.length); // Output: Length of the str :  17

    //b. charAt() - returns the character at a specified index
    console.log("Character at index 7 : ", str.charAt(7)); // Output: Character at index 7:  A
    
    //c. indexOf() - returns the index of the first occurrence of a specified string, or -1 if not found
    console.log("Index of 'Azmat' : ", str.indexOf("Azmat")); // Output: Index of 'Azmat' :  7
    console.log("Index of 'John' : ", str.indexOf("John")); // Output: Index of 'John' :  -1

    //d. includes() - checks if a string contains a specified substring
    console.log("Does the string include 'Azmat'? : ", str.includes("Azmat")); // Output: Does the string include 'Azmat'? :  true

    //e. startsWith() & endsWith() - checks if a string starts or ends with a specified substring
    console.log("Does the string start with 'Hello'? : ", str.startsWith("Hello")); // Output: Does the string start with 'Hello'? :  true
    console.log("Does the string end with 'Ali!'? : ", str.endsWith("Ali!")); // Output: Does the string end with 'Ali!'? :  true
    
    
    
}
commonMethods();