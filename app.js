let playerScore = 0;
let computerScore = 0;

const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");
const rollButton = document.getElementById("roll-button");
const playerDices = document.getElementById("player-result");
const computerDices = document.getElementById("computer-result");
const resultMessage = document.getElementById("result-message");
const playerDice_img = document.getElementById("player-dice-img");
const computerDice_img = document.getElementById("computer-dice-img");



function getRandomDice(){
	let dice = Math.floor(Math.random() * 6 + 1);
	return dice;
}

function game(){
	let playerDice = getRandomDice();
	let computerDice = getRandomDice();

	//playerDices.innerHTML = playerDice;
	//computerDices.innerHTML = computerDice;
	switch(playerDice){
		case 1:
			playerDice_img.style.backgroundPosition = "top left";
			break;
		case 2:
			playerDice_img.style.backgroundPosition = "top center";
			break;
		case 3:
			playerDice_img.style.backgroundPosition = "top right";
			break;
		case 4:
			playerDice_img.style.backgroundPosition = "bottom left";
			break;
		case 5:
			playerDice_img.style.backgroundPosition = "bottom left";
			break;
		case 6:
			playerDice_img.style.backgroundPosition = "bottom right";
			break;
		
	}
	switch(computerDice){
		case 1:
			computerDice_img.style.backgroundPosition = "top left";
			break;
		case 2:
			computerDice_img.style.backgroundPosition = "top center";
			break;
		case 3:
			computerDice_img.style.backgroundPosition = "top right";
			break;
		case 4:
			computerDice_img.style.backgroundPosition = "bottom left";
			break;
		case 5:
			computerDice_img.style.backgroundPosition = "bottom left";
			break;
		case 6:
			computerDice_img.style.backgroundPosition = "bottom right";
			break;
		
	}
	
	if (playerDice > computerDice){
		playerScore++;
		playerScore_span.innerHTML = playerScore;
		resultMessage.innerHTML = "You win!!!";
	} else if (playerDice < computerDice){
		computerScore++;
		computerScore_span.innerHTML = computerScore;
		resultMessage.innerHTML = "You lost((( T_T";
	} else 
		resultMessage.innerHTML = "Draw... Boring";
}

rollButton.addEventListener('click', game);