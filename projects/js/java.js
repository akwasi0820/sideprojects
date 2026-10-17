const select = document.querySelector("select");
const para = document.querySelector("p");
const btn = document.querySelector("button");
const body = document.querySelector("body");

function setWeather() {
    const choice = select.value;

    if (choice === "Sunny") {
        para.textContent = "Its A Realll Sunny Day Out Go Touch Some Grass🥹",
        body.style.backgroundColor = "rgb(254, 254, 161)";
    }   else if (choice === "Rainy") {
        para.textContent = "Just Cuz Theres Water Out Dont Mean Yall Sharks Gotta Go Out🫩",
        body.style.backgroundColor = "#777"
    }   else if (choice === "Snowy") {
        para.textContent = "Theres White Stuff Falling From The Sky... Dont Mean U Open Ya Mouth..........",
        body.style.backgroundColor = "aliceblue"
    }   else if (choice === "NYS") {
        para.textContent = "And Of Course We Are Greeted With The 'Special Event' Skies Followed By Next Day Floods... What A Time To Live In New York🤦🏾‍♂️",
        body.style.backgroundColor = "rgb(255, 193, 78)"
    }   else if (choice === "") {
        para.textContent = ""
        body.style.backgroundColor = "antiquewhite"
    }
}

btn.addEventListener("click", setWeather);