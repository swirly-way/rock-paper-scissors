
    let playerScore = 0;
    let computerScore = 0; 

function playGame(){
    function getComputerChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    const computerSelection = getComputerChoice();
    const playerSelection = prompt().toLowerCase();
    
    

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

for (let i = 0; i <= 4; i++){
 playGame();
}





