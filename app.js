console.log("Rock Paper Scissors game begins!");

// getComputerChoice
// Compute computer's choice randomly, three choices, by default lowercase.
// Returns result string "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// playRound
// Takes two inputs player's and computer's choices (two strings)
// Convert player input to lower case so this input can be case-insensitive
// Compute game result. Rules are the following
// 1. Rock wins scissors, rock loses paper
// 2. Scissors win paper, scissors lose rock
// 3. Paper wins rock, paper lose scissors
// 4. If choices are same, it's a tie!
// Return a game result (a string)
function playRound(playerChoice,computerChoice){
    const playerChoiceLow = playerChoice.toLowerCase();
    let roundResult;

    if (playerChoiceLow === computerChoice){
        roundResult = "It's a tie!"
    } else if (playerChoiceLow === "rock" && computerChoice === "paper"){
        roundResult = "You Lose! Paper beats Rock";
    } else if (playerChoiceLow === "paper" && computerChoice === "rock"){
        roundResult = "You Win! Paper beats Rock";
    } else if (playerChoiceLow === "scissors" && computerChoice === "rock"){
        roundResult = "You Lose! Rock beats Scissors";
    } else if (playerChoiceLow === "rock" && computerChoice === "scissors"){
        roundResult = "You Win! Rock beats Scissors";
    } else if (playerChoiceLow === "paper" && computerChoice === "scissors"){
        roundResult = "You Lose! Scissors beats Paper";
    } else if (playerChoiceLow === "scissors" && computerChoice === "paper"){
        roundResult = "You Win! Scissors beats Paper";
    } else {
        roundResult = "Error in choices!"
    }
    
    return roundResult;
}

// game
// Plays rock paper game five times
// Displays game results to console
function game (){
    let gamesPlayed = 0;

    while(gamesPlayed < 5){

        console.log("Round %s result is: %s", gamesPlayed+1,playRound(askPlayerChoice(),getComputerChoice()));
        gamesPlayed++;
    }

}
// askPlayerChoice
// Validate given value, that it is paper, rock or scissors
// If value is written wrongly, ask again
function askPlayerChoice(){
    let valueCorrect = false;
    let givenChoice;

    while (!valueCorrect){
        givenChoice = prompt("Enter Paper, Rock or Scissors");
        givenChoice = givenChoice.toLowerCase();
    
        if (givenChoice === "paper" || givenChoice === "rock" || givenChoice === "scissors"){
            valueCorrect = true;
        } else {
            console.log("Given value is wrong! Try again.")
        }
    }
    return givenChoice;
}

// Let's play!
// game();
