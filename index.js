const options=["rock","paper","scissors"]
let computerChoice;
let playerChoice;

let computerSelection= function() {
    computerChoice=options[(Math.floor(Math.random()*3))];
    console.log(computerChoice);
    return computerChoice;
}

let playerSelection= function(){
    playerChoice=(prompt("Please choose rock paper or scissors")).toLowerCase();
    console.log(playerChoice);
    return playerChoice;
}

let playRound=function(computerChoice, playerChoice){
    if (playerChoice===computerChoice){
        alert("It's a tie! you both chose "+playerChoice+"!");
    }
    else if (playerChoice==="rock"){
        if (computerChoice==="paper") {
            alert("You lose! Paper Beats Rock");
        }

        else (alert("you win, rock beats scissors"));
    }

    else if (playerChoice==="paper"){
        if (computerChoice==="scissors") {
            alert("You lose! Scissors Beats paper");
        }

        else (alert("you win, paper beats rock"));
    }

    else if (playerChoice==="scissors"){
        if (computerChoice==="rock") {
            alert("You lose! Rock Beats scissors");
        }

        else (alert("you win, scissors beats paper"));

    }

        
    
  
}
computerSelection();
playerSelection();
playRound(computerChoice,playerChoice)

