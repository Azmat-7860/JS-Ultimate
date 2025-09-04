// ----------------------------Rest Operator---------------------------------
function RestTest(...nums) {
    // Rest Operator (...): Used in function parameters to collect all remaining arguments into an array.
    return nums.reduce((a, b) => a + b, 0)
}
console.log(RestTest(2, 3, 4, 5, 6));

// ----------------------------Spread Operator---------------------------------
let arr1 = ["lion","tiger","cheetah"];
let arr2 = ["peacock","parrot","pigion"];

// Spread Operator (...): Used to expand (spread) arrays or objects into individual elements.
let commbin = [...arr1,...arr2];

console.log(commbin);
