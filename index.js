const options=["rock","paper","scissors"]
let computerChoice;
let playerChoice;

let computerSelection= function() {
    computerChoice=options[(Math.floor(Math.random()*3))];
    return computerChoice;
}

// let playerSelection= function(){
    //     playerChoice=(prompt("Please choose rock paper or scissors")).toLowerCase();
    //     console.log(playerChoice);
    //     return playerChoice;
    // }
    
    let textNode=document.createTextNode("")
        document.body.appendChild(textNode);
    
    let rexultNode=document.createTextNode("");
        document.body.appendChild(rexultNode);

    


    let playerWins=0
    let computerWins=0

    let pWinsCountNode=document.createTextNode("player win count="+playerWins)
        document.body.appendChild(pWinsCountNode);

    let cWinsCountNode=document.createTextNode("computer win count="+computerWins)
        document.body.appendChild(cWinsCountNode);

    let winRound= function(roundOutcome){
        rexultNode.nodeValue=(roundOutcome);
        playerWins++;
        pWinsCountNode.nodeValue=("player win count="+playerWins);
              
    }

    let loseRound= function(roundOutcome){
        rexultNode.nodeValue=(roundOutcome);
        computerWins++;
        cWinsCountNode.nodeValue=("computer win count="+computerWins);
    }

let playRound=function(computerChoice, playerChoice){
    if (playerChoice===computerChoice){
        rexultNode.nodeValue=("It's a tie! you both chose "+playerChoice+"!");
    }
    else if (playerChoice==="rock"){
        if (computerChoice==="paper") {
            loseRound("You lose! Paper Beats Rock");
        }

        else (winRound("you win, rock beats scissors"));
    }

    else if (playerChoice==="paper"){
        if (computerChoice==="scissors") {
            loseRound("You lose! Scissors Beats paper");
        }

        else (winRound("you win, paper beats rock"));
    }

    else if (playerChoice==="scissors"){
        if (computerChoice==="rock") {
            loseRound("You lose! Rock Beats scissors");
        }

        else (winRound("you win, scissors beats paper"));

    }

        
    
  
}


let buttonRock = document.getElementById("rock");
buttonRock.addEventListener("click", rockFunction);

function rockFunction (){
    textNode.nodeValue="you chose rock";
    return playerChoice="rock";
    
}

let buttonPaper = document.getElementById("paper");
buttonPaper.addEventListener("click", paperFunction);

function paperFunction (){
    textNode.nodeValue="you chose paper";
    return playerChoice="paper";
    }

let buttonScissors = document.getElementById("scissors");
buttonScissors.addEventListener("click", scissorsFunction);

function scissorsFunction (){
    textNode.nodeValue="you chose scissors";
    return playerChoice="scissors";
    
}

let buttonNewRound= document.getElementById("beginRound");
buttonNewRound.addEventListener("click",newRoundFunction);

function newRoundFunction(){
    computerSelection();
    playRound(computerChoice,playerChoice);
}
