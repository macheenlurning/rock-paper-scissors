function computerPlay() {
    let x = math.floor(Math.random(0, 2))} { 
    if (x === 0) {
        let result = "Rock"
    }   else if (x === 1) {
        let result = "Paper" 
    }   else (x === 2)  {
        let result = "Scissors" 
    }
    return result
}

function oneRound():
    let playerSelection: (case insensitive) input form ("rock", "paper", "scissors")

    let computerSelection:
        - calls the function computerPlay
    
        let results = 
            if playerSelection === "Rock" && computerSelection === "Scissors"
                alert("You WIN! Rock beats Scissors.");
            else if playerSelection === "Paper" && computerSelection === "Rock"
                alert("You WIN! Paper beats Rock.");
            else if PlayerSelection === "Scissors" && computerSelection === "Paper"
                alert("You WIN! Scissors beats Paper.");
            else if playerSelection === "Rock" && computerSelection === "Paper"
                alert("You LOSE! Paper beats your Rock.");
            else if playerSelection === "Paper" && computerSelection === "Scissors"
                alert("You LOSE! Scissors beats your Paper.");
            else if playerSelection === "Scissors" && computerSelection === "Rock"
                alert("You LOSE! Rock beats your Scissors.");
            else playerSelection === computerSelection
                alert("It's a TIE!");
        return results
