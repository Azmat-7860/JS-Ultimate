function doWhileLoop() {
    let i = 7;
    // do-while loop :: is similar to the while loop, but condition is checked after executing the block of code.
    // the block of code will be executed at least once.
    do {
        console.log("Count is : ", i);
        i--;
    } while (i > 0);
}doWhileLoop();