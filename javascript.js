// start with a function that will randomly return 'Rock. 'Paper' or Scissors



function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
}