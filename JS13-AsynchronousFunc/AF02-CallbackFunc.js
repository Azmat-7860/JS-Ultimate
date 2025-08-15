function callBackFunc() {
    console.log("this is call back funtion.....");

}

function regularFunc(callBack) { // callBack - is an argument of regularfunction
    console.log("This is normal funtion");
    callBack();

}
regularFunc(callBackFunc);// call the function with an callbackfunc argument