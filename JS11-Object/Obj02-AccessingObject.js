function accessingObject(){

    const person = {
        name : "Azmat alli khan",
        age : 22,
        addr : "bbsr",
    }

    console.log( "My name is : ", person.name);//a. Using dot notation
    console.log( "My age is : ", person["age"]);//b. Using bracket notation

    console.log("-------Modifying the Object Value----------");

    
    person.name = "Mr.Anonymous"
    console.log("After Modify : ",person);
    
    

}
accessingObject();