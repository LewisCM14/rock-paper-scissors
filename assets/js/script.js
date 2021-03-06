/*jshint esversion: 6*/

/**
 * Decalre variables 
 */

// Variables used in picking attack type

let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let lizard = document.getElementById("lizard");
let spock = document.getElementById("spock");

let choice = document.getElementById("choice");
let result = document.getElementById("result");

// Variables used for countdown

let timer = document.getElementById("timer");
var timerCount = 10;
var on = false; // Used to prevent the timer function from firing repeatedly inbetween games 

// Creates array from attack styles for use identifying the game type

let attacks = document.getElementsByClassName("attack");
let attkArry = attacks.length;

// Highscore and current score variables, seperates traditional and modern game type hs

var cs = 0;

var hstrad = localStorage.getItem("hstrad", hstrad);
var hsmod = localStorage.getItem("hsmod", hsmod);

let currentScore = document.getElementById("current-score");
let highScore = document.getElementById("high-score");

// Variables used for endgame modal box

let show = document.getElementsByClassName("endgame-outer");

/**
 * Wait for the dom to finish loading before running the game
 * Add event listeners to the attacks
 * Sets the container content prior to game start
 * Start timer once an attack has been clicked
 */

// Event listener for the dom to finish loading, sets the containers html content prior to game start

document.addEventListener("DOMContentLoaded", function() {

	if (attkArry === 3) {
		highScore.innerHTML = hstrad;
		currentScore.innerHTML = cs;
		choice.innerHTML = "?";
		result.innerHTML = "Result";
		timer.innerHTML = "00:10";
	} else if (attkArry === 5) {
		highScore.innerHTML = hsmod;
		currentScore.innerHTML = cs;
		choice.innerHTML = "?";
		result.innerHTML = "Result";
		timer.innerHTML = "00:10";
	}

	addClick();
});

// Function to add the click event listener to the attacks
// The below code is developed from an outside source, please refer to readme

function addClick() {

	if (attkArry === 3) {
		rock.addEventListener("click", function() {
			compare("rock");
		});
		paper.addEventListener("click", function() {
			compare("paper");
		});
		scissors.addEventListener("click", function() {
			compare("scissors");
		});
	} else if (attkArry === 5) {
		rock.addEventListener("click", function() {
			compare("rock");
		});
		paper.addEventListener("click", function() {
			compare("paper");
		});
		scissors.addEventListener("click", function() {
			compare("scissors");
		});
		lizard.addEventListener("click", function() {
			compare("lizard");
		});
		spock.addEventListener("click", function() {
			compare("spock");
		});
	} else {

	}
}

/**
 * The main game function
 * Makes computer pick a random attack
 * Compares playerChoice to comChoice 
 * Displays result, adds point to score if win
 */

// The function to pick a random attack from the array on the computers behalf
// The below code is developed from an outside source, please refer to readme

function getComChoice() {
	let moves = ["rock", "paper", "scissors", "lizard", "spock"];

	if (attkArry === 3) {
		let random = Math.floor(Math.random() * 3);
		return moves[random];
	} else {
		let random = Math.floor(Math.random() * 5);
		return moves[random];
	}
}

// The function to compare the computers attack to the players attack, deciding the result
// The below code is developed from an outside source, please refer to readme

function compare(playerChoice) {

	if (on === false) {
		on = true;
		gameStart();
	}

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
			win(comChoice);
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
			lose(comChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		case "lizardlizard":
		case "spockspock":
			draw(comChoice);
			break;
	}
}

// The function for when the player wins
// The 'glow' for the below functions is based off an outside source, please refer to readme

function win(comChoice) {
	cs++;
	result.innerHTML = "Winner";
	result.classList.add("green-glow");
	setTimeout(function() {
		result.classList.remove("green-glow");
	}, 300);
	choice.innerHTML = comChoice;
	currentScore.innerHTML = cs;

	if (attkArry === 3) {
		finalScoreTrad();
	} else if (attkArry === 5) {
		finalScoreMod();
	}
}

// The function for when the player loses

function lose(comChoice) {
	result.innerHTML = "Loser";
	result.classList.add("red-glow");
	setTimeout(function() {
		result.classList.remove("red-glow");
	}, 300);
	choice.innerHTML = comChoice;
}

// The function for when the player draws

function draw(comChoice) {
	result.innerHTML = "Draw";
	result.classList.add("grey-glow");
	setTimeout(function() {
		result.classList.remove("grey-glow");
	}, 300);
	choice.innerHTML = comChoice;
}

/**
 * Contains the timer function, used to identify game end and start
 * Comapres final score to high score, updates highscore if required
 */

// The function to update the highscore if current score is greater than it
// The code for storing the highscore's is developed from an outside source, please refer to readme

function finalScoreTrad() {
	if (cs > hstrad) {
		hstrad++;
		localStorage.setItem("hstrad", hstrad);
	}

	highScore.innerHTML = hstrad;
}

function finalScoreMod() {
	if (cs > hsmod) {
		hsmod++;
		localStorage.setItem("hsmod", hsmod);
	}

	highScore.innerHTML = hsmod;
}

// The timer function, signals game start and end 
// The code for the timer function is based off an outside source, please refer to readme

function displayTime(second) {
	let min = Math.floor(second / 60);
	let sec = Math.floor(second % 60);
	timer.innerHTML = `${min<10 ? "0":""}${min}:${sec<10 ? "0":""}${sec}`;
}

function gameStart() {
	if (timerCount === 10) {
		let countDown = setInterval(() => {
			timerCount--;
			displayTime(timerCount);
			if (timerCount <= 0 || timerCount < 1) {
				on = false;
				clearInterval(countDown);
				endGame();
			}
		}, 1000);
		if (timerCount <= 0 || timerCount < 1) {
			clearInterval(countDown);
		}
	}
}

function endGame() {
	show[0].style.visibility = "visible";
	let reset = document.getElementById("reset");
	let score = document.getElementById("score");
	score.innerHTML = cs;

	reset.addEventListener("click", function() {
		cs = 0;
		timerCount = 10;

		currentScore.innerHTML = cs;
		choice.innerHTML = "?";
		result.innerHTML = "Result";

		on = false;
		show[0].style.visibility = "hidden";
	});
}