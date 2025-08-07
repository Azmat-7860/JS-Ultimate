function CommaOperator() {
    let a = 1, b = 2, c = 3;
    let result = (a++, b++, c++); // All increment, but only c++ result is returned
    console.log("a:", a); // 2
    console.log("b:", b); // 3
    console.log("c:", c); // 4
    console.log("Result is:", result); // 3 (the value of c before increment)
}
CommaOperator();