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
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        });
}

// Removes the default options shown 
function resetState(){
    nextButton.style.display = "none";
    while (answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from (answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
        });
        nextButton.style.display = "block" ;
}


function showScore(){
    resetState();
    questionElement.innerHTML = "Your score is " + score + " out of " + questions.length;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
    //nextButton.addEventListener("click", startQuiz);
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});

startQuiz();
