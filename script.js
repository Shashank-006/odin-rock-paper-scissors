function makeButton(option) {
    const button = document.createElement("button");
    button.textContent = option;
    buttonContainer.appendChild(button);
    button.addEventListener("click", () => playRound(option, getComputerChoice()));
    return button;
}

const buttonContainer = document.createElement("div");
buttonContainer.setAttribute("style", "display: flex; justify-content: space-between; margin: 30px 20% 0px");
document.body.appendChild(buttonContainer);

const rockButton = makeButton("rock");
const scissorsButton = makeButton("scissors");
const paperButton = makeButton("paper");

const results = document.createElement("div");
document.body.appendChild(results);
results.setAttribute("style", "text-align: center");

const winner = document.createElement("div");
document.body.appendChild(winner);
winner.setAttribute("style", "font-size: 24px; text-align: center");


function getComputerChoice() {
    const val = Math.random();
    if(val < (1 / 3)) {
        return "rock";
    } else if(val < (2 / 3)) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {  
    let val = "";
    let lowerVal = "";
    while(lowerVal != "paper" && lowerVal != "scissors" && lowerVal != "rock") {
	    val = prompt("What option do you want to pick? (rock, paper, scissors)");
        lowerVal = val.toLowerCase();
    }
    return val;
}

let computerScore = 0;
let humanScore = 0;

function convertChoiceToNumber(choice) {
    switch (choice) {
        case "rock":
            return 0;
        case "paper":
            return 1;
        case "scissors":
            return 2;
    }
}

function playRound(humanChoice, computerChoice) {
    let humanVal = convertChoiceToNumber(humanChoice.toLowerCase()) + 3;
    let computerVal = convertChoiceToNumber(computerChoice);

    console.log(humanChoice);
    console.log(computerChoice);

    let isTie = humanVal - 3 === computerVal;
    let isHumanWinner = (humanVal - computerVal) % 3 === 1;

    if(isTie) {
        console.log("Tie!");
    } else if(isHumanWinner) {
        console.log("Human Wins!");
        humanScore++;
        if(humanScore === 5) {
            winner.textContent = `Human Wins! (${humanScore} - ${computerScore})`;
            humanScore = 0;
            computerScore = 0;
        }
    } else {
        console.log("Computer Wins!");
        computerScore++;
        if(computerScore === 5) {
            winner.textContent = `Computer Wins! (${computerScore} - ${humanScore})`;
            humanScore = 0;
            computerScore = 0;
        }
    }

    if(computerScore === 5) {
        winner.textContent = "Computer Wins!";
    } else if(humanScore === 5) {
        winner.textContent = "Human Wins!";
        humanScore === 5;
    }

    results.textContent = `Score: Human: ${humanScore} Computer: ${computerScore}`;
}

function playGame() {
    
}
playGame();