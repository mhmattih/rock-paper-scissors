let winsByUser = 0;
let winsByCpu = 0;
let gameRound = 0;

const winnerTextParagraph = document.querySelector('#winnerText');
const scoreCpu = document.querySelector('.scoreCpu');
const scorePlayer= document.querySelector('.scorePlayer');
const gameLog = document.querySelector('.gameLog');
const rockBtn = document.querySelector('.rockBtn');
const paperBtn = document.querySelector('.paperBtn');
const scissorsBtn = document.querySelector('.scissorsBtn');
const restartBtn = document.querySelector('.restartBtn');

// Make restart button hidden at start 
restartBtn.style.display = "none";

// getComputerChoice
// Compute computer's choice randomly. 
// Returns result string "Rock", "Paper" or "Scissors"
function getComputerChoice(){
    const computerChoices = ["Rock", "Paper", "Scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

// playRound function
// Takes player's and computer's choices as inputs (strings)
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
        roundResult = 999; // Error
    }
    return roundResult;
}

// playGame function
// Takes an event as input
// Result of a single game is displayed on the page
function playGame(e){

    let result = 0; 
    let resultText = "";
    let userChoice = "";
    gameRound++;

    // Add round number to the game results logging
    resultText += "Round " + gameRound + ": ";

    // clean up previous selections, not in the first round
    if(gameRound != 1){
        removeHighlight();
    }

    // make CPU choice and highlight it
    let computerChoice = getComputerChoice();
    highlightComputerChoice(computerChoice);
    
    // plays one round of RPS game and write its result code to result variable
    switch (e.target.classList[0]) {
        case "rockImage": // In case player chooses rock
            e.target.classList.add('highlightSelection');
            userChoice = "Rock";
            result = playRound(userChoice,computerChoice);
            break;
        case "paperImage": // In case player chooses paper
            e.target.classList.add('highlightSelection');
            userChoice = "Paper";
            result = playRound(userChoice,computerChoice);
            break;
        case "scissorsImage": // In case player chooses scissors
            e.target.classList.add('highlightSelection');
            userChoice = "Scissors";
            result = playRound(userChoice,computerChoice);
            break;
        default: 
            result = "999";
    }
    
    // makes counting of wins and prints certain texts for game logging
    switch (result) {
        case -3:
            resultText += "You Lose! Scissors beats Paper";
            winsByCpu++;
            break;
        case -2:
            resultText += "You Lose! Paper beats Rock";
            winsByCpu++;
            break;
        case -1:
            resultText += "You Lose! Rock beats Scissors";
            winsByCpu++;
            break;
        case 0:
            resultText += "It's a tie!"
            break;
        case 1:
            resultText += "You Win! Rock beats Scissors";
            winsByUser++;
            break;
        case 2:
            resultText += "You Win! Paper beats Rock";
            winsByUser++;
            break;
        case 3:
            resultText += "You Win! Scissors beats Paper";
            winsByUser++;
            break;
        default:
            resultText += "Something went wrong!, Try again";

    }

    displayResults(resultText,winsByCpu,winsByUser);
    
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

// Remove selection highlight where it was applied
function removeHighlight(){
    let allImages = document.querySelectorAll("img");
    for(i=0; i<allImages.length; i++)
    { 
        if (allImages[i].classList.contains('highlightSelection'))
            allImages[i].classList.remove('highlightSelection');
    }
}

// To display results on the page
function displayResults(result,winsByCpu,winsByUser){

    // set current scores
    scoreCpu.textContent = winsByCpu;
    scorePlayer.textContent = winsByUser;

    // Create game log. A new paragraph to show game result
    // Added resultItem class to be able to remove them in restart phase.
    const gameLogPara = document.createElement("p");
    gameLogPara.setAttribute('class','resultItem');
    const resultNode = document.createTextNode(result);
    gameLogPara.appendChild(resultNode);
    const gameLogElement = document.getElementById("gameLog");
    gameLogElement.appendChild(gameLogPara);

    // after 5 wins the winner is announced and restart button appears.
    if (winsByCpu == 5 || winsByUser == 5){

        if(winsByUser == 5){
            winnerTextParagraph.textContent = "YOU WON!";
        }else{
            winnerTextParagraph.textContent = "YOU LOST!";
        }
        
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        restartBtn.style.display = "block";
    }
}

// function to start a new game
// this function clears the view 
function restartGame(){
    
    // Set congratulation text empty.
    winnerTextParagraph.textContent = "";
  
    // Remove all previous game results from the page.
    let resultItemList = document.getElementsByClassName("resultItem");
    for(let i = resultItemList.length - 1; 0 <= i; i--)
        if(resultItemList[i] && resultItemList[i].parentElement){
            resultItemList[i].parentElement.removeChild(resultItemList[i]);
        }

    // zero win and round counters
    winsByUser = 0;
    winsByCpu = 0;
    gameRound = 0;

    // Set scoreBoard to 0:0
    scoreCpu.textContent = 0;
    scorePlayer.textContent = 0;

    // Enable play-buttons and hide restart-button
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
    restartBtn.style.display = "none";

    removeHighlight();

}


// Add eventListeners to buttons and play to game when button is clicked
const rpsButtons = Array.from(document.querySelectorAll(".rpsBtn"));
rpsButtons.forEach((button) => button.addEventListener('click', playGame));

const restartButton = document.querySelector(".restartBtn");
restartButton.addEventListener('click', restartGame); 



