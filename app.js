console.log("Rock Paper Scissors game begins!");

let winsByUser = 0;
let winsByCpu = 0;

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
        roundResult = 0;
    } else if (playerChoice === "Rock" && computerChoice === "Scissors"){
        roundResult = 1;
    } else if (playerChoice === "Paper" && computerChoice === "Rock"){
        roundResult = 2;
    } else if (playerChoice === "Scissors" && computerChoice === "Paper"){
        roundResult = 3;
    } else if (playerChoice === "Scissors" && computerChoice === "Rock"){
        roundResult = -1;
    } else if (playerChoice === "Rock" && computerChoice === "Paper"){
        roundResult = -2;
    } else if (playerChoice === "Paper" && computerChoice === "Scissors"){
        roundResult = -3;
    } else {
        roundResult = 999;
    }
    return roundResult;
}

// playGame function, which takes an event as input
// CPU choice is printed to a paragraph on the page
// Result of the game is printed to a paragraph on the page
function playGame(e){

    let result = 0;
    let resultText = "";

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
    
    switch (result) {
        case -3:
            resultText = "You Lose! Scissors beats Paper";
            winsByCpu++;
            break;
        case -2:
            resultText = "You Lose! Paper beats Rock";
            winsByCpu++;
            break;
        case -1:
            resultText = "You Lose! Rock beats Scissors";
            winsByCpu++;
            break;
        case 0:
            resultText = "It's a tie!"
            break;
        case 1:
            resultText = "You Win! Rock beats Scissors";
            winsByUser++;
            break;
        case 2:
            resultText = "You Win! Paper beats Rock";
            winsByUser++;
            break;
        case 3:
            resultText = "You Win! Scissors beats Paper";
            winsByUser++;
            break;
        default:
            resultText = "Something went wrong!, Try again";

    }

    displayResults(resultText,computerChoice,userChoice,winsByCpu,winsByUser);
    
}

function displayResults(result,computerChoice,userChoice,winsByCpu,winsByUser){
    const roundResultParagraph = document.querySelector('#roundResult');
    const computerChoiceParagraph = document.querySelector('#cpuChoice');
    const userChoiceParagraph = document.querySelector('#userChoice');
    const winsByCpuParagraph = document.querySelector('#winsByCpu');
    const winsByUserParagraph = document.querySelector('#winsByUser');

    computerChoiceParagraph.textContent = computerChoice;
    roundResultParagraph.textContent = result;
    userChoiceParagraph.textContent = userChoice;
    winsByCpuParagraph.textContent = winsByCpu;
    winsByUserParagraph.textContent = winsByUser;

}
// Add eventListeners to buttons and play to game when button is clicked
const buttons = Array.from(document.querySelectorAll('button'));
buttons.forEach((button) => button.addEventListener('click', playGame));



