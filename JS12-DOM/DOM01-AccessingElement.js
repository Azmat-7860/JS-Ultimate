
function PrintMe(btnId) {
    //a. Accessing elements by ID
    let myHeading = document.getElementById('myHeadingId');

    //b. Accessing elements by class name
    let myParagraphs = document.getElementsByClassName('myParagraph');

    //c. Accessing elements by tag name
    let myH1 = document.getElementsByTagName("h1");

    //d. Accessing elements by query selector
    // This will select the first element with class 'myParagraph'
    let myPara = document.querySelector(".myParagraph");

    //e. Accessing elements by query selector all
    let myParaAll = document.querySelectorAll(".myParagraph");

    // Logging the results to the console
    let display = document.getElementById('display-box');
    
    console.log(btnId);
    switch (btnId) {
        case "getElementById":
            display.textContent = myHeading.outerHTML;
            break;
        case "getElementsByClassName":
            display.textContent = Array.from(myParagraphs).map(p => p.outerHTML).join('\n');
            break;
        case "getElementsByTagName":
            display.textContent = Array.from(myH1).map(h => h.outerHTML).join('\n');
            break;
        case "getQuerySelector":
            display.textContent = myPara.outerHTML ;
            break;
        case "getQuerySelectorAll":
            display.textContent = Array.from(myParaAll).map(p => p.outerHTML).join('\n');
            break;

    
        default: display.textContent = "No valid button ID provided.";
            break;
    }
    // <h1 class=" myHeading bg-info p-2 m-2 text-center fw-bold text-white" id="myHeadingId">Accessing the Element chapter 1</h1>

    // console.log(myHeading); // Logs the element with ID 'myHeadingId'
    // console.log(myParagraphs); // Logs a collection of elements with class 'myParagraph'
    // console.log(myH1); // Logs a collection of all <h1> elements in the document
    // console.log(myPara); // Logs the first element with class 'myParagraph'
    // console.log(myParaAll); // Logs a NodeList of all elements with class 'myParagraph'
}