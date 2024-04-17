// start with a function that will randomly return 'Rock. 'Paper' or Scissors



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
}

// write a function that plays a single round of rock paper scissors taking two parameters:
// playerSelection and computerSelection and then return a string declaring the winner

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
    playerSelection === 'Scissors' && computerSelection === 'Paper' ||
    playerSelection === 'Paper' && computerSelection === 'Rock') {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}