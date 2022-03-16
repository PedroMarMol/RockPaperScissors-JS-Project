let gameChoice = ["Paper", "Rock","Scissors"];
var computerSelection;
var playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
var scissors = "Scissors";
var paper = "Paper";
var rock = "Rock";

function computerPlay() {
    computerSelection = gameChoice[Math.floor(Math.random() * gameChoice.length)];
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        console.log("You have tied");
    }   else if (playerSelection.toUpperCase() === scissors.toUpperCase() && computerSelection.toUpperCase() === paper.toUpperCase()) {
        console.log("You win! Scissors beats Paper");
        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
            console.log("You lose! Scissors beats Paper");
            }   else if (playerSelection.toUpperCase() === scissors.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                console.log("You lose! Rock beats Scissors");
                }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
                    console.log("You win! Rock beats Scissors");
                    }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === paper.toUpperCase()) {
                        console.log("You lose! Paper beats Rock");
                        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                            console.log("You win! Paper beats Rock");
                            } else {
                                console.log("You didn't type a correct answer (Rock, Paper or Scissors).")
                            }
}

computerPlay();
gameRound(playerSelection, computerSelection);


