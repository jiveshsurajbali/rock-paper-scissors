const MOVES = ['rock', 'paper', 'scissors']

while (true) {

    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 1; i != 4; i++) {4
        function computerPlay(){
            return MOVES[Math.floor(Math.random()*3)]
        }


        function playRound(computerSelection, playerSelection) {
            
            if (computerSelection == playerSelection) {
                alert(`Computer played ${computerSelection}. Round ${i} drawn.`);
            }

            if (computerSelection == 'rock') {
                if (playerSelection == 'scissors') { 
                    computerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} lost.`);
                }
                else if (playerSelection == 'paper') {
                    playerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} won.`);
                }
            }

            else if (computerSelection == 'paper') {
                if (playerSelection == 'rock') { 
                    computerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} lost.`);
                }
                else if (playerSelection == 'scissors') {
                    playerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} won.`);
                }
            }

            else if (computerSelection == 'scissors') {
                if (playerSelection == 'paper') { 
                    computerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} lost.`);
                }
                else if (playerSelection == 'rock') {
                    playerScore++;
                    alert(`Computer played ${computerSelection}. Round ${i} won.`);
                }
            }
            
        }


        var computerSelection = computerPlay();
        var playerSelection = prompt("What hand would you like to play (rock, paper, scissors)?").toLowerCase();
        playRound(computerSelection, playerSelection);

    }
    
    if (playerScore > computerScore) {
        alert(`Player wins ${playerScore} - ${computerScore}!`)
    }
    else if (playerScore == computerScore) {
        alert(`Game drawn ${playerScore} - ${computerScore}!`)
    }
    else if (playerScore < computerScore){
        alert(`Player loses ${playerScore} - ${computerScore}!`)
    }
    
    if (prompt("Play again (y/n)?").toLowerCase() == 'n') 
       break;
}

/* No alert when the game is drawn */