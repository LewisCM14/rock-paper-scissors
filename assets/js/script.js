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
 * Add event listeners to the attacks
 * Start timer once an attack has been clicked
 */
 
    // Event listener for the dom to finish loading

document.addEventListener("DOMContentLoaded", function() {
    console.log("dom has loaded");
    addClick();
})

    // Function to add the click event listener to the attacks

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

    // The function to pick a random attack from the array on the computers behalf

function getComChoice() {
    let attacks = ["rock", "paper", "scissors", "lizard", "spock"]
    let random = Math.floor(Math.random() * 5);
    return attacks[random];    
}

    // The function to compare the computers attack to the players attack, deciding the result

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
            win();
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
            lose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw();
            break;
    }
}

    // The function for when the player wins

function win(){
    console.log("win");
}

    // The function for when the player loses

function lose(){
    console.log("lost");
}

    // The function for when the player draws

function draw(){
    console.log("draw");
}

/**
 * Adds point to score if win
 * Alerts when timer end
 * Comapres final score to high score, updates highscore if required
 */

