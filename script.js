function computerPlay() {
  let x = Math.floor(Math.random() * 3);
  if (x = 0) {
    let result = "rock"
    } else if (x = 1) {
    let result = "paper" 
    } else {
    let result = "scissors" 
    }
  return result
  }

function playRound(playerSelection, computerSelection) {
// your code here
  let playerSelection = lower(prompt("Choose your weapon (Rock, Paper, Scissors): "));
  let computerSelection = computerPlay() 
  if (playerSelection = "rock" && computerSelection === "scissors") {
    return("You WIN! Rock beats Scissors.");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return("You WIN! Paper beats Rock.");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return("You WIN! Scissors beats Paper.");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return("You LOSE! Paper beats your Rock.");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return("You LOSE! Scissors beats your Paper.");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return("You LOSE! Rock beats your Scissors.");
  } else (playerSelection === computerSelection)
    return("It's a TIE!"); 
}  

// to test function of playRound()
let playerSelection = 'rock';
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));