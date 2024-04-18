
let playerScore = 0;
    let computerScore = 0; 

function playGame(){
    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    const computerSelection = getComputerChoice();
    const playerSelection = prompt();
    
    

    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore++;
            return `You win! ${playerSelection} beats ${computerSelection}`;
            
        }
        else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Rock'
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





