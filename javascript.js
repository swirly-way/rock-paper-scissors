
// Selecting all elements (buttons) and calling a function taking a pChoice (player-choice) parameter

const buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
        button.addEventListener("click", function() {
           const pChoice = button.textContent;
            console.log(pChoice);
            playGame(pChoice);
        });
      });


// These variables store scores for both the player and the computer
    let playerScore = 0;
    let computerScore = 0; 

// This function plays a game of Rock Paper Scissors

function playGame(pChoice){

    

    // This function picks a random choice from an array containing rock, paper or scissors

    function getComputerChoice() {
        const choices = ['Rock', 'Paper', 'Scissors'];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        return randomChoice;
    }

    // this variables store the choice of both the player and the player.
    // The computer choice is generated by the function above and the player choice depends on which button user clicked
    const computerSelection = getComputerChoice();
    const playerSelection = pChoice;
    
    // This block of conditional statements modifies the image displaying the computer choice

    if(playerScore === 5 || computerScore === 5){
        document.querySelector('.cmptr-icon').src = './images/pc-again.jpeg';
    }
    else if(computerSelection === 'Paper'){
        document.querySelector('.cmptr-icon').src = './images/pc-paper.jpeg';
    }
    else if(computerSelection === 'Scissors'){
        document.querySelector('.cmptr-icon').src = './images/pc-scissors.jpeg';
    }
    else if(computerSelection === 'Rock'){
        document.querySelector('.cmptr-icon').src = './images/pc-rock.jpeg';
    }
    

    // This function plays a round of Rock Paper Scissors and rewards a point to the winner
    function playRound(playerSelection, computerSelection) {
        if (playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore++;
            document.getElementById("instant").textContent= `You Win! ${playerSelection} beats ${computerSelection}`;
            
        }
        else if (computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Rock'
        ) {
            computerScore++;
            document.getElementById("instant").textContent= `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else {
            document.getElementById("instant").textContent= `Draw! ${playerSelection} and ${computerSelection} are matched`;
        }

        document.getElementById("total-player").textContent= `Player: ${playerScore}`;
    document.getElementById("total-pc").textContent= `Computer: ${computerScore}`;
    }

    

    console.log(playRound(playerSelection, computerSelection));
    console.log(playerScore, computerScore);

}

// Function that resets to initial value visible results.



const init = function (){

    playerScore = 0;
    computerScore = 0;
    document.getElementById('instant').textContent = 'And the winner is...';
    document.querySelector('.cmptr-icon').src = './images/pc-again.jpeg';

}









