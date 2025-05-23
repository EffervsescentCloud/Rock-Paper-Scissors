function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    while (true) {
        if (humanChoice === null) {
            return
        }
        else if (choices.includes(humanChoice.toLowerCase())) {
            return humanChoice.toLowerCase();
        }
        else {
            humanChoice = prompt("Choice invalid. Please choose between rock, paper, or scissors");
        }
    }
}
function playRound(humanChoice, computerChoice) {
    let humanChoiceNum = choices.indexOf(humanChoice);
    let computerChoiceNum = choices.indexOf(computerChoice);

    let result = (humanChoiceNum - computerChoiceNum) % 3;
    if (result == 0) {
        console.log("tie, both players chose " + humanChoice)
    }
    else if (result == 1) {
        console.log("you won, because you chose " + humanChoice + " which beats " + computerChoice)
        ++humanScore
    }
    else {
        console.log("computer won, because it chose " + computerChoice + " which beats " + humanChoice)
        ++computerScore
    }
    console.log("the score is " + humanScore +" to " + computerScore)
    again = prompt("play again?");
    if (again == null) {
        return false
    }
    return prompt.toLowerCase().includes("y");
}


let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let play = true;

while (play == true) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    play = playRound(humanChoice, computerChoice)
}
