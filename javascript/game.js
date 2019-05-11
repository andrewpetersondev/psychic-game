// ================ INITIALIZE ==========================

// computer will select one of these choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins, losses, guesses remaining, guesses, randomLetter
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var wrongGuesses = [];
var randomLetter = computerChoices[Math.floor(Math.random * computerChoices.length)];

// create a function to restart game
function restart {
    guessesRemaining = 10;
    wrongGuesses = [];
    randomLetter = computerChoices[Math.floor(Math.random * computerChoices.length)];
}


// ================= PLAY GAME =============================

// .onkeyup function for user to guess what the letter is 
document.onkeyup = function playGame(event) {
    userInput = event.key.toLowerCase();

    // if userGuess === computer generated random letter and guesses != 0 then increment wins + 1 and restart game
    if ((userInput === randomLetter) && (guessesRemaining > 0)) {
        wins++;
        restart();
        
    } else if (guessesRemaining > 0 ) {
        guessesRemaining--;



    } else {
        losses++;
        restart();
    }

    // if userGuess !== computer generated random letter and guesses remaining === 0 then increment losses + 1 and restart game

    // code that inputs game results to html

}
