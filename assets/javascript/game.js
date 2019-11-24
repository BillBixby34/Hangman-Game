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
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        console.log(userGuess);
        for (var i = 0; i < displayWord.length; i++) {
          if (userGuess === randomLetters[i]) {
              displayWord[i] = userGuess;
              console.log(displayWord);
            }//works
  //place value from randomLetters into displayLetters "-"
          };//if block
        };//for keyupfunction block



// var updatedLettersGuessed = document.getElementById("lettersGuessed");

// updatedLettersGuessed.innerHTML="";




//function will take the randomWord and display "-".
function fillInBlank() {

}









//------------------------------------------------FUNCTION EXECUTIONS--------------------------

startGame();

// randomize ();