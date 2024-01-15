// Setting up questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Paris", correct: true},
            { text: "London", correct: false},
            { text: "Berlin", correct: false},
            { text: "Rome", correct: false},
        ]
    }, 
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Mars", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
            { text: "Neptune", correct: false},
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Ag", correct: false},
            { text: "Au", correct: true},
            { text: "Cu", correct: false},
            { text: "Fe", correct: false},
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: [
            { text: "Mount Everest", correct: true},
            { text: "K2", correct: false},
            { text: "Kangchenjunga", correct: false},
            { text: "Makalu", correct: false},
        ]
    }
];

// Fetching the elements from the HTML file
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}


function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        });
}


startQuiz();
