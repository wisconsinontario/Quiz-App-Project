const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []; 


let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "what is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script> href = 'xxx.js'>",
        choice2: "<script name = 'xxx.js'>",
        choice3: "<script sr = 'xxx.js'>",
        choice4: "<script file = 'xxx.js'>",
        answer: 3
    },
    {
        question: "How do you write 'Hello world' in an alert box?",
        choice1: "msgBox('Hello world');",
        choice2: "alertBox('Hello world');",
        choice3: "msg('Hello world');",
        choice4: "alert('Hello world');",
        answer: 4
    }
];

//constants

