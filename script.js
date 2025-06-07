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
	    val = prompt("Try again: what option do you want to pick? (rock, paper, scissors)");
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
        return;
    } else if(isHumanWinner) {
        console.log("Human Wins!");
        humanScore++;
        return;
    } else {
        console.log("Computer Wins!");
        computerScore++;
        return;
    }
}

function playGame() {
    while(computerScore < 5 && humanScore < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        console.log(`Score: \nHuman: ${humanScore} Computer: ${computerScore}`);
    }
}
playGame();