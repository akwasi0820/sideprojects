const change = document.querySelector("span");

const btn1 = document.querySelector(".no");
const btn2 = document.querySelector(".yes");
const btn3 = document.querySelector(".reset");
const hide = document.querySelector(".hide");

function nOOOOOO() {
    change.textContent = "now why the everloving FAWQ would u click the BIG RED BUTTON that says 'DO NOT CLICK' when theres a BIG GREEN BUTTON that says 'CLICK MEEE'!!!!!"
    change.style.color = ("#ff000d");
}

function yes() {
    change.textContent = "Thank You For Being A Smart And Functional Homo Sapien!";
    change.style.color = ("lightgreen");
}

function reset() {
    change.textContent = "This Sample Text Has The Power To Change For The Better Or Worse...";
    change.style.color = ("yellow");
}

function reveal() {
    window.location.href = 'hidden/index.html';
}

btn1.addEventListener("click", nOOOOOO);
btn2.addEventListener("click", yes);
btn3.addEventListener("click", reset)
hide.addEventListener("click", reveal);