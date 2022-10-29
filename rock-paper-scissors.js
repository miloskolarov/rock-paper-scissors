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

// Write new function called game
// call playround function inside game function: Insert singleRound function inside game function
// Add counters:roundsPlayed, playerWins, computerWins, gameWinner (let)
// Use promt for player input 
// Use console.log() to display the resut of each round and the winner 
// Use loop to play 5 rounds- Use while loop

function game () {
    let roundsPlayed= 0;
    let playerWins= 0;
    let computerWins= 0;
    let gameWinner= "";

    while (roundsPlayed < 5) {
        roundsPlayed++;
        playerSelection = prompt("Please type Rock, Paper, or Scissors.");
        const computerSelection= getComputerChoice ();
        console.log(singleRound(playerSelection, computerSelection));
        console.log("Player wins: " + playerWins);
        console.log("Computer wins: " + computerWins);

function singleRound (playerSelection, computerSelection) {
    let tie= 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.It\'s a tie.';
    let rockVSpaper= 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You lose.';
    let rockVSscissors = 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You win.';
    let paperVSscissors = 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You lose.';
    let paperVSrock = 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You win.';
    let scissorsVSrock = 'You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You lose.';
    let scissorsVSpaper ='You selected '+ playerSelection + ' and opponent selected ' + computerSelection + '.You win.';

    if (playerSelection === computerSelection) {
        return tie;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
        computerWins++;
        return rockVSpaper;
    } else if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
        playerWins++;
        return rockVSscissors;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
        computerWins++;
        return paperVSscissors;
    } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
        playerWins++;
        return paperVSrock;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
        computerWins++;
        return scissorsVSrock;
    } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
        playerWins++;
        return scissorsVSpaper;
    }
    //Does not work 



    
}
}
    if (playerWins > computerWins) {
        gameWinner= "You win!";
    } else if (playerWins === computerWins) {
        gameWinner= "It's a tie.";
    } else {
        gameWinner= "Computer wins!";
    }

    console.log("And the winner is: " + gameWinner)
}
//Make playerSelection case insensitive 

//This DOES NOT WORK, return latter.
        // function capitalize(playerSelection) {
        //     let lowerCase= playerSelection.toLowerCase();
        //     let firstLatter= lowerCase.charAt(0).toUppercase() + lowerCase.slice(1);
        //     return playerSelection;
        // }

//test
game();





// Note:

// return the results of this function call, not console.log() them

// Step 3:

// Write a new function called game()
// Call the playRound function inside of game() function
// to play a 5 round game that keeps score and report winner/looser

        // Use loops...
        // use console.log() to display the result 
        // use prompt() to get input from the user 
