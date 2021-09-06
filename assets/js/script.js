// Decalre const variables for use later

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");
const choice = document.getElementById("choice");
const result = document.getElementById("result");
const timer = document.getElementById("timer");
const currentScore = document.getElementById("current-score");
const highScore = document.getElementById("high-score");

/**
 * Wait for the dom to finish loading before running the game
 * Get the button elements and add event listeners to them
 * Start timer once a button has been clicked
 */
 
document.addEventListener("DOMContentLoaded", runGame);

function runGame() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        addEventListener("click", playerChoice)
    }
    console.log('DOM is ready');
 }

/**
 * The main game function
 * Makes computer pick a random attack
 * Compares playerChoice to comChoice 
 * Displays result
 */

function playerChoice(event){
    playerChoice = event.srcElement.id;
    console.log(playerChoice);
}

/**
 * Adds point to score if win
 * Alerts when timer end
 * Comapres final score to high score, updates highscore if required
 */

