let value = 1

const btn1 = document.querySelector(".one")
const btn2 = document.querySelector(".two")
const btn3 = document.querySelector(".three")
const btn4 = document.querySelector(".four")
const btn5 = document.querySelector(".five")
const btn6 = document.querySelector(".six")
const btn7 = document.querySelector(".seven")
const btn8 = document.querySelector(".eight")
const submitb = document.querySelector(".submit")

btn1.addEventListener("click", yes)
btn2.addEventListener("click", no)
btn3.addEventListener("click", yes)
btn4.addEventListener("click", no)
btn5.addEventListener("click", yes)
btn6.addEventListener("click", no)
btn7.addEventListener("click", yes)
btn8.addEventListener("click", no)
submitb.addEventListener("click", submit)

function yes() {
    value++
    if (value > 8) {
        value = 8
    }
    console.log(value)

}

function no() {
    value--
    if (value < 0) {
        value = 0
    }
    console.log(value)
}

function submit() {
    if (value == 4) {
        alert('this is true')
    } else {alert('naa gngy')}
}