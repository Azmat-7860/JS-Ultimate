function FetchData(){
    return new Promise((resolve,reject) =>{
       fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(resp => resp.json())// when we call fetch it give response obj we have to parse js object
            .then(data => resolve(data))
            .catch(err => reject(err))
    });
}

FetchData()
    .then(myData => console.log(("Api Data : ",myData)))
    .catch(myErr => console.log("Api error : ",myErr))
    .finally(()=> console.log("Completeddddd"));