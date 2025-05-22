function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3);
    let choices = ["rock", "paper", "scissors"];
    return choices[randomNumber];
}


console.log(getComputerChoice());
