function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}
function getWinner(humanChoice, computerChoice) {
    let humanChoiceNum = choices.indexOf(humanChoice);
    let computerChoiceNum = choices.indexOf(computerChoice);

    let result = (((humanChoiceNum - computerChoiceNum) % 3) + 3) % 3
    if (result == 0) {
        return [`tie, computer and you both chose ${humanChoice}`, function() {return}]
    }
    else if (result == 1) {
        return [`computer chose ${computerChoice}, which loses to ${humanChoice}`, function() {++humanScore}]
    }
    else {
        return [`computer chose ${computerChoice}, which beats ${humanChoice}`, function() {++computerScore}]
    }
    
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice()
    let winner = getWinner(humanChoice, computerChoice)
    winnerDisplay.textContent = winner[0]
    winner[1]()
    let scoreText
    if (humanScore === 5) {
        scoreText = 'You won!'
        computerScore = 0
        humanScore = 0
    }
    else if (computerScore === 5) {
        scoreText = "computer won :("
        computerScore = 0
        humanScore = 0
    }
    else {
        scoreText = `the score is ${humanScore} to ${computerScore}`
    }
    scoreCounter.textContent = scoreText
}

let choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let winnerDisplay = document.getElementById("winnerDisplay")
let scoreCounter = document.getElementById("scoreCounter")

let rockButton = document.getElementById("rock")
let paperButton = document.getElementById("paper")
let scissorButton = document.getElementById("scissors")
rockButton.addEventListener("click", () => playRound("rock"))
paperButton.addEventListener("click", () => playRound("paper"))
scissorButton.addEventListener("click",() => playRound("scissors"))