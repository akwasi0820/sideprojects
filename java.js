const visit = document.querySelector(".sec2b")
const bx1 = document.querySelector(".box", ".one");
const sec5h = document.querySelector(".sec5h");
const sec5p = document.querySelector(".sec5p");
const sec5b = document.querySelector(".sec5b")


visit.addEventListener("click", redir1)
sec5b.addEventListener("click", troll)

function redir1() {
    window.location.href = "./projects/functions/return.html", ""
}

let guesscount = 0;


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