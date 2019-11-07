var wins = 0;
var losses = 0;

var wordBank = ["platypus", "octopus", "shark", "gecko", "crab"];
//current word chosen for game at random
var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
//will take a word from wordBank at random
var userGuess = [];//use charAt??store user letter guesses
var displayWord[];//array for letters of randomWord
var limit = 6;//loss countdown in for loop for(var turns = 0; turns < limit; turns++){}
var guess = '';//will store onkeyup for userGuess
//think i will use if statement for userGuess && displayWord
//userGuess.push(guess);

//superhero-logging will help for function with changing displayed word??
//begin game function
function startGame() {
	document.getElementById("start-button").

	      document.onkeyup = function(event) {
		var guess = event.key.toLowerCase();
		if
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

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

//for loop with randomWord
var randomWord =
function 


if ((userGuess = "p") || (userGuess = "")
// Randomly choose a word from compOptions variable to use in the game







//sets a new variable to call empty divs and then fill with new information for functions below

var updatedWins = document.getElementById("wins").innerHTML=0;









var updatedGuessesLeft = document.getElementById("guessesLeft");

updatedGuessesLeft.innerHTML=9;



var updatedLettersGuessed = document.getElementById("lettersGuessed");

updatedLettersGuessed.innerHTML="";



// Creating variables to hold the number of wins, losses, and ties. They start at 0.
//from previous rps
      






//if blocks
if (userGuess === ""


// ---------------------------------------- Functions ----------------------------------



// this function randomly selects an initial word, changes it to dashes, then displays on page



function randomize (){



  var computerRandom = options[Math.floor(Math.random()*options.length)];

  var remainingLetters = computerRandom.length;

  var initialOptions = [];

  for(var i = 0; i < computerRandom.length; i++) {

    initialOptions[i] = "  ___  ";

    }

  var updatedComputerChoice = document.getElementById("computerChoice");

      updatedComputerChoice.innerHTML=initialOptions;

}







// show word as only dashes





// run this function whenever user presses a key, to record and document user guess
document.onkeyup = function(event) {
	//captures key press, converts it to lowercase, and saves it to variable.
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
}
// document.onkeyup = function(event) {



// function wordLength () {

//   return this.options.length;

// }

//

// function initialWord() {

//   var dashes = " ";

//   for (var i=0; i < this.wordLength(); i++) {

//     dashes + "_";

//   }

//

//   this.updatedComputerChoice = dashes;

//   return dashes;

// }

//

// initialWord();



//

//   //determine which key was pressed

//  // search string for index of that letter, use var res = str.charAt(i); to show letter

//   var userGuess = event.key;

//

//

// };



// compare user key pressed to letters in chosen word



// loop for what to do, if key pressed matches show the letter, if not document letter in updatedLettersGuessed







// loop if word is guessed, add one to wins column, run win message, after 9 guesses if word not guessed, run lost message







//------------------------------------------------Processes



randomize ();