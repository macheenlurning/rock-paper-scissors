function computerPlay() {
  const cp = (Math.random() * 3);
  if (cp = 0) {
    return "rock";
    } else if (cp = 1) {
        return "paper"; 
    } else 
       return "scissors"
    }

let computerScore = 0
let playerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You WIN! Rock beats Scissors. Score: ${playerScore} to ${computerScore}";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You LOSE! Paper beats your Rock. Score: ${playerScore} to ${computerScore}";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You WIN! Paper beats Rock. Score: ${playerScore} to ${computerScore}";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return"You LOSE! Scissors beats your Paper. Score: ${playerScore} to ${computerScore}";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You WIN! Scissors beats Paper. Score: ${playerScore} to ${computerScore}";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return"You LOSE! Rock beats your Scissors. Score: ${playerScore} to ${computerScore}";
  } 
  else return "It's a DRAW! Score: ${playerScore} to ${computerScore}";
}  

function game() {
  for (let i = 0; i < 5, i++) {
    let playerSelection = window.prompt("Choose your weapon (Rock, Paper, or Scissors): ", );
    playerSelection = playerSelection.toLowerCase();
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }
  if (playerScore > computerScore) {
    console.log("Congratulations! You Won the Game! Final Score: ${playerScore} to ${computerScore}");
  } else if (computerScore > playerScore) {
    console.log("Sorry, you lose...better luck next time. Final Score: ${playerScore} to ${computerScore}");
  } else 
    console.log("You tied. Final Score: ${playerScore} to ${computerScore}");
}

game();