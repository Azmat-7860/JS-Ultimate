function fetchData(callBack){
    console.log("Fetching data............");
    setTimeout(()=>{
        const data = "Fetched data"
        callBack(data);
    },2000)
}

function useData(data){
    console.log("Data : ", data);
}

fetchData(useData);