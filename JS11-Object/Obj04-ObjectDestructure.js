
function destructureObject(){

    const person = {
        fName : "Azmat",
        lName : "Khan",
        age : 22,
    }
    console.log("-------Destructuring Object----------");
    //a. Destructuring Object
    const {fname ,lName} = person;
    console.log("First Name : ", fname); // Output: First Name :  Azmat
    console.log("Last Name : ", lName); // Output: Last Name :  Khan
    
}
    
destructureObject();