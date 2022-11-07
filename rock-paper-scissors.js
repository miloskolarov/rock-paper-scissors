
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

    //Remove while loop and prompt
    //Add round win and game win
          //  create div DOM for all results
          //  create player win tracking DOM 
          //  create computer win tracking DOM
           //  create round win text DOM
            //  create game win text DOM



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

game();


