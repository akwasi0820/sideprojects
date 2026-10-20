const visit = document.querySelector(".sec2b")
const bx1 = document.querySelector(".box.one");
const bx2 = document.querySelector(".box.two");
const bx3 = document.querySelector(".box.three");
const bx4 = document.querySelector(".box.four");
const bx5 = document.querySelector(".box.five");
const sec5h = document.querySelector(".sec5h");
const sec5p = document.querySelector(".sec5p");
const sec5b = document.querySelector(".sec5b")

let guesscount = 0;

visit.addEventListener("click", redir1)
sec5b.addEventListener("click", troll)
bx1.addEventListener("click", redir2)
bx2.addEventListener("click", redir3)
bx3.addEventListener("click", redir4)
bx4.addEventListener("click", redir5)
bx5.addEventListener("click", redir6)

function redir1() {
    window.location.href = "./projects/functions/return.html"
}
function redir2() {
    window.location.href = "./projects/html-playground/index.html"
}
function redir3() {
    window.location.href = "./projects/negro-test/index.html"
}
function redir4() {
    window.location.href = "./projects/js/index.html"
}
function redir5() {
    window.location.href = "./projects/functions/index.html"
}
function redir6() {
    window.location.href = "./projects/odin-recipies/index.html"
}

function troll() {
    guesscount++

    if (guesscount === 1) {
        sec5h.textContent = "DO NOT OPEN!!!"
        sec5p.textContent = "Thats On Me For Putting It In Small Text"
    }
    if (guesscount === 2) {
        sec5h.textContent = "Try It Again See What Happens."
        sec5p.textContent = "Its Really Simple Directions"
    }
    if (guesscount >= 3) {
        sec5h.textContent = "Fuc."
        sec5p.textContent = "btw that was ai...🌚"
        window.location.href = "./projects/index.html"
    }
}