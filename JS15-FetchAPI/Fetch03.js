async function fetchData() {
    try {
        let APIresponse = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        //  this is also mandatory
        if (!APIresponse.ok) {// this is server error like 404 and 500
            throw new Error("Server Error : "+APIresponse.status)
        }
        let data = await APIresponse.json();
        console.log("API Data : ",data);

    } catch (error) {
        console.log(error.message);
        
    }
}
fetchData();