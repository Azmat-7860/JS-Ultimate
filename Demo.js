function test() {
    let x;          // declaration moved to top
    x = 33;  
    x =55;       // value assigned here
    console.log(x); // undefined (because of hoisting)
}
test();
