// These variables store scores for both the player and the computer
    let playerScore = 0;
    let computerScore = 0; 

// This function plays a game of Rock Paper Scissors

function playGame(){

    // This function picks a random choice from an array containing rock, paper or scissors

    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    // this variables store the choice of both the player and the player.
    // The computer choice is generated by the function above and the player choice by input of user.
    const computerSelection = getComputerChoice();
    const playerSelection = prompt().toLowerCase();


    // This function plays a round of Rock Paper Scissors and rewards a point to the winner
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
            
        }
        else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'scissors' && playerSelection === 'paper' ||
        computerSelection === 'paper' && playerSelection === 'rock'
        ) {
            computerScore++;
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            return `Draw! ${computerSelection} and ${playerSelection} are matched!`
        }
    }

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);

}

//This loop calls the playGame function for five rounds


for (let i = 0; i <= 4; i++){
 playGame();
 if (i === 4) {
    console.log('Display message with final score!');
}
}









