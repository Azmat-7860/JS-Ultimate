function fetchData(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {
        if (!res.ok) {
            throw new Error("HTTP ERROR : "+res.status)
        }
        return res.json();
    })
    .then(data => console.log("Api Data :",data))
    .catch(err => console.log("Error : ",err.message) )

}fetchData()