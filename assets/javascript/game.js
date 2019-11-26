//----OVERVIEW---------------------------------
//word chosen and check value against userPushArray;

//-------------VARIABLES--------------------------------------

//Game score
let wins = 0;
let losses = 0;
let limit = 6;//loss countdown in for loop for(var turns = 0; turns < limit; turns++){}


var wordBank = ["pikachu","greninja","hitmonchan","eevee", "sandshrew"];
var randomLetters = [];//array to store letters from randomWord
//var userGuess = [];//store user letter guesses
var displayWord = [];//array for letters of randomWord...use charAt??
var missedLetter = [];
// ---------------------------------------- Functions ----------------------------------
//begin game function

function startGame() {
  //reset the limit each game
  limit = 6;
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

            else {//ahve to stop loop
              missedLetter.push(userGuess);
              console.log(missedLetter);
              limit--;
            }
          };//if block
        };//for keyupfunction block

//Next, collect wrong answers, turn--, if turn=0, etc.-------------------------------------------

// var updatedLettersGuessed = document.getElementById("lettersGuessed");

// updatedLettersGuessed.innerHTML="";




//keep score, tally misses
function scoreKeep() {
  if (displayWord.toString() === randomLetters.toString()) {
    alert("YOU WIN!");
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    startGame();
    }

  if (limit === 0) {
    alert("YOU LOSE!");
    startGame();
  }
  }



//------------------------------------------------FUNCTION EXECUTIONS--------------------------

startGame();

// randomize ();