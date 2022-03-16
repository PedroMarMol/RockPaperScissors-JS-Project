let gameChoice = ["Paper", "Rock","Scissors"];
var playerSelection = prompt("What do you choose? Rock, Paper or Scissors?");
var scissors = "Scissors";
var paper = "Paper";
var rock = "Rock";

function computerPlay() {                                                       // Chooses a random number and convert it so it 
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];           // ends up choosing a word of the three (rock, paper or scissors).
}

function gameRound(playerSelection, computerSelection) {                        // function that plays a single round of the game, 
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {    // checking every case one by one and returning the winner.
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

function game() {                       // creates a 5 round game and adds on the win-loses of the player and the computer
    for (let i = 0; i < 5; i++) {
        gameRound 
    }
}

const computerSelection = computerPlay();
console.log(gameRound(playerSelection, computerSelection));


