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
 
document.addEventListener("DOMContentLoaded", function() {
    console.log("dom has loaded");
    addClick();
})

function addClick() {
    rock.addEventListener("click", function(){
        compare("rock");
    })
    paper.addEventListener("click", function(){
        compare("paper");
    })
    scissors.addEventListener("click", function(){
        compare("scissors");
    })
    lizard.addEventListener("click", function(){
        compare("lizard");
    })
    spock.addEventListener("click", function(){
        compare("spock");
    })
 }

/**
 * The main game function
 * Makes computer pick a random attack
 * Compares playerChoice to comChoice 
 * Displays result
 */

function compare(playerChoice) {
    let comChoice = getComChoice();
    switch (playerChoice + comChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rocklizard":
        case "lizardspock":
        case "spockscissors":
        case "scissorslizard":
        case "lizardpaper":
        case "paperspock":
        case "spockrock":
        case "rockscissors":
            console.log("win");
            break;
        case "paperscissors":
        case "rockpaper":
        case "lizardrock":
        case "spocklizard":
        case "scissorsspock":
        case "lizardscissors":
        case "paperlizard":
        case "spockpaper":
        case "rockspock":
        case "scissorsrock":
            console.log("lose");
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            console.log("draw");
            break;
    }
}

function getComChoice() {
    let attacks = ["rock", "paper", "scissors", "lizard", "spock"]
    let random = Math.floor(Math.random() * 5);
    return attacks[random];    
}

/**
 * Adds point to score if win
 * Alerts when timer end
 * Comapres final score to high score, updates highscore if required
 */

