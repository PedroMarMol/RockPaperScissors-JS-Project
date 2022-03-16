let gameChoice = ["Paper", "Rock","Scissors"];
var playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
var scissors = "Scissors";
var paper = "Paper";
var rock = "Rock";

function computerPlay() {
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];
}

function gameRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {
        return "You have tied";
    }   else if (playerSelection.toUpperCase() === scissors.toUpperCase() && computerSelection.toUpperCase() === paper.toUpperCase()) {
        return "You win! Scissors beats Paper";
        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
            return "You lose! Scissors beats Paper";
            }   else if (playerSelection.toUpperCase() === scissors.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                return "You lose! Rock beats Scissors";
                }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
                    return "You win! Rock beats Scissors";
                    }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === paper.toUpperCase()) {
                         return "You lose! Paper beats Rock";
                        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                            return "You win! Paper beats Rock";
                            } else {
                                return "You didn't type a correct answer (Rock, Paper or Scissors).";
                            }
}

function game() {
    for (let i = 0; i < 5; i++) {
        gameRound 
    }
}

const computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));


