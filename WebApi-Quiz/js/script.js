
var questions = [{
    question: "1. Inside which HTML element do we put the Javascript?",
    choices: ["script", "scripting", "javascript", "Js"],
    correctAnswer: 1
}, {
    question: "2. Where is the corrent place to insert a Javascript?",
    choices: ["The body section", "The head section", "Anywhere", "The very top of the page"],
    correctAnswer: 1
}, {
    question: "3. How do you create a function in Javascript?",
    choices: ["function myFunction()", "function:myFunction()", "function = myFunction", "FUNCTION MYFUNCION!!"],
    correctAnswer: 2
}, {
    question: "4. How do you add a comment in Javascript?",
    choices: ["!-- --", "//", "**", "<<"],
    correctAnswer: 1
}, {
    question: "5. How do you add a comment in Javascript?",
    choices: ["//This is a comment", "'This is a comment'", "<!--This is a comment-->", "This is a comment."],
    correctAnswer: 1
},{
	question: "6. Which of these will return data from an API?",
    choices: ["POST", "GET", "FETCH", "GET and FETCH"],
    correctAnswer: 3
}];

function displayCurrentQuestion() {
	if(c == 90) { c = 90; timedCount(); }
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
