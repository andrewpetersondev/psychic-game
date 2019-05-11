// ================ INITIALIZE ==========================

// computer will select one of these choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// variables for wins, losses, guesses remaining, guesses, randomLetter
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuesses = [];
var randomLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];

console.log(randomLetter);

// create a function to restart game
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
// .onkeyup function for user to guess what the letter is 
document.onkeyup = function (event) {

    // log user input and convert to lowercase
    var userInput = event.key.toLowerCase();

    if (computerChoices.indexOf(userInput) > -1) {

        if (userGuesses.indexOf(userInput) === -1) {
            // add user input to user guesses array
            userGuesses.push(userInput);


            // if userGuess === computer generated random letter and guesses != 0 then increment wins + 1 and restart game
            if ((userInput === randomLetter) && (guessesRemaining > 0)) {
                wins++;
                restart();

            } else if (guessesRemaining > 0) {
                guessesRemaining--;

            } else {
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
