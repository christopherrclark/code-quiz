var timerArea = document.getElementById("timer");
var scoreArea = document.getElementById("score");
var questionArea = document.getElementById("quiz");
var startButton = document.getElementById("BtnStart");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var secondsRemaining = questions * 5;
var currQuestionIdx = 0;     // change this value when moving from one question to another



function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "block"
  startTimer();
  showQuestion();
}


function startTimer(){
  var countdown = setInterval(() => {
    

    if( secondsRemaining === 0 ){
      clearInterval(countdown)
      endTheGame()
    }
  }, 1000);
}



function showQuestion(){
  var currQuestion = questions[currQuestionIdx];  // this is the question object
  var h2Tag = document.createElement("h2");
  questionArea.textContent = "";
  h2Tag.textContent = currQuestion.question 
  questionArea.appendChild(h2Tag);   // adds the h2 tag to the div area
  
  for( var i = 0; i<currQuestion.answers.length; i++ ){   // loop through all the answers
    var button = document.createElement("button");

    if( currQuestion.answers[i] === currQuestion.correct ){
      // set an attribute on this button indicating its the correct one
      // setAttribute()
    }


    button.textContent = currQuestion.answers[i];   // i always represents whichever item we're in when we loop over the array
    button.onclick = renderingNextQ;
    questionArea.appendChild(button);
  }
}

function renderingNextQ(){
  currQuestionIdx++;
  showQuestion();
}
function endTheGame(){

}

let elementClicked = false;

// questionArea.addEventListener("click", function(event){

//   // can we determine if a button was clicked; and then, which button  

  
//   if( event.target.matches("button") ){
//     console.log(event.target)
//     // look for the attribute we added if the button is correct
//     let text = event.getAttribute(target.matches)
//   }
 
// })

startButton.addEventListener("click", startQuiz);



//   if (event.target){
//     console.log('button has already been clicked before') 
//  }
  // else ()


//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score