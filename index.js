/*
generate random number for computer choice.
convert to choice
get human choice
    convert their choice to lowercase.
    make sure its a valid choice
    if not get another choice from them
convert both choices to numbers
choose who wins
increment the proper score counter
check if someone has gotten to 5 yet.
if not play again
if yes ask the player if they want to play again
*/

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
        return result
    }
    else if (result == 1) {
        console.log("you won, because you chose " + humanChoice + " which beats " + computerChoice)
        return result
    }
    else {
        console.log("computer won, because it chose " + computerChoice + " which beats " + humanChoice)
        return result
    }
    
}


function playGame() {
    let choices = ["rock", "paper", "scissors"];
    let humanScore = 0;
    let computerScore = 0;
    let play = true;
    while (play == true) {
        for (let i = 0; i < 5; ++i) {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            play = playRound(humanChoice, computerChoice)
            console.log("the score is " + humanScore +" to " + computerScore)
            again = prompt("play again?");
        }
        if (again == null) {
            play = false
        }
        play = again.toLowerCase().includes("y");
    }
}