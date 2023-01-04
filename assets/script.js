const startQuizButton = document.getElementById("start-quiz-button");
var questionList = {
    question1: `<section id="questions-buttons-choice">
                    <ul>
                        <li id = "question"> Commonly used data types DO NOT include: </li>
                        <li><button data-answer= "wrong"> 1. strings </button></li>
                        <li><button data-answer= "wrong"> 2. booleans </button></li>
                        <li><button data-answer= "right"> 3. alerts </button></li>
                        <li><button data-answer= "wrong"> 4. numbers </button></li>
                    </ul>
                </section>
                <section id = "answer-response">Wrong!</section>`,
    question2: `<section id="questions-buttons-choice">
                    <ul>
                        <li id = "question"> Arrays in JavaScript can be used to store _________. </li>
                        <li><button data-answer= "wrong"> 1. numbers and strings </button></li>
                        <li><button data-answer= "wrong"> 2. other arrays </button></li>
                        <li><button data-answer= "wrong"> 3. booleans </button></li>
                        <li><button data-answer= "right"> 4. all of the above </button></li>
                    </ul>
                </section>
                <section id = "answer-response">Wrong!</section>`,
    question3: `<section id="questions-buttons-choice">
                    <ul>
                        <li id = "question"> String values must be enclosed within ______ when being assigned to variables. </li>
                        <li><button data-answer= "wrong"> 1. commas </button></li>
                        <li><button data-answer= "wrong"> 2. curly brackets </button></li>
                        <li><button data-answer= "right"> 3. quotes </button></li>
                        <li><button data-answer= "wrong"> 4. parenthesis </button></li>
                    </ul>
                </section>
                <section id = "answer-response">Wrong!</section>`,
    question4: `<section id="questions-buttons-choice">
                    <ul>
                        <li id = "question"> A very useful tool used during development and debugging for printing content to the debugger is: </li>
                        <li><button data-answer= "wrong"> 1. JavaScript </button></li>
                        <li><button data-answer= "wrong"> 2. terminal/bash </button></li>
                        <li><button data-answer= "wrong"> 3. for loops </button></li>
                        <li><button data-answer= "right"> 4. console.log </button></li>
                    </ul>
        </section>
        <section id = "answer-response">Wrong!</section>`,
    question5: `<section id="questions-buttons-choice">
                    <ul>
                        <li id = "question"> The condition in an if/else statement is enclosed with _______. </li>
                        <li><button data-answer= "wrong"> 1. quotes </button></li>
                        <li><button data-answer= "wrong"> 2. curly brackets </button></li>
                        <li><button data-answer= "right"> 3. parenthesis </button></li>
                        <li><button data-answer= "wrong"> 4. square brackets </button></li>
                    </ul>
                </section>
                <section id = "answer-response">Wrong!</section>`,
    highscore: `<section id="questions-buttons-choice">
                    <h1 id="questions-and-welcome">All done!</h1>
                    <p id="questions-welcome-statement">Your final score is blank </p>
                    <form action="/action_page.php">
                        <label for="initials">Enter initials:</label>
                        <input type="text" id="fname" name="fname">
                        <input type="submit" value="Submit">
                    </form>
                </section>`,
}


// setting up variables for the timer that is going to count down.
let timeEl= document.getElementById("timer");
var secondsLeft = 100;

// setting up the timer to count down. 
function setTime() {
var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
}, 1000);
}



// seting up the function to start the game!
function quizGame(){
    // gets the main element and saves it to a variable so i can overwrite the contents
    var mainElement = document.getElementById("questions-main");
    // setting newQuestion to the array position of question 1
    var newQuestion = questionList.question1;   
    // setting the innerHTML of the main section "questions main to equal the question 1 of the object."
    mainElement.innerHTML = newQuestion;
    // looking at the "wrong" response alert and hiding it.
    let answerResponse = document.getElementById("answer-response");
    answerResponse.style.display = "none";

    // starting the timer
    setTime();

    // adding an on click event and running it through some if statements to loop through the object under certain conditions. 
    
    mainElement.addEventListener("click", function(event){
        var element = event.target;
        var state = element.getAttribute("data-answer");
        
        
        if (state === "wrong"){
            document.getElementById("answer-response").style.display= "block";
        } else if (newQuestion === questionList.question1 && state === "right") {
            newQuestion = questionList.question2;
            mainElement.innerHTML = newQuestion;
            document.getElementById("answer-response").style.display = "none";
        } else if (newQuestion === questionList.question2 && state === "right") {
            newQuestion = questionList.question3;
            mainElement.innerHTML = newQuestion;
            document.getElementById("answer-response").style.display = "none";
        } else if (newQuestion === questionList.question3 && state === "right") {
            newQuestion = questionList.question4;
            mainElement.innerHTML = newQuestion;
            document.getElementById("answer-response").style.display = "none";
        } else if (newQuestion === questionList.question4 && state === "right") {
            newQuestion = questionList.question5;
            mainElement.innerHTML = newQuestion;
            document.getElementById("answer-response").style.display = "none";
        } else if (newQuestion === questionList.question5 && state === "right") {
            newQuestion = questionList.highscore;
            mainElement.innerHTML = newQuestion;
        };
    
    });
}

startQuizButton.addEventListener("click", quizGame);




