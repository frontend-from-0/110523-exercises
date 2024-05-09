let formElement = document.getElementById("myForm");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formElement.addEventListener("submit", function (event) {

    event.preventDefault();

    let isFormCorrect = true;

    // Variables for verifying if email format is valid
    let inputElement = document.getElementById("email");
    let emailErrorElement = document.getElementById("email-error");

    //Variables to change .active-form class after submitted
    let formContainer = document.querySelector(".form-container");
    let confirmContainer = document.querySelector(".confirmation-container");

    //Variable for selecting user email on next form inside of the span content
    let userEmail = document.getElementById("confirm-email");

    if (!emailRegex.test(inputElement.value)) {
        emailErrorElement.textContent = "Please enter a valid email";
        isFormCorrect = false;
        inputElement.classList.add("error") ;
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



function checkWindowSize() {
    const imgSrc = document.querySelector(".right-container > img");
    if (window.innerWidth <= 601) { 
      imgSrc.src = "./assets/img_mobile.jpg";
    } else {
      imgSrc.src = "./assets/img_desktop.jpg";
    }
  }
  window.onload = checkWindowSize;
  window.onresize = checkWindowSize;