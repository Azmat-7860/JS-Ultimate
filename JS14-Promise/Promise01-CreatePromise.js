function fetchData(){
/*    Note : A promise represents a value that may be available now, in the future, or never. 
            -> Cleaner way to handle the Asynchronous Function
            -> Promise can be in 3 state : i. Pending , ii. resolve ,iii. reject 
*/
    return new Promise((resolve,reject)=>{
        //Instead of setTimeout we can write db Queries or fetching data etc.. that takes time to complete
        setTimeout(()=>{
            const data = "This is some data";//give data
            // let data;// give error
            if (data) {
                resolve(data);      
            } else {
                reject("Error data not found")
            }
        },2000)

    })
}
fetchData()
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally("Complete the programmm...")