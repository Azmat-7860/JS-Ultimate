function modifyingArray(){

    let fruit = ["Apple", "Banana", "Cherry", "Date"];

    //a. push() - adds one or more elements to the end of an array
    fruit.push("Elderberry");
    console.log("After push: ", fruit); // Output: After push:  ["Apple", "Banana", "Cherry", "Date", "Elderberry"]

    //b. pop() - removes the last element from an array and returns it
    let lastFruit = fruit.pop();
    console.log("After pop: ", fruit); // Output: After pop:  ["Apple", "Banana", "Cherry", "Date"]
    console.log("Popped element: ", lastFruit); // Output: Popped element:  Elderberry

    //c. shift() removes the first element from the beginning of the array.
    let shiftFruit = fruit.shift();
    console.log("After shift : ", fruit);
    console.log("Popped element : ", shiftFruit);
    
    //d. unshift() - adds one or more elements to the beginning of an array
    fruit.unshift("Avocado");
    console.log("After unshift: ", fruit); // Output: After unshift:  ["Avocado", "Banana", "Cherry", "Date"]

    //e. splice() - adds/removes elements from an array at a specified index
    fruit.splice(1, 1, "Blueberry", "Coconut");
    console.log("After splice: ", fruit); // Output: After splice:  ["Avocado", "Blueberry", "Coconut", "Cherry", "Date"]

    //f. slice() - returns a shallow copy of a portion of an array into a new array object
    let slicedFruit = fruit.slice(1, 3);
    console.log("Sliced fruit: ", slicedFruit); // Output: Sliced fruit:  ["Blueberry", "Coconut"]  

    //g. concat() - merges two or more arrays and returns a new array
    let moreFruits = ["Fig", "Grape"];
    let allFruits = fruit.concat(moreFruits);
    console.log("Concatenated array: ", allFruits); // Output: Concatenated array:  ["Avocado", "Blueberry", "Coconut", "Cherry", "Date", "Fig", "Grape"]
}
modifyingArray();