const startQuizButton = document.getElementById("start-quiz-button");
const questionsAndWelcome = document.getElementById("questions-and-welcome");
const questionsButtonsChoice = document.getElementById("questions-buttons-choice");

var questions = [
{
    question: "Commonly used data types DO NOT include:",
    answerOne: "1. strings",
    answerTwo: "2. booleans",
    answerThree: "3. alerts",
    answerFour: "4. numbers"
},

{
    question: "Arrays in JavaScript can be used to store _________.",
    answerOne: " 1. numbers and strings",
    answerTwo: " 2. other arrays",
    answerThree: "3. booleans",
    answerFour: "4. all of the above"
},

{
    question: "String values must be enclosed within ______ when being assigned to variables.",
    answerOne: "1. commas",
    answerTwo: "2. curly brackets",
    answerThree: "3. quotes",
    answerFour: "4. parenthesis"
},

{
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answerOne: "1. JavaScript",
    answerTwo: "2. terminal/bash",
    answerThree: "3. for loops",
    answerFour: "4. console.log"
},

{
    question: "The condition in an if/else statement is enclosed with _______.",
    answerOne: "1. quotes",
    answerTwo: "2. curly brackets",
    answerThree: "3. parenthesis",
    answerFour: "4. square brackets"
}
];

function quizGame () {
    nextQuestion = 0;
    // questionsButtonsChoice.



    for(var i = 0; i < questions.length; i++) {
        for(var prop in questions[i]){
            console.log(questions[i][prop]);
            questionsAndWelcome.innerHTML = questions[i].question;
            questionsButtonsChoice.createElement
            

            nextQuestion += 1;
            if (nextQuestion === 5) {
                return;
            }

        }
    }
}
   
startQuizButton.addEventListener("click", quizGame);







// todo: make a button to start the game.

// once button is hit, run code to re write the html and show the quiz information

// create a timer that is counting down from 100.

// find a way to verify bulleted list and make each bulleted list into buttons

// if user hits the wrong button, it subtracts values from the timer and gives the user feedback "right or wrong"

// once the game is done, give them a chance to type in their name and submit a high score. 

// be able to save the high score for being able to look up later. 

// put up a link to the high score page on the main page



// base html
// hit button 
// for in or for each loop that looped the array
// question { question 1: "blah blah blah"}
// make a timer
// 
