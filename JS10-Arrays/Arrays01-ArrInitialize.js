function arrayInitialize() {
    //a. Initialize with array literal
    const arr1 = [1, 2, 3, 4, 5, "Hello", true , null];
    console.log("Array Literal: ", arr1); // Output: Array Literal:  [ 1, 2, 3, 4, 5, 'Hello', true, null ]

    //b. Initialize with Array constructor
    const arr2 = new Array(1, 2, 3, 4, 5, "Hello", true , null);
    console.log("Array Constructor: ", arr2); // Output: Array Constructor:  [ 1, 2, 3, 4, 5, 'Hello', true, null ]

    //c. Initialize with Array.of() - creates a new array instance with a variable number of arguments
    const arr3 = Array.of(11, 12, 13, 14, 15);
    console.log("Array.of(): ", arr3); // Output: Array.of():  [ 11, 12, 13, 14, 15 ]


}
arrayInitialize();