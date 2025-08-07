function InOperator() {

    //in ::  operator checks if an object has a specific property/key.

    let person = {
        name: "Azmat all khan",
        age: 22,
        addr: "bbsr"
    }
    let hasName = "name" in person;
    let hasAddr = person.hasOwnProperty("addr");

    console.log(" Name is available in person : ", hasName);
    console.log("ADDR is available in person : ", hasAddr);



}
InOperator();