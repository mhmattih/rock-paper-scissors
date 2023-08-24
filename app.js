console.log("Rock Paper Scissors game begins!");

// getComputerChoice
// Compute computer's choice randomly, three choices 
// Returns result string "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

console.log("Computer's choice is: ",getComputerChoice());