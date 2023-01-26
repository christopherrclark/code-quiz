var timerArea = document.getElementById("timer");
var scoreArea = document.getElementById("score");
var questionArea = document.getElementById("quiz");
var startButton = document.getElementById("BtnStart");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var questionsGoHere = document.getElementById("question-goes-here");
var initalPage = document.getElementById("initials_page")
var initalsInput = document.getElementById("initials")
var initialsBtn = document.getElementById("initials_btn")
var finalPage = document.getElementById("finalPage")
// var secondsRemaining = questions.length * 5;
var secondsRemaining = 75;
var currQuestionIdx = 0;     // change this value when moving from one question to another

quiz.style.display = "none"
finalPage.style.display = "none"

function startQuiz(){
  start.style.display = "none";
  quiz.style.display = "block"
  startTimer();
  showQuestion();
}


function startTimer(){
  var countdown = setInterval(() => {
    secondsRemaining = secondsRemaining - 1;
    timerArea.innerHTML = `Time remaining: ${secondsRemaining}`  //template literals
    // timerArea.innerHTML = "time remaining : "+ secondsRemaining  //concatination

    if( secondsRemaining === 0 ){
      clearInterval(countdown)
      endTheGame()
    }
  }, 1000);
}



function showQuestion(){
  console.log (currQuestionIdx)

  if (currQuestionIdx < 5) {
    var currQuestion = questions[currQuestionIdx];  // this is the question object
    var h2Tag = document.createElement("h2");
    questionsGoHere.textContent = "";
    h2Tag.textContent = currQuestion.question; 
    questionsGoHere.appendChild(h2Tag);   // adds the h2 tag to the div area
  
  for( var i = 0; i<currQuestion.answers.length; i++ ){   // loop through all the answers
    var button = document.createElement("button");  // Creating button DYNAMICALLY!!



    button.textContent = currQuestion.answers[i];   // <button> 1. quotes </button>  // i always represents whichever item we're in when we loop over the array
   
    button.addEventListener("click", function(event){
      event.preventDefault()
      let clickedBtnText = event.target.innerHTML
      console.log(clickedBtnText)
      if( clickedBtnText === currQuestion.correct ){
        renderingNextQ()
      } else{
        secondsRemaining = secondsRemaining -10;
        renderingNextQ()
      }
    })
 
    questionsGoHere.appendChild(button);  // Manipulating the DOM
  }
} else{
  showInitalsPage()
}
}

function showInitalsPage(){
  quiz.style.display = "none"
  initalPage.style.display = "block"
  initialsBtn.addEventListener("click", function(event){
    event.preventDefault()
    let userInitials = initalsInput.value
    saveToLocalStorage(userInitials)
  })
}

function saveToLocalStorage(initials){
  let userData = {
    initial: initials, 
    score: secondsRemaining
  }

  let localStorageData = JSON.parse(localStorage.getItem("quiz_score"))
  if(localStorageData === null){
    localStorageData = []
    localStorageData.push(userData)
  }else {
    localStorageData.push(userData)
  }

  localStorage.setItem("quiz_score", JSON.stringify(localStorageData))
  showFinalPage()
}

function showFinalPage(){
  initalPage.style.display = "none"
  finalPage.style.display = "block"
}

function renderingNextQ(){
  currQuestionIdx++;
  showQuestion();
}

function answerWasCorrect(){
  // logic goes here for when answer is correct
  renderingNextQ();
}

function answerWasWrong(){
  // logic for when the answer is wrong
  secondsRemaining = secondsRemaining - 10;
  renderingNextQ();
}

function endTheGame(){

}

let elementClicked = false;

questionsGoHere.addEventListener("click", function(event){
  // can we determine if a button was clicked; and then, which button  
  if( event.target.matches("button") ){
    if(event.target.getAttribute("data-is-correct") === "yes"){

    } else {
      
    }
  }
})
  
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


// work on getting:
//   -timer to stop (and game over) after last question is answered or the timer reaches zero
//   -showing whether the last question was answered correctly or incorrectly
//   -hiding the "User initials" box until the end of the quiz
//   -add "Your Done!" "Your final score is ___" then "Enter your initials" and initials box with a "submit" button
//   -showing the "high score" box with a list of initial and score with "go back" (or "Restart quiz") button and "clear high scores"
//   -make a "View Highscores" button at the top of the screen, on same line as timer (like in sample animation)
//   -styling the page in CSS


// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

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