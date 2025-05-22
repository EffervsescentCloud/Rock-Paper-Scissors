let choices = ["rock", "paper", "scissors"];

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper, or scissors");
    while (true) {
        if (choices.includes(humanChoice)) {
            return humanChoice;
        }
        else {
            humanChoice = prompt("Choice invalid. Please choose between rock, paper, or scissors")
        }
    }
}


console.log(getComputerChoice());
console.log(getHumanChoice());
