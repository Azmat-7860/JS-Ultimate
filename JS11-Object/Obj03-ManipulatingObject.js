function manipulatingObject() {

    const person = {
        name: "Azmat alli khan",
        age: 22,
        addr: "bbsr",
    }

    console.log("-------Modifying the Object Value----------");
    //a. Changing properties value
    person.name = "Mr.Anonymous"
    console.log("After Modify : ", person);

    //b. Adding Properties
    person.email = "anonymous@example.com";
    console.log("After Adding Email : ", person);

    //c. Delete properties
    delete person.age;
    console.log("After Deleting Age : ", person);

    //d.Check property availabilty
    console.log("has addr property : ", "addr" in person); // Output: true
    console.log("has age property : ", person.hasOwnProperty("age")); // Output: false
    
    //e. Looping through properties
    console.log("Looping through properties:");
    for(let key in person){
        console.log(`${ key}  :: ${person[key]}`);
    };
    
    
    


}
manipulatingObject();