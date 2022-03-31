let gameChoice = ["Paper", "Rock","Scissors"];
var playerSelection;
let playerCounter = 0;
let computerCounter = 0;
let computerSelection = computerPlay();
var scissors = "Scissors";
var paper = "Paper";
var rock = "Rock";

function computerPlay() {                                                       // Chooses a random number and convert it so it 
    return gameChoice[Math.floor(Math.random() * gameChoice.length)];           // ends up choosing a word of the three (rock, paper or scissors).
}

const btn1 = document.createElement("button");
btn1.innerHTML = rock;
btn1.addEventListener('click', function() { 
    div.textContent = (playRound(rock, computerSelection)); 
    gameCounter();
});
    document.body.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.innerHTML = paper;
btn2.addEventListener('click', function() { 
    div.textContent = (playRound(paper, computerSelection)); 
    gameCounter();
});
document.body.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.innerHTML = scissors;
btn3.addEventListener('click', function() { 
    div.textContent = (playRound(scissors, computerSelection));
    gameCounter();
});
document.body.appendChild(btn3);

const div = document.createElement('div');
document.body.appendChild(div);

function playRound(playerSelection, computerSelection) {                        // function that plays a single round of the game, 
        computerSelection = computerPlay();                                     // checking every case one by one and returning the winner.
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) {    
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
                                return "You didn't select a correct answer (Rock, Paper or Scissors).";
                            }
}

function gameCounter() {                                                                 // function that counts the points of each player and stops when one reaches 5

    if (div.textContent == "You win!") playerCounter++;                                  // counter that adds up player and computer points
        else if (div.textContent == "You lose!") computerCounter++;
            else {playerCounter++; computerCounter++;}

    if (playerCounter == 5 && computerCounter == 5) {console.log("You have tied!");      // checks if any counter reached 5, if so then it stops and resets the counters
                                                        playerCounter = 0;
                                                        computerCounter = 0;}
        else if (playerCounter == 5) {console.log("You are the winner!");
                                                        playerCounter = 0;
                                                        computerCounter = 0;}
            else if (computerCounter == 5) {console.log("The computer is the winner!");
                                                        playerCounter = 0;
                                                        computerCounter = 0;}
}


