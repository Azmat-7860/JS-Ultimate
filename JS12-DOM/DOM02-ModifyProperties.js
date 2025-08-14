function ModifyMe(btnId) {
    // alert("ModifyMe called with button ID: " + btnId);
    // let myHeading = document.getElementById('mdfy-box');
    let myHeading = document.getElementsByClassName("modify-sec")[0];

    let text = document.getElementsByTagName("h1")[1];// second h1 element

    //generating 6 digit random number
    let num = Math.round(Math.random() * 1000000) + 1;

    switch (btnId) {
        case "mdfy":
            document.body.style.backgroundColor = `#${num}`;
            break;
        case "change-text":
            text.innerText = `Random Number :  ${num}`;
            break;
        case "add-div":
            let newDiv = document.createElement("div");
            newDiv.innerText = `New Div with random number: ${num}`;
            newDiv.className = "new-div bg-success fs-5 text-white p-2 m-2 rounded-3";
            myHeading.appendChild(newDiv);
            break;
        case "remove-div":
            let div = document.querySelector(".new-div");
            div ? div.remove() : alert("Create a new div first!");
            break;
        // Add more cases if needed for other buttons

        default:
            break;
    }
}
