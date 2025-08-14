function TraverseMe(id) {
    const display = document.getElementById("traverse-display");
    const parentBox = document.getElementById("traverse-boox");
    const firstChild = parentBox.firstElementChild
    const siblingChild = firstChild.nextElementSibling;

    switch (id) {
        case 'traverseParent':
            display.textContent = parentBox.outerHTML;
            break;
        case 'traverseChild' : 
        display.textContent = firstChild.outerHTML;
            break;
        case 'traverseSibling':
            display.textContent = siblingChild.outerHTML;
            break;


        default: display.textContent = "No valid button ID provided.";
        alert("No valid button ID provided.");
            break;
    }
}