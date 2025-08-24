function fetchData(user,pass){
    return new Promise((resolve,reject)=>{
        console.log("Checking Credential...|It take few Seconds");
        
        //Instead of setTimeout we can write db Queries or fetching data etc.. that takes time to complete
        setTimeout(()=>{
           if (user === "admin" & pass === "1234") {
            resolve("Login Successfull...")
           } else {
            reject("X .Invalid Credential. X")
           }
        },2000)

    })
}
fetchData("admin","1234")
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally("Complete the programmm...")