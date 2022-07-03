const MOVES = ['rock', 'paper', 'scissors']


function computerPlay(){
    return MOVES[Math.floor(Math.random()*3)]
}


function playRound(computerSelection, playerSelection) {
            
    if (computerSelection == playerSelection) {
        return 'draw';
    }

    if (computerSelection == 'rock') {
        if (playerSelection == 'scissors') { 
            return 'lose';
        }
        else if (playerSelection == 'paper') {
            return 'win';
        }
    }

    else if (computerSelection == 'paper') {
        if (playerSelection == 'rock') { 
            return 'lose';
        }
        else if (playerSelection == 'scissors') {
            return 'win';
        }
    }

    else if (computerSelection == 'scissors') {
        if (playerSelection == 'paper') { 
            return 'lose';
        }
        else if (playerSelection == 'rock') {
            return 'win';
        }
    }
    
}


function getResult(playerScore, computerScore){
    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} - ${computerScore}!`)
    }
    else if (playerScore == computerScore) {
        console.log(`Game drawn ${playerScore} - ${computerScore}!`)
    }
    else if (playerScore < computerScore){
        console.log(`Player loses ${playerScore} - ${computerScore}!`)
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (i = 1; i != 6; i++){
        let computerSelection = computerPlay();
        let playerSelection = prompt("Which hand would you like to play (rock, paper, scissors)?");
        let result = (playRound(computerSelection, playerSelection));
        
        if (result == 'win') {
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            playerScore++;
        }

        else if (result == 'lose') {
            console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            computerScore++;
        }

        else if (result == 'draw') {
            console.log(`Draw! Both players played ${playerSelection}.`);
        }
    }

    getResult(playerScore, computerScore);    
}

while (true){

    game();

    if (prompt("Play again (y/n)?").toLowerCase() == 'n') 
       break;
}

