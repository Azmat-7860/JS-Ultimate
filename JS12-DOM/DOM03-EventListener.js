
const myForm = document.getElementById('formId');
const nameInput = document.getElementById('nameInput');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const name = nameInput.value.toUpperCase();
    alert(`Hello ${name}, Welcome to the DOM Guide!`);
});

