function step01(callBack2) {
    setTimeout(() => {
        callBack2()
        console.log("Step 1 is completed");

    }, 2000);
}

function step02(callBack3) {
    setTimeout(() => {
        callBack3();//it calls the step 1 method
        console.log("Step 2 is completed");

    }, 2000)
}

function step03() {
    setTimeout(() => {
        console.log("Step 3 is completed..");
        console.log("All step is completed ");

    }, 2000);
}

step01(() =>
    step02(() =>
        step03())
);