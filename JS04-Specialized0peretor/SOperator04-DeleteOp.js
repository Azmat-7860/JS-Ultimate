function DeleteOperator() {

    // delete ::   operator removes a property from an object. 
    
    let person = {
        name: "Azmat all khan",
        age: 22,
        addr: "bbsr"
    }

    console.log("Delete the addr : ", delete person.addr);

    console.log(person);

}
DeleteOperator();