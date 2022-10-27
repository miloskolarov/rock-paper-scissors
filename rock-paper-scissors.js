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
// Function returns string: 'You win', or 'You loose'
// playerSelection parametar is case insensitive!

// Note:

// return the results of this function call, not console.log() them

// Step 3:

// Write a new function called game()
// Call the playRound function inside of game() function
// to play a 5 round game that keeps score and report winner/looser

        // Use loops...
        // use console.log() to display the result 
        // use prompt() to get input from the user 
