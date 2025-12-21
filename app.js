const body = document.querySelector("body");
const icon = document.querySelector(".icon");
const btn = document.querySelector(".btn");
const addIcon = document.querySelector(".add-icon");
const options = document.querySelector(".options");
// const 
let mode = "#eeeeee";
let text = "black";
let btnbackColor = "black";
let btnColor = "#eeeeee";

icon.addEventListener("click", () => {
    if (mode == "#eeeeee") {

        mode = "black";
        text = "#eeeeee";
        body.style.backgroundColor = mode;
        body.style.color = text;
        // Button Color
        btnbackColor = "#eeeeee";
        btnColor = "black";
        btn.style.backgroundColor = btnbackColor;
        btn.style.color = btnColor;
        // Shift Icons
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        mode = "#eeeeee";
        text = "black";
        body.style.backgroundColor = mode;
        body.style.color = text;
        // button Color
        btnbackColor = "black";
        btnColor = "#eeeeee";
        btn.style.backgroundColor = btnbackColor;
        btn.style.color = btnColor;
        // Shift Icons
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

