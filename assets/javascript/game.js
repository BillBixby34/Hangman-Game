//----OVERVIEW---------------------------------
//word chosen and check value against userPushArray;

//-------------VARIABLES--------------------------------------

//Game score
var wins = 0;
var losses = 0;
var limit = 6;//loss countdown in for loop for(var turns = 0; turns < limit; turns++){}


var wordBank = ["pikachu","greninja","hitmonchan","eevee", "sandshrew"];
var randomLetters = [];//array to store letters from randomWord
//var userGuess = [];//store user letter guesses
var displayWord = [];//array for letters of randomWord...use charAt??

// ---------------------------------------- Functions ----------------------------------
//begin game function

function startGame() {
  //will take a word from wordBank at random
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//console.log(randomWord);//WORKED

//will place letters of randomWord in letter array
for (var i = 0; i < randomWord.length; i++) {

  randomLetters.push(randomWord.charAt([i]))

};//closes for loop randomWord
console.log(randomLetters);
//will be '-'
for (var j = 0; j < randomLetters.length; j++) {
  displayWord.push("_");
}//closes for loop displayWord
console.log(displayWord)

//prints displayWord into #computerChoice
//FIX: commas between "-"
document.getElementById("computerChoice").innerHTML = displayWord;
//displays wins
document.getElementById("wins").innerHTML = wins;
//displays guesses left
document.getElementById("guessesLeft").innerHTML = limit;
};//startGame()


// Converts the user's answer to lowercase.
  //var userGuessLower = userGuess.toLowerCase();
  // Next, we give JavaScript a function to execute when onkeyup event fires.
   document.onkeyup = function(event) {
        var userGuess = event.key;
        console.log(userGuess);
        for (var i = 0; i < randomLetters.length; i++) {
          if (userGuess === randomLetters[i]) {
            for (var j = 0; j < displayWord.length; j++) {
              displayWord[j] === userGuess;
              console.log(displayWord);
            }
  //place value from randomLetters into displayLetters "-"
  //displayWord.charAt[j] = randomLetters.charAt[i]
          };//if block
        };//for randomLetters block
        
    };//keyup function event



// var updatedLettersGuessed = document.getElementById("lettersGuessed");

// updatedLettersGuessed.innerHTML="";




//function will take the randomWord and display "-".
function fillInBlank() {

}
// function randomize(){

//   var computerRandom = options[Math.floor(Math.random()*options.length)];

//   var remainingLetters = computerRandom.length;

//   var initialOptions = [];

//   for(var i = 0; i < computerRandom.length; i++) {

//     initialOptions[i] = "  ___  ";

//     }

//   var updatedComputerChoice = document.getElementById("computerChoice");

//       updatedComputerChoice.innerHTML=initialOptions;

// }



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

startGame();

// randomize ();