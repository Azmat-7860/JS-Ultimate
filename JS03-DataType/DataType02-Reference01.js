function ReferenceDatatype(){
    // 7 Reference Data Types in JavaScript :
    // Object, Array, Function, Date, RegExp, Map, Set
    
    // 1.Object Datatype
    let person = {
        name: "Azmat Alli Khan",
        age: 20,
        isEmployed: true
    };
    console.log("Object Datatype: ", person);
    // 2.Array Datatype
    let car = ["Audi","BIMMER","Pagani"];
    console.log("Array Datatype : ",car);
    // 3.Function Datatype
    function wish(){
        console.log("Happy Birthday Azmat Khan");        
    }
    wish(); // Calling the function
    // 4.Date Datatype
    let today = new Date();
    console.log("Date Datatype: ", today.toLocaleDateString());
    console.log("Date Datatype: ", today.toLocaleTimeString());
    
}
    //Rest code in next file    

ReferenceDatatype();