clearHighScores = document.getElementById("clear-high-scores-button");
highScoresSection = document.getElementById("highscore-results");


// setting a variable that pulls the data from local storage as an object with key value pairs
const items = {...localStorage};
// setting a counter that will give values to the side of the high scores
let counter = 1;
// function that loops through the key value pairs in the object from locat storage, creates a list for each, adds them into the ordered list on the page, then puts in the literal values in each list.
// counter then ticks up by one
function displayScores(){
    for (const [key, value] of Object.entries(items)){
            const newList = document.createElement("li");
            var list = highScoresSection.appendChild(newList);
            var textNode = document.createTextNode(`${counter}. ${key} - ${value}`);
            counter ++;
            list.appendChild(textNode);
    }
}
// calling the display score function
displayScores();
// listening to the clear button and executing a clearing of local storage, then making the highscores section HTML clear. 
clearHighScores.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    highScoresSection.innerHTML = "";
});