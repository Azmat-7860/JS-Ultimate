function StringManipulation() {


    // Example of string manipulation in JavaScript

    //a. toUpperCase() & toLowerCase() - converts the string to uppercase or lowercase
    const str = "Hello, Azmat Ali!";
    console.log("Uppercase: ", str.toUpperCase()); // Output: Uppercase:  HELLO, AZMAT ALI!
    console.log("Lowercase: ", str.toLowerCase()); // Output: Lowercase:  hello, azmat ali!

    //b. concat() - concatenates two or more strings
    const str1 = "Hello";
    const str2 = "Azmat Ali";
    const str3 = str1.concat(", ", str2, "!");
    console.log("Concatenated String: ", str3);  // Output: Concatenated String:  Hello, Azmat Ali!

    const str4 = "   Hello, Azmat Ali! ";
    console.log("Trimmed String: '" + str4.trim() + "'"); // ✅ Correct: Output → Trimmed String: 'Hello, Azmat Ali!'

    //d. replace() - replaces a specified substring with another substring
    const str5 = "Hello, Azmat Ali!";
    const newStr = str5.replace("Ali", "Khan");
    console.log("Replaced String: ", newStr); // Output: Replaced String:  Hello, Azmat Khan!

    //e. split() - splits a string into an array of substrings based on a specified delimiter
    const str6 = "Hello, Azmat Ali!";
    const words = str6.split(" ");
    console.log("Split String: ", words); // Output: Split String:  [ 'Hello,', 'Azmat', 'Ali!' ]

    //f. slice() - extracts a section of a string and returns it as a new string
    const str7 = "Hello, Azmat Ali!";
    const slicedStr = str7.slice(7, 12);
    console.log("Sliced String: ", slicedStr); // Output: Sliced String:  Azmat

    //g. substring() - returns a substring between two specified indices
    const str8 = "Hello, Azmat Ali!";
    const subStr = str8.substring(7, 12);
    console.log("Substring: ", subStr); // Output: Substring:  Azmat
    
}
StringManipulation();