var startbutt = document.getElementById("startbutt");
var timetracker = (questions.length * 15);
var timer = document.getElementById("timer")
var highscores = document.getElementById("high-scores")
var questcount = -1;
var initials
var correctanswer



function callquest() {
    questcount++;
correctanswer=questions[questions.length].answer
    

}