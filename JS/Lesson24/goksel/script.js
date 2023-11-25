let formElement = document.getElementById("myForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formElement.addEventListener("submit", function (event) {

    event.preventDefault();

    let isFormCorrect = true;

    // Variables for to check if email format is valid
    let inputElement = document.getElementById("email");
    let emailErrorElement = document.getElementById("email-error");

    //Variables to change .active-form class after submitted
    let formContainer = document.querySelector(".form-container");
    let confirmContainer = document.querySelector(".confirm-container");

    //Variable for to use user email on next form inside of the span content
    let userEmail = document.getElementById("confirm-email");

    if (!emailRegex.test(inputElement.value)) {
        emailErrorElement.textContent = "Please enter a valid email";
        isFormCorrect = false;
        inputElement.style.color = "#FF6253";
        inputElement.style.backgroundColor = "#FFE8E6";
        // ı cound not change the border color here, how can ı do that?
        inputElement.style.borderColor; "#FFE8E6";
    } else {
        emailErrorElement.textContent = "";
    }

    if (isFormCorrect) {

        formContainer.classList.remove("active-form");
        confirmContainer.classList.add("active-form");

        userEmail.textContent = inputElement.value;
        userEmail.style.fontWeight = "900";
    }
});