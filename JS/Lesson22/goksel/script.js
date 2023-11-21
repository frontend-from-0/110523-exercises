let contents = document.querySelectorAll(".content");

let buttons = document.querySelectorAll(".click-btn");

buttons.forEach((btn,index)  => {
    btn.addEventListener("click",function(){
        contents[index].classList.toggle("active");
        btn.classList.toggle("active");


        if(contents[index].classList.contains("active")){
            btn.style.color = "#ffff00";
            btn.style.fontWeight = "800";
            btn.style.fontSize = "18px";
            
        }else {
            btn.style.color = "";
            btn.style.fontSize = "";
            btn.style.fontWeight = "";
            
        }
    })
});

