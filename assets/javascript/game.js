

var totalWins = 0;
var totalLosses = 0;
var guessesLeft;
var actorArray;
var brackets;
var lettersUsed;
var actor;
var userInput;

  function startGame(){
    

    //Displays Total User Wins
    document.getElementById("totalWins").innerHTML=("<p>WINS: </p>" + totalWins);

    //Displays Total User Losses
    document.getElementById("totalLosses").innerHTML=("<p>LOSSES: </p>" + totalLosses)

    //Total Number of Guesses User Has Left
    guessesLeft=13;
    document.querySelector("#guessesLeft").innerHTML=("<p> GUESSES LEFT: </p>" + guessesLeft);


    //Actors That Have Played Cowboys!
    actorArray=["JOHN WAYNE", "CLINT EASTWOOD", "KURT RUSSELL", "RUSSELL CROWE", "JEFF BRIDGES"];

    //Turns brackets Into An Array
    brackets=[];

    //Letters That the User Has Guessed
    lettersUsed=[];
    document.querySelector("#lettersUsed").innerHTML=("<p>LETTERS USED: </p>" + lettersUsed);    

    //Picks a Random Actor From the actorArray
    actorIndex= Math.floor(Math.random() * actorArray.length);
    actor= actorArray[actorIndex];
    console.log("New actor :" + actor);


    for(var i=0; i<actor.length; i++){
      //brackets array
      brackets[i]= "_ ";
    }
    console.log("Blank Word: " + brackets);

    document.getElementById('brackets').innerHTML = brackets.join("");



  }//end startGame function


startGame();  

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        //your code




  document.onkeyup=function(event){

    userInput = event.key.toUpperCase();
    checkLetter(actor, brackets, userInput, lettersUsed);

    console.log(guessesLeft);

    if(guessesLeft==0){
      console.log("You loose the game!")
      
      totalLosses++
      console.log("Wins: " + totalWins);
      console.log(guessesLeft);

      startGame();
    }


    if(brackets.join("")== actor){
      console.log("You win the game");
      
      totalWins++;
      console.log("Wins: " + totalWins);
      console.log(guessesLeft);

      startGame();
    }

  }

  }
}



  //Checks if the Letter the User Guessed Matches a Letter in the Array
  function checkLetter(actor, brackets, letter, lettersUsed){
    for(var i=0; i<actor.length; i++){
      if(actor.charAt(i)==letter.toUpperCase()){
        brackets[i]=letter.toUpperCase();
        console.log(brackets);
      }
      document.getElementById("brackets").innerHTML=brackets.join("");
    }

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


