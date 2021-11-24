const VALID_HANDS = ['rock', 'paper', 'scissors'];
const rounds = roundCount();

if (rounds === null) {
    alert("Game ended.")
}   else {
    game();
}

// functions start here

//  Prompt player for amount of rounds.
function roundCount() {
    let count = "";

    //  Verify input is a valid number of playable rounds.
    while (isNaN(count) || count < 1) {
        count = prompt("How many rounds of Rock Paper Scissors would you like to play? (ex: 3) ");

        //  Stop if user Cancels.
        if (count === null) {
            break;
        }   else {

            // Verify user input is a valid number. If not, inform them.
            count = parseInt(count);
            if (isNaN(count) || count < 1) {
                alert("Please input an integer of 1 or greater.");
            }
        }
    }
    return count;
}

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
    if (VALID_HANDS.indexOf(playerSelection) > VALID_HANDS.indexOf(computerSelection)) {
        return `Your ${playerSelection} ~VS~ my ${computerSelection}! You win!`;
    }   else if (VALID_HANDS.indexOf(playerSelection) < VALID_HANDS.indexOf(computerSelection)) {
        return `Your ${playerSelection} ~VS~ my ${computerSelection}! You lose!`;
    }   else {
        return `Your ${playerSelection} ~VS~ my ${computerSelection}. This one\'s a draw.`;
    }
}

//  Loops individual round of RPS to play a game of user-specified number of rounds.
function game() {
    let player = "";

    for (let i = 1; i <= rounds; i++) {
        //  End if player Cancels.
        player = playerPlay();
        if (player === null) {
            alert("Game ended.");
            break;
        }   else {
            //  Display the results of each round.
            alert(`Round ${i}: ${singleRound(player, computerPlay())}`);
            console.log(`Round ${i}: ${singleRound(player, computerPlay())}`);
        }
    }
}