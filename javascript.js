let gameChoice = ["Paper", "Rock","Scissors"];
var playerSelection;
const computerSelection = computerPlay();
let playerCounter = 0;
let computerCounter = 0;
let winner;
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
        return "You win!";
        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
            return "You lose!";
            }   else if (playerSelection.toUpperCase() === scissors.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                return "You lose!";
                }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === scissors.toUpperCase()) {
                    return "You win!";
                    }   else if (playerSelection.toUpperCase() === rock.toUpperCase() && computerSelection.toUpperCase() === paper.toUpperCase()) {
                         return "You lose!";
                        }   else if (playerSelection.toUpperCase() === paper.toUpperCase() && computerSelection.toUpperCase() === rock.toUpperCase()) {
                            return "You win!";
                            } else {
                                return "You didn't type a correct answer (Rock, Paper or Scissors).";
                            }
}

function game() {                       // creates a 5 round game and adds on the win-loses of the player and the computer
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("What is your choice? Rock, Paper or Scissors?");
        console.log(gameRound(playerSelection, computerSelection));
        if (gameRound(playerSelection, computerSelection) === "You win!"){
            playerCounter++;
        } else if (gameRound(playerSelection, computerSelection) === "You lose!") {
            computerCounter++;
        } else if (gameRound(playerSelection, computerSelection) === "You have tied") {
            computerCounter++;
            playerCounter++;
        }

        if (computerCounter > playerCounter) {
            winner = "The Computer";
        } else {winner = "You"}
    }   

    console.log("Your points: " + playerCounter + " Computer Points: " + computerCounter);
    console.log(winner +" won!");
}

game();



