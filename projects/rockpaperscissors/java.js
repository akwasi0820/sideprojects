gameButton = document.querySelector(".gamestart");
rock = document.querySelector(".opt1");
paper = document.querySelector(".opt2");
scissors = document.querySelector(".opt3");
scoreboardH = document.querySelector(".humanscore");
scoreboardC = document.querySelector(".compscore");
dir = document.querySelector(".directions");
result = document.querySelector(".current");
cChoice = document.querySelector(".computer");

let humanScore = 0;
let computerScore = 0;
let humanChoice = "none";

function computerChoice() {
  let getComputerChoice = Math.floor(Math.random() * 3) + 1;
  if (getComputerChoice === 1) {
    return "Rock";
  } else if (getComputerChoice === 2) {
    return "Paper";
  } else if (getComputerChoice === 3) {
    return "Scissors";
  }
}

function playRound() {
  let compChoice = computerChoice();
  cChoice.textContent = `Comp Picked: ${compChoice}`;
  if (humanChoice === "none") {
    dir.textContent = "U NEED TO PICKK";
  } else if (humanChoice === compChoice) {
    result.textContent =
      "TIE! No Points Awarded. Pick A New Choice and Play Again";
    dir.textContent = "Pick A Choice!";
  } else if (humanChoice === "Rock" && compChoice === "Scissors") {
    result.textContent = "Rock Beats Scissors! Human Gets The Point";
    humanScore++;
    scoreboardH.textContent = `${humanScore}`;
  } else if (humanChoice === "Rock" && compChoice === "Paper") {
    result.textContent = "Paper Beats Rock! Computer Gets The Point";
    computerScore++;
    scoreboardC.textContent = `${computerScore}`;
  } else if (humanChoice === "Paper" && compChoice === "Scissors") {
    result.textContent = "Scissors Beats Paper! Computer Gets The Point";
    computerScore++;
    scoreboardC.textContent = `${computerScore}`;
  } else if (humanChoice === "Paper" && compChoice === "Rock") {
    result.textContent = "Paper Beats Rock! Human Gets The Point";
    humanScore++;
    scoreboardH.textContent = `${humanScore}`;
  } else if (humanChoice === "Scissors" && compChoice === "Rock") {
    result.textContent = "Rock Beats Scissors! Computer Gets The Point";
    computerScore++;
    scoreboardC.textContent = `${computerScore}`;
  } else if (humanChoice === "Scissors" && compChoice === "Paper") {
    result.textContent = "Scissors Beats Paper! Human Gets The Point";
    humanScore++;
    scoreboardH.textContent = `${humanScore}`;
  }
}

gameButton.addEventListener("click", playRound);

rock.addEventListener("click", () => {
  humanChoice = "Rock";
  rock.style.backgroundColor = "greenyellow";
  paper.style.backgroundColor = "#EFEFEF";
  scissors.style.backgroundColor = "#EFEFEF";
});
paper.addEventListener("click", () => {
  humanChoice = "Paper";
  rock.style.backgroundColor = "#EFEFEF";
  paper.style.backgroundColor = "greenyellow";
  scissors.style.backgroundColor = "#EFEFEF";
});
scissors.addEventListener("click", () => {
  humanChoice = "Scissors";
  rock.style.backgroundColor = "#EFEFEF";
  paper.style.backgroundColor = "#EFEFEF";
  scissors.style.backgroundColor = "greenyellow";
});
