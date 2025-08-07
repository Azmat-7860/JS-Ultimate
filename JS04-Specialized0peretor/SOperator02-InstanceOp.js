class InstanceOp {
    // It checks if an object is an instance of a particular class or constructor function.

    constructor() {
        console.log("This is 0param constructor");
    }

}

const obj = new InstanceOp();
let isInstance = obj instanceof InstanceOp;
console.log("obj :: is instance of InstanceOp class : ", isInstance);
