// Step 1:
// Create function getComputerChoice 
// make the finction choose 'Rock', 'Paper', or 'Scissors'
// Test in console
function getComputerChoice () {
    let rock= 'Rock';
    let paper= 'Paper';
    let scissors= 'Scissors';
    let randomChoice= Math.random();

    if (randomChoice <= 0.33) {
        return rock;
    } else if (randomChoice <= 0.66) {
        return paper;
    } else {
        return scissors;
    }
}


// Step 2:
// Write a function that plays single round of Rock Paper Scissors
// The function has two parametars: playerSelection, computerSelection
// Function returns string: 'You win', or 'You lose'
// playerSelection parametar is case insensitive!

function singleRound (playerSelection, computerSelection) {
    let tie= 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + 'it\'s a tie.';
    let rockVSpaper= 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You lose.';
    let rockVSscissors = 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You win.';
    let paperVSscissors = 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You lose.';
    let paperVSrock = 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You win.';
    let scissorsVSrock = 'You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You lose.';
    let scissorsVSpaper ='You selected'+ playerSelection + 'and opponent selected' + computerSelection + '.You win.';

    if (playerSelection === computerSelection) {
        return tie;
    } else if (playerSelection === 'Rock') && (computerSelection === 'Paper') {
        return rockVSpaper;
    } else if (playerSelection === 'Rock') && (computerSelection === 'Scissors') {
        return rockVSscissors;
    } else if (playerSelection === 'Paper') && (computerSelection === 'Scissors') {
        return paperVSscissors;
    } else if (playerSelection === 'Paper') && (computerSelection === 'Rock') {
        return paperVSrock;
    } else if (playerSelection === 'Scissors') && (computerSelection === 'Rock') {
        return scissorsVSrock;
    } else if (playerSelection === 'Scissors') && (computerSelection === 'Paper') {
        return scissorsVSpaper;
    }

}
//test
const playerSelection = 'Rock';
const computerSelection= getComputerChoice ();
console.log(singleRound(playerSelection, computerSelection);


// Note:

// return the results of this function call, not console.log() them

// Step 3:

// Write a new function called game()
// Call the playRound function inside of game() function
// to play a 5 round game that keeps score and report winner/looser

        // Use loops...
        // use console.log() to display the result 
        // use prompt() to get input from the user 
