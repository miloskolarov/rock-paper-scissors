//Get computer to choose randomly

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
   
//Play the game

function game () {
    let roundsPlayed= 0;
    let playerWins= 0;
    let computerWins= 0;
    let gameWinner= "";

//Conect player choices with buttons

const buttons= document.querySelectorAll('button');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=> {
    playerSelection=button.className;
    const computerSelection= getComputerChoice();
    roundWinText.textContent=(singleRound(playerSelection,computerSelection));
    playerWinText.textContent= "Players win: " + playerWins;
    computerWinText.textContent= "Computer win: " + computerWins;})
 })

//Single round of the game:

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

//  create div DOM for all results

const container= document.querySelector('#container');
const resultsDiv= document.createElement('div');
container.appendChild(resultsDiv);

//  create player win tracking DOM 

const playerWinText= document.createElement('p');
playerWinText.textContent= "Players win: " + playerWins;
resultsDiv.appendChild(playerWinText);

//  create computer win tracking DOM

const computerWinText= document.createElement('p');
computerWinText.textContent= "Computer win: " + computerWins;
resultsDiv.appendChild(computerWinText);

//  create round win text DOM

const roundWinText= document.createElement('p');
resultsDiv.appendChild(roundWinText);

}

game();