console.log("Rock Paper Scissors game begins!");

// Global variables to count wins
let winsByUser = 0;
let winsByCpu = 0;
let gameRound = 0;

const roundResultParagraph = document.querySelector('#roundResult');
const computerChoiceParagraph = document.querySelector('#cpuChoice');
const userChoiceParagraph = document.querySelector('#userChoice');
const winsByCpuParagraph = document.querySelector('#winsByCpu');
const winsByUserParagraph = document.querySelector('#winsByUser');
const winnerTextParagraph = document.querySelector('#winnerText');

const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const restartBtn = document.querySelector('.restartBtn');

restartBtn.disabled = true;
rockBtn.disabled = false;
paperBtn.disabled = false;
scissorsBtn.disabled = false;

// getComputerChoice
// Compute computer's choice randomly, three choices, by default lowercase.
// Returns result string "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// playRound
// Takes two inputs player's and computer's choices (two strings)
// Compute game result. Rules are the following
// 1. Rock wins scissors, rock loses paper
// 2. Scissors win paper, scissors lose rock
// 3. Paper wins rock, paper lose scissors
// 4. If choices are same, it's a tie!
// Return a game result code
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
// Result of the game is displayed on the page
function playGame(e){

    let result = 0;
    let resultText = "";
    gameRound++;

    // clean up previous selections, not in the first round
    if(gameRound != 1){
        removeHighlight(e);
    }

    let userChoice = "";
    let computerChoice = getComputerChoice();

    // highlight CPU choice
    highlightComputerChoice(computerChoice);
    
    // plays one round of RPS game and writes its result code to result variable
    switch (e.target.classList[0]) {
        case "rockImage":
            e.target.classList.add('highlightSelection');
            userChoice = "Rock";
            result = playRound(userChoice,computerChoice);
            break;
        case "paperImage":
            e.target.classList.add('highlightSelection');
            userChoice = "Paper";
            result = playRound(userChoice,computerChoice);
            break;
        case "scissorsImage":
            e.target.classList.add('highlightSelection');
            userChoice = "Scissors";
            result = playRound(userChoice,computerChoice);
            break;
        default: 
            result = "Something went wrong!, Try again";
    }
    
    // makes counting of wins and prints certain texts
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

function highlightComputerChoice(computerChoice){
    let cpuImage;
    switch (computerChoice){
        case "Rock":
            cpuImage = document.querySelector('.cpuRock');
            cpuImage.classList.add('highlightSelection');
        break;
        case "Paper":
            cpuImage = document.querySelector('.cpuPaper');
            cpuImage.classList.add('highlightSelection');
        break;
        case "Scissors":
            cpuImage = document.querySelector('.cpuScissors');
            cpuImage.classList.add('highlightSelection');
        break;
        default:
            computerChoice = "Error in computer choice!";
    }  
}

// Remove highlight selections from images
function removeHighlight(e){
    let allImages = document.querySelectorAll("img");
    for(i=0; i<allImages.length; i++)
    { 
        if (allImages[i].classList.contains('highlightSelection'))
            allImages[i].classList.remove('highlightSelection');
    }
}

// To display results on the page
function displayResults(result,computerChoice,userChoice,winsByCpu,winsByUser){

    computerChoiceParagraph.textContent = computerChoice;
    roundResultParagraph.textContent = result;
    userChoiceParagraph.textContent = userChoice;
    winsByCpuParagraph.textContent = winsByCpu;
    winsByUserParagraph.textContent = winsByUser;

    if (winsByCpu == 5 || winsByUser == 5){

        if(winsByUser == 5){
            winnerTextParagraph.textContent = "You won the game! Congratulations";
        }else{
            winnerTextParagraph.textContent = "You lost! CPU won the game!";
        }
        restartBtn.disabled = false;
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

function restartGame(){
            
    computerChoiceParagraph.textContent = "";
    roundResultParagraph.textContent = "";
    userChoiceParagraph.textContent = "";
    winsByCpuParagraph.textContent = "";
    winsByUserParagraph.textContent = "";
    winnerTextParagraph.textContent = "";

    winsByUser = 0;
    winsByCpu = 0;

    restartBtn.disabled = true;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;

}


// Add eventListeners to buttons and play to game when button is clicked
const rpsButtons = Array.from(document.querySelectorAll(".rpsBtn"));
rpsButtons.forEach((button) => button.addEventListener('click', playGame));

const restartButton = document.querySelector(".restartBtn");
restartButton.addEventListener('click', restartGame); 



