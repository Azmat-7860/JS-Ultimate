
function FetchData (){
    /* The Fetch API is a modern JavaScript API for making HTTP requests in a more flexible and 
    efficient way. */
    fetch("https://jsonplaceholder.typicode.com/todo/1")
        .then(res => res.json) // convert resonse data to json format 
        .then(data => console.log("API Data : ",data)) // using the data
        .catch(err => console.log("Found Error : ",err.message)) //Handling error
}

FetchData(); 