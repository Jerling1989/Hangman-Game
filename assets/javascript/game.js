// VARIABLES FOR THE GAME
var totalWins = 0;
var totalLosses = 0;
var guessesLeft;
var actorArray;
var brackets;
var lettersUsed;
var actor;
var userInput;


// FUCNTION FOR GAME TO RUN AND 
// PICK AN ACTOR FOR THE HANGMAN ROUND
function startGame(){
  

  // DISPLAYS TOTAL USER WINS
  document.getElementById("totalWins").innerHTML = ("<p>WINS: </p>" + totalWins);

  // DISPLAYS TOTAL USER LOSSES
  document.getElementById("totalLosses").innerHTML = ("<p>LOSSES: </p>" + totalLosses)

  // THE TOTAL NUMBER OF GUESSES THE USER HAS LEFT
  guessesLeft = 13;
  document.querySelector("#guessesLeft").innerHTML = ("<p> GUESSES LEFT: </p>" + guessesLeft);


  // ARRAY OF ACTORS THAT HAVE PLAYED COWBOYS
  actorArray = ["JOHN WAYNE", "CLINT EASTWOOD", "KURT RUSSELL", "RUSSELL CROWE", "JEFF BRIDGES"];

  // TURNS BRACKETS INTO AN ARRAY
  brackets = [];

  // LETTERS THAT THE USER HAS GUESSED
  lettersUsed = [];
  document.querySelector("#lettersUsed").innerHTML = ("<p>LETTERS USED: </p>" + lettersUsed);    

  // PICKS A RANDOM ACTOR FROM THE ACTOR ARRAY
  actorIndex = Math.floor(Math.random() * actorArray.length);
  actor = actorArray[actorIndex];
  console.log("New actor :" + actor);

  // FILLS BRACKETS ARRAY WITH EMPTY SLOT
  // FOR EVERY LETTER IN ACTOR'S NAME
  for(var i=0; i<actor.length; i++){

    brackets[i] = "_ ";
  }

  console.log("Blank Word: " + brackets);

  document.getElementById('brackets').innerHTML = brackets.join("");

}// END START GAME FUNCTION

// CALL FUNCTION AT PAGE LOAD
startGame();  

// FUNCTION TO START GAME WHEN SPACEBAR IS HIT
document.body.onkeyup = function(e){
  if(e.keyCode == 32){

    // FUNCTION RUN EVERYTIME USER HITS A LETTER
    document.onkeyup = function(event){

      // TURNS USER LETTER INTO CAPITAL LETTER AND RUNS CHECKLETTER FUNCTION
      userInput = event.key.toUpperCase();
      checkLetter(actor, brackets, userInput, lettersUsed);

      console.log(guessesLeft);

      // TRACKS A LOSS FOR USER AND RESTARTS GAME WHEN NO GUESSES ARE LEFT
      if(guessesLeft == 0){
        console.log("You loose the game!")
        
        totalLosses++
        console.log("Wins: " + totalWins);
        console.log(guessesLeft);

        startGame();
      }

      // TRACKS A WIN FOR USER AND RESTARTS GAME WHEN USER GUESSES ACTOR NAME CORRECTLY
      if(brackets.join("") == actor){
        console.log("You win the game");
        
        totalWins++;
        console.log("Wins: " + totalWins);
        console.log(guessesLeft);

        startGame();
      }

    }

  }
}


// CHECKS IF THE LETTER THE USER GUESSED MATCHES A LETTER IN THE ARRAY
function checkLetter(actor, brackets, letter, lettersUsed){

  // ADDS LETTER TO EMPTY BRACKET IF IT APPEARS IN ACTOR NAME
  for(var i=0; i<actor.length; i++){
    if(actor.charAt(i)==letter.toUpperCase()){
      brackets[i]=letter.toUpperCase();
      console.log(brackets);
    }
    document.getElementById("brackets").innerHTML=brackets.join("");
  }

  // ADDS LETTER TO USED LETTERS LIST AND REMOVES GUESS COUNT
  if(lettersUsed.indexOf(letter)===-1){
    guessesLeft--;
    lettersUsed.push(letter);

    for(var i=0; i<lettersUsed.length; i++){
      document.querySelector("#lettersUsed").innerHTML=("<p>LETTERS USED: </p>" + lettersUsed);  
    }
  }
  
  document.querySelector("#guessesLeft").innerHTML=("<p> GUESSES LEFT: </p>" + guessesLeft);
  console.log(lettersUsed);

}


