console.log("Rock Paper Scissors game begins!");

// getComputerChoice
// Compute computer's choice randomly, three choices, by default lowercase.
// Returns result string "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];
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
    
    let roundResult;

    if (playerChoice === computerChoice){
        roundResult = "It's a tie!"
    } else if (playerChoice === "Rock" && computerChoice === "Paper"){
        roundResult = "You Lose! Paper beats Rock";
    } else if (playerChoice === "Paper" && computerChoice === "Rock"){
        roundResult = "You Win! Paper beats Rock";
    } else if (playerChoice === "Scissors" && computerChoice === "Rock"){
        roundResult = "You Lose! Rock beats Scissors";
    } else if (playerChoice === "Rock" && computerChoice === "Scissors"){
        roundResult = "You Win! Rock beats Scissors";
    } else if (playerChoice === "Paper" && computerChoice === "Scissors"){
        roundResult = "You Lose! Scissors beats Paper";
    } else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        roundResult = "You Win! Scissors beats Paper";
    } else {
        roundResult = "Error in choices!"
    }
    return roundResult;
}

// askPlayerChoice, not needed in current implementation
// Validate given value, that it is paper, rock or scissors
// If value is written wrongly, ask again
/*
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
}*/

// playGame function, which takes an event as input
// CPU choice is printed to a paragraph on the page
// Result of the game is printed to a paragraph on the page
function playGame(e){
    
    let winsByUser = 0;
    let winsByUpu = 0;
 
    let result = "";
    let userChoice = "";
    let computerChoice = getComputerChoice();

    switch (e.target.id) {
        case "1":
            userChoice = "Rock";
            result = playRound(userChoice,computerChoice);
            break;
        case "2":
            userChoice = "Paper";
            result = playRound(userChoice,computerChoice);
            break;
        case "3":
            userChoice = "Scissors";
            result = playRound(userChoice,computerChoice);
            break;
        default: 
            result = "Something went wrong!, Try again";
    }

    displayResults(result,computerChoice,userChoice);

}

function displayResults(result,computerChoice,userChoice){
    const roundResultParagraph = document.querySelector('#roundResult');
    const computerChoiceParagraph = document.querySelector('#cpuChoice');
    const userChoiceParagraph = document.querySelector('#userChoice');

    computerChoiceParagraph.textContent = computerChoice;
    roundResultParagraph.textContent = result;
    userChoiceParagraph.textContent = userChoice;

}
// Add eventListeners to buttons and play to game when button is clicked
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', playGame));



