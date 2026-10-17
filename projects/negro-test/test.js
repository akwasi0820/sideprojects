let one = 0
let two = 0
let three = 0
let four = 0
let five = 0
let six = 0
let seven = 0
let eight = 0

const btn1 = document.querySelector(".byone")
const btn2 = document.querySelector(".bnone")
const btn3 = document.querySelector(".bytwo")
const btn4 = document.querySelector(".bntwo")
const btn5 = document.querySelector(".bythree")
const btn6 = document.querySelector(".bnthree")
const btn7 = document.querySelector(".byfour")
const btn8 = document.querySelector(".bnfour")
const btn9 = document.querySelector(".byfive")
const btn10 = document.querySelector(".bnfive")
const btn11 = document.querySelector(".bysix")
const btn12 = document.querySelector(".bnsix")
const btn13 = document.querySelector(".byseven")
const btn14 = document.querySelector(".bnseven")
const btn15 = document.querySelector(".byeight")
const btn16 = document.querySelector(".bneight")
const submitb = document.querySelector(".submitb")

function yes1() {
    one = 1
    btn1.style.backgroundColor = ("green")
    btn2.style.backgroundColor = ("darkslategray")
}

function yes2() {
    two = 1
    btn3.style.backgroundColor = ("green")
    btn4.style.backgroundColor = ("darkslategray")
}

function yes3() {
    three = 1
    btn6.style.backgroundColor = ("green")
    btn5.style.backgroundColor = ("darkslategray") 
}

function yes4() {
    four = 1
    btn8.style.backgroundColor = ("green")
    btn7.style.backgroundColor = ("darkslategray")
}

function yes5() {
    five = 1
    btn9.style.backgroundColor = ("green")
    btn10.style.backgroundColor = ("darkslategray")
}

function yes6() {
    six = 1
    btn12.style.backgroundColor = ("green")
    btn11.style.backgroundColor = ("darkslategray")
}

function yes7() {
    seven = 1
    btn13.style.backgroundColor = ("green")
    btn14.style.backgroundColor = ("darkslategray")
}

function yes8() {
    eight = 1
    btn16.style.backgroundColor = ("green")
    btn15.style.backgroundColor = ("darkslategray")
}

function no1() {
    one = 0
    btn1.style.backgroundColor = ("darkslategray")
    btn2.style.backgroundColor = ("green")
}

function no2() {
    two = 0
    btn3.style.backgroundColor = ("darkslategray")
    btn4.style.backgroundColor = ("green")
}

function no3() {
    three = 0
    btn6.style.backgroundColor = ("darkslategray")
    btn5.style.backgroundColor = ("green")
}

function no4() {
    four = 0
    btn8.style.backgroundColor = ("darkslategray")
    btn7.style.backgroundColor = ("green")
}

function no5() {
    five = 0
    btn9.style.backgroundColor = ("darkslategray")
    btn10.style.backgroundColor = ("green")
}

function no6() {
    six = 0
    btn12.style.backgroundColor = ("darkslategray")
    btn11.style.backgroundColor = ("green")
}

function no7() {
    seven = 0
    btn13.style.backgroundColor = ("darkslategray")
    btn14.style.backgroundColor = ("green")
}

function no8() {
    eight = 0
    btn16.style.backgroundColor = ("darkslategray")
    btn15.style.backgroundColor = ("green")
}

function submit() {
    let sum = (one+two+three+four+five+six+seven+eight)
    if (sum == 1) {
        alert('Naa U Are White. Dont Care What U Gotta Say')
    } else if (sum == 2) {
        alert('Pretty White There Aint Ya Fella')
    } else if (sum == 3) {
        alert('Pretty White There Aint Ya Fella')
    } else if (sum == 4) {
        alert('Ur White... I Just Cant Prove It')
    } else if (sum == 5) {
        alert('Ur White... I Just Cant Prove It')
    } else if (sum == 6) {
        alert('U Got Quite A Bit Of Black In You Son')
    } else if (sum == 7) {
        alert('You Got Quite A Bit Of Black In You Son')
    } else if (sum == 8) {
        alert('You Are A True Black Nigga... Indeed One OF US!')
    } else if(sum == 0) {
        alert('Ur So White The System Aint Even Recognize U')
    }
    console.log(sum)
}

btn1.addEventListener("click", yes1)
btn2.addEventListener("click", no1)
btn3.addEventListener("click", yes2)
btn4.addEventListener("click", no2)
btn5.addEventListener("click", no3)
btn6.addEventListener("click", yes3)
btn7.addEventListener("click", no4)
btn8.addEventListener("click", yes4)
btn9.addEventListener("click", yes5)
btn10.addEventListener("click", no5)
btn11.addEventListener("click", no6)
btn12.addEventListener("click", yes6)
btn13.addEventListener("click", yes7)
btn14.addEventListener("click", no7)
btn15.addEventListener("click", no8)
btn16.addEventListener("click", yes8)
submitb.addEventListener("click", submit)