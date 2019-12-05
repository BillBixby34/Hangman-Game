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
var missedLetter = [];//array for missed letters
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
//FIX: commas between "-"EDIT:Fixed with .join
document.getElementById("computer-choice").innerHTML = displayWord.join(" ");
//displays wins
document.getElementById("wins").innerHTML = wins;
//displays guesses left
document.getElementById("guesses-left").innerHTML = limit;
};//startGame()

//check letter, will stop after each letter input
function checkLetter(letter) {

  var letterNow = false;//will set to stop loop;
  for (var i = 0; i < displayWord.length; i++) {
          //check if letter is in randomLetter array
          if (letter === randomLetters[i]) {
            letterNow = true;
          };
        }
        if (letterNow) {

          for (var j = 0; j < displayWord.length; j++) {
            
            if (letter === randomLetters[j]) {
              displayWord[j] = letter;

              console.log(displayWord);
            }
          }
        }

            else{
              missedLetter.push(letter);
              console.log(missedLetter);
              limit--;
            };
          };//checkLetter function

// Converts the user's answer to lowercase.
  //var userGuessLower = userGuess.toLowerCase();
  // Next, we give JavaScript a function to execute when onkeyup event fires.

//keep score, tally misses
function scoreKeep() {
  document.getElementById("computer-choice").innerHTML = displayWord.join(" ");
//displays misses
document.getElementById("letters-guessed").innerHTML = missedLetter.join(" ");
//displays guesses left
document.getElementById("guesses-left").innerHTML = limit;

  if (displayWord.toString() === randomLetters.toString()) {
    wins++;
    alert("YOU WIN!");
    
    document.querySelector("#wins").innerHTML = wins;
    startGame();
    }

  else if (limit === 0) {
    alert("YOU LOSE!");
    startGame();
  }
  }



//------------------------------------------------FUNCTION EXECUTIONS--------------------------

startGame();
document.onkeyup = function(event) {
        // Determine which key was pressed, make it lowercase, and set it to the userInput variable.
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        
        checkLetter(userGuess);
        scoreKeep();
};