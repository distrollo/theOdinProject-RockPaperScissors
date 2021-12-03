const VALID_HANDS = ['rock', 'paper', 'scissors'];
let currentResult = '';
let playerScore = 0;
let computerScore = 0;

//  RPS functionality starts here

//  Prompt player for Rock, Paper, or Scissors.
function playerPlay() {
    let playerHand = "";

    //  Loop to verify user input is a valid hand.
    while (VALID_HANDS.indexOf(playerHand) == -1) {
        playerHand = prompt("You choose: ");

        //  Stop if user Cancels.
        if (playerHand === null) {
            break;
        }   else {

            //  Verify user input is a valid hand. If not, inform them.
            //  'playerSelection' should be case-insensitive to allow input variations.
            playerHand = playerHand.toLowerCase();
            if (VALID_HANDS.indexOf(playerHand) == -1) {
                alert("Remember, we're playing ~rock~ ~paper~ ~scissors~... Let's go again.")
            }
        }
    }
    return playerHand;
}

//  Randomly returns either Rock, Paper, or Scissors for computer.
function computerPlay() {
    //  Select from array of choices by selecting random number, corresponding to array index within valid choices.
    return VALID_HANDS[Math.floor(Math.random() * VALID_HANDS.length)];
}

//  Plays a single round of RPS, and returns a string that declares the winner. (ex: "You Lose! Paper beats Rock")
function singleRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return `Your ${playerSelection} ~VS~ my ${computerSelection}. This one\'s a draw.`;
    }   else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You lose!`;
        }   else {
            playerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You win!`;
        }
    }   else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            computerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You lose!`;
        }   else {
            playerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You win!`;
        }
    }   else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            computerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You lose!`;
        }   else {
            playerScore++
            return `Your ${playerSelection} ~VS~ my ${computerSelection}! You win!`;
        }
    }
}

//  UI features start here

//  Buttons used to select player's hand.
const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        currentResult = singleRound(button.dataset.hand, computerPlay())
        console.log(currentResult);
    });
});

//  Update the DOM with result of last-played round.
const roundContainer = document.querySelector('.round-result');
const roundResult = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        roundResult.textContent = currentResult;
        roundContainer.appendChild(roundResult);
    });
});

//  Display the running score for the match.
const scoreContainer = document.querySelector('.overall-score');
const overallScore = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        overallScore.textContent = `Your Wins: ${playerScore} ~ Computer Wins: ${computerScore}`;
        scoreContainer.appendChild(overallScore);
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playerScore == 5) {
            overallScore.textContent = "Game Over! You win!";
            scoreContainer.appendChild(overallScore);
            playerScore = 0;
            computerScore = 0;
        }   else if (computerScore == 5) {
            overallScore.textContent = "Game Over! You lose!";
            scoreContainer.appendChild(overallScore);
            playerScore = 0;
            computerScore = 0;
        }
    });
});