let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const rollButton = document.getElementById("roll-button");
const playerDices = document.getElementById("player-result");
const computerDices = document.getElementById("computer-result");
const resultMessage = document.getElementById("result-message");

function getRandomDice(){
	let dice = Math.floor(Math.random() * 6 + 1);
	return dice;
}

function game(){
	let playerDice = getRandomDice();
	let computerDice = getRandomDice();

	playerDices.innerHTML = playerDice;
	computerDices.innerHTML = computerDice;

	if (playerDice > computerDice){
		playerScore++;
		playerScore_span.innerHTML = playerScore;
		resultMessage.innerHTML = "You win!!!";
	} else if (playerDice < computerDice){
		computerScore++;
		computerScore_span.innerHTML = computerScore;
		resultMessage.innerHTML = "You lost T_T";
	} else 
		resultMessage.innerHTML = "Draw((";
}

rollButton.addEventListener('click', game);