/**
 * Wait for the dom to finish loading before running the game
 * Get the button elements and add event listeners to them
 * Start timer once a button has been clicked
 */
 
document.addEventListener("DOMContentLoaded", runGame);

function runGame() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        addEventListener("click", playerChoice, comChoice)
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
    let playerChoice = event.srcElement.id
    console.log(playerChoice);
}

function comChoice(event){

}

/**
 * Adds point to score if win
 * Alerts when timer end
 * Comapres final score to high score, updates highscore if required
 */

