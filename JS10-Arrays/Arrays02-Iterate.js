function arrayIterate() {

    const arr = [1, 3, "Hello", true, null, 5.5];

    //a. forEach() - executes a provided function once for each array element & don't return anything
    console.log("Using forEach method ---->");
    arr.forEach((item, index) => {
        console.log(`Element at index ${index} : ${item}`);

    })


    console.log("usign Map method ---->");

    //b. map() - execute a provided function once for each array element and returns a new array
    arr.map((item, index) => {
        console.log(`Element at index ${index} : ${item}`);

    })

    //c. filter() - creates a new array with all elements that pass the test implemented by the provided function
    console.log("Using filter method ---->");
    const arr1 = [1,2,3,4,5,6,7,8,9,10];
    const evenNumbers = arr1.filter((item) => { return item % 2 === 0 }) ;
    console.log("Even Numbers: ", evenNumbers); // Output: Even Numbers:  [ 2, 4, 6, 8, 10 ]
    


}
arrayIterate();