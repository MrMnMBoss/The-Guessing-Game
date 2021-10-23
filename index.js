let randomNumber = getRandomNumber(1, 1000);
console.log(randomNumber);
function checkAnswer() {
    let userAnswer = getInput("answer");   
        userAnswer= parseInt(userAnswer) 

   if (userAnswer > randomNumber) {
       printOutput("output","Too High!! Guess a number closer to your grades ( ͡° ͜ʖ ͡°)")
   }  else if  (userAnswer < randomNumber){
    printOutput("output","Too Low! Nobody asked you to put your IQ ಠ_ಠ")
   }
    else if  (userAnswer === randomNumber){
        printOutput("output","Good job! You got it right ( ͡ᵔ ͜ʖ ͡ᵔ )");
        randomNumber = getRandomNumber(1, 1000);
    }
        

        
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  

//INPUT OUTPUT FUNCTIONS
function getInput(id) {
    return document.getElementById(id).value;
  }
  
  function printOutput(id, text) {
    document.getElementById(id).innerHTML = text;
  }



