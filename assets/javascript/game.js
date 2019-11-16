//----OVERVIEW---------------------------------
//word chosen and check value against userPushArray;

//-------------VARIABLES--------------------------------------



//seperate 

var wins = 0;
var losses = 0;
var limit = 6;//loss countdown in for loop for(var turns = 0; turns < limit; turns++){}
var wordBank = ["pikachu","greninja","hitmonchan","eevee", "sandshrew"];
var randomLetters = [];//array to store letters from randomWord
//var userGuess = [];//store user letter guesses
var displayWord = [];//array for letters of randomWord...use charAt??
//will take a word from wordBank at random
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(randomWord);//WORKED
for (var i = 0; i < randomWord.length; i++) {
  //takes randomWord characters and places in randomLetters array
  randomLetters.push(randomWord.charAt([i]))
};//will be in function in game later
console.log(randomLetters);
blankLetters = randomLetters.length;//will be '-'
for (var i = 0; i < blankLetters; i++) {
  displayWord.push("_");
}
console.log(displayWord);
// Let's start by grabbing a reference to the <span> below.
//let userGuess = document.getElementById("user-text");

//think i will use if statement for userGuess && displayWord
//userGuess.push(guess);

// Converts the user's answer to lowercase.
  //var userGuessLower = userGuess.toLowerCase();
  // Next, we give JavaScript a function to execute when onkeyup event fires.
   document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);

}

//var guess = '';//will store onkeyup for userGuess


//take word chosen and check value against userPushArray;

//superhero-logging will help for function with changing displayed word??




//for loop with randomWord


// if ((userGuess = "p") || (userGuess = "")


//sets a new variable to call empty divs and then fill with new information for functions below

var updatedWins = document.getElementById("wins").innerHTML=0;









var updatedGuessesLeft = document.getElementById("guessesLeft");

updatedGuessesLeft.innerHTML=9;



var updatedLettersGuessed = document.getElementById("lettersGuessed");

updatedLettersGuessed.innerHTML="";



// ---------------------------------------- Functions ----------------------------------
//begin game function
function startGame() {
  document.getElementById("start-button").

        document.onkeyup = function(event) {
    var guess = event.key.toLowerCase();
    

        if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

          // Creating a variable to hold our new HTML. Our HTML now keeps track of our wins/losses/ties.
          var html = "<p>Choose a letter 'a - z'</p>" +
          "<p>wins: " + wins + "</p>" +
          "<p>losses: " + losses + "</p>" +
          "<p>ties: " + ties + "</p>";

          document.querySelector("#game").innerHTML = html;

        }
      };
}

//function will take the randomWord and display "-".
function fillInBlank() {

}
// this function randomly selects an initial word, changes it to dashes, then displays on page
function randomize(){

  var computerRandom = options[Math.floor(Math.random()*options.length)];

  var remainingLetters = computerRandom.length;

  var initialOptions = [];

  for(var i = 0; i < computerRandom.length; i++) {

    initialOptions[i] = "  ___  ";

    }

  var updatedComputerChoice = document.getElementById("computerChoice");

      updatedComputerChoice.innerHTML=initialOptions;

}



// run this function whenever user presses a key, to record and document user guess
//document.onkeyup = function(event) {
  //captures key press, converts it to lowercase, and saves it to variable.
  //var letter = String.fromCharCode(event.keyCode).toLowerCase();
//}
// document.onkeyup = function(event) {



// function wordLength () {

//   return this.options.length;

// }


// compare user key pressed to letters in chosen word



// loop for what to do, if key pressed matches show the letter, if not document letter in updatedLettersGuessed







// loop if word is guessed, add one to wins column, run win message, after 9 guesses if word not guessed, run lost message







//------------------------------------------------FUNCTION EXECUTIONS--------------------------



// randomize ();