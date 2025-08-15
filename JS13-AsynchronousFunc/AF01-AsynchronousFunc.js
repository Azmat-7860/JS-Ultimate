function AsynchronusFunc(){
    // Asynchronous programming : It is way or technique to handle the task that may take time to complete
    setTimeout(() => {
        console.log("This task take 2sec to complete");
    }, 2000);
}
console.log("Task started ");
AsynchronusFunc();
