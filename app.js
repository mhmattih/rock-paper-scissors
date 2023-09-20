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


// askPlayerChoice, not needed in current implementation
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

//  
// Result of the game is printed to a paragraph on the page
function playGame(e){
    let result = "";
    const resultParagraph = document.querySelector('#result');

    switch (e.target.id) {
        case "1": 
            result = playRound("Rock",getComputerChoice());
            break;
        case "2":
            result = playRound("Paper",getComputerChoice());
            break;
        case "3":
            result = playRound("Scissors",getComputerChoice());
            break;
        default: 
            console.log("Something went wrong!");
    }

    resultParagraph.textContent = result;
}

// Add eventListeners to buttons and play to game when button is clicked
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', playGame));


/*
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
        
        let result = "";
        const resultParagraph = document.querySelector('#result');

        switch (button.id) {
            case "1": 
                result = playRound("Rock",getComputerChoice());
                break;
            case "2":
                result = playRound("Paper",getComputerChoice());
                break;
            case "3":
                result = playRound("Scissors",getComputerChoice());
                break;
            default: 
                console.log("Something went wrong!");
        }
    
        resultParagraph.textContent = result;

    });

});*/

