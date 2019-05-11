// ================ INITIALIZE ==========================
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuesses = [];
var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(randomLetter);

function restart() {
    guessesRemaining = 10;
    userGuess = [];
    randomLetter = computerChoices[Math.floor(Math.random * computerChoices.length)];
}

// FUNCTIONS
function initializeGame() {
    document.getElementById("wins").innerHTML = "wins : " + wins;
    document.getElementById("losses").innerHTML = "losses : " + losses;
    document.getElementById("guesses-remaining").innerHTML = "<b>guesses remaining </b> : " + guessesRemaining;
    document.getElementById("guesses").innerHTML = "You already guessed : " + userGuesses;
}

initializeGame();

// ================= PLAY GAME =============================

// create a function based on pressing a key
document.onkeyup = function (event) {
    
    // capture userInput and store it in lowercase
    var userInput = event.key.toLowerCase();

    // make sure userInput is valid
    if (computerChoices.indexOf(userInput) > -1) {

        // make sure user can only enter the same input once
        if (userGuesses.indexOf(userInput) === -1) {

            // insert userInput into userGuesses array
            userGuesses.push(userInput);

            // if user guesses correctly 
            if ((userInput === randomLetter) && (guessesRemaining > 0)) {
                wins++;
                restart();
            }

            // if user guesses incorrectly 
            else if (guessesRemaining > 0) {
                guessesRemaining--;
            }

            // if user runs out of guesses
            else {
                losses++;
                restart();
            }
            initializeGame();

        } else {
            alert("you already selected that");
        }
    } else {
        alert("that is not a valid input. only letters.");

    }
} 
