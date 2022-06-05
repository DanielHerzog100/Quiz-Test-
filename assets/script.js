var startButton = document.querySelector(".start-button");
var questions = document.querySelector(".questions");
var questionPrompt = document.querySelector("#question-prompt");
var submitPage = document.querySelector(".submit-page");
var submitButton = document.querySelector (".submit-button");
var header = document.querySelector(".header");
var questionIndex = 0;
var startPage = document.querySelector("#start-page")
var timer;
var timerEL = document.querySelector("#timer");
var timerCount = 60;
var answersEL = document.querySelector ("#answers");

var questionList = [
    {
    title: "What's 2+2?",
    correct: "answer3",
    answers: ["answer1" , "answer2" , "answer3", "answer4"]
    },

    {
    title: "question2",
    correct: "answer3",
    answers: ["answer1" , "answer2" , "answer3", "answer4"]
    },

{
    title: "question3",
    correct: "answer3",
    answers: ["answer1" , "answer2" , "answer3", "answer4"]
    },


]

function startQuiz() {
   startPage.setAttribute("class", "hide");
timer=setInterval(countdown, 1000);
startQuestions();
}

function countdown() {
   timerCount --;
   timerEL.textContent = timerCount;
   if(timerCount <= 0) {
       endQuiz() 
   }

 }

function startQuestions() {
    questions.removeAttribute("class","hide");
    var currentQuestion = questionList[questionIndex];
    questionPrompt.textContent = currentQuestion.title;
    currentQuestion.answers.forEach(function (answer, i) {
        var answerButton = document.createElement("button")
        answerButton.setAttribute("value",answer)
        answerButton.textContent = answer
        answerButton.onclick = correctAnswer 
        answersEL.appendChild (answerButton)
        }
    )
}

function correctAnswer () {

    
} 



function endQuiz() {
clearInterval(timer)
}



startButton.addEventListener("click", startQuiz)