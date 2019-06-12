// ================ GLOBAL VARIABLES ==========================
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesRemaining = 10;

var userGuesses = [];

var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log("random letter = " + randomLetter);

// ================ FUNCTIONS ============================
function initializeGame() {
    document.getElementById("wins").innerHTML = wins;

    document.getElementById("losses").innerHTML = losses;

    document.getElementById("guesses-remaining").innerHTML = guessesRemaining;

    document.getElementById("user-guesses").innerHTML = userGuesses.join(" ");
}

initializeGame();

function restart() {
    guessesRemaining = 10;
    userGuesses = [];
    randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("random letter = " + randomLetter);
}

// ================= PLAY GAME =============================

// create a function based on pressing a key
document.onkeyup = function (event) {

    // capture userInput and store it in lowercase
    var userInput = event.key.toLowerCase();

    // make sure userInput is valid
    if (computerChoices.indexOf(userInput) != -1) {

        // make sure user can only enter the same input once
        if (userGuesses.indexOf(userInput) == -1) {

            // insert userInput into userGuesses array
            userGuesses.push(userInput);

            // if user guesses correctly 
            if ((userInput === randomLetter)) {
                wins++;
                restart();
            }
            else {
                guessesRemaining--;
            }

            if (guessesRemaining <= 0) {
                losses++;
                restart();
            }

        }
        else {
            alert("you already selected that");
        }
    }
    else {
        alert("that is not a valid input. only letters.");
    }

    initializeGame();
} 
