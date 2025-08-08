function switchCondition() {

    let today = new Date();
    let weekDay = today.getDay();// [0-6] 0 is sunday.

    // switch :: this statement is used to execute a block of code based on different cases.
    switch (weekDay) {
        case 0: console.log("sunday"); break;
        case 1: console.log("Monday"); break;
        case 2: console.log("Tuesday"); break;
        case 3: console.log("Wednesday"); break;
        case 4: console.log("Thrusday"); break;
        case 5: console.log("Friday"); break;
        case 6: console.log("Saturday"); break;
        default:
            console.log("Invalid Input");

    }
}
switchCondition();