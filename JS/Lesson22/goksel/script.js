let contents = document.querySelectorAll(".content");

let buttons = document.querySelectorAll(".click-btn");

buttons.forEach((btn,index)  => {
    btn.addEventListener("click",function(){
        contents[index].classList.toggle("active");
        btn.classList.toggle("active");
    })
});

