const quizData =
[
    {
        question: "1. What is an essential component of a dog's diet?",
        A: "Lettuce",
        B: "Grapes",
        C: "Chocolate",
        D: "Meat",
        correct: "D",
    },
    {
        question: "2. What grooming activity is important for a cat's health?",
        A: "Trimming their nails",
        B: "Giving them a bath every day",
        C: "Brushing their teeth",
        D: "Feeding them garlic",
        correct: "A",
    },
    {
        question: "3. What is a suitable flooring material for a rabbit's cage?",
        A: "Sand",
        B: "Gravel",
        C: "Cedar shavings",
        D: "Hay",
        correct: "D",
    },
    {
        question: "4. Which of the following is NOT a safe toy for a pet bird?",
        A: "Mirrors",
        B: "Ropes",
        C: "Small bells with clappers",
        D: "Non-toxic wood blocks",
        correct: "C",
    },
    {
        question: "5. What is an important aspect of responsible pet ownership?",
        A: "Keeping pets outdoors at all times",
        B: "Providing regular veterinary care",
        C: "Feeding them only once a week",
        D: "Leaving them alone for long periods",
        correct: "B",
    },
];

const quiz = document.getElementById("Quiz");
const answerElements = document.querySelectorAll(".Answer");
const questionElement = document.getElementById("Question");
const A_Text = document.getElementById("A_Text");
const B_Text = document.getElementById("B_Text");
const C_Text = document.getElementById("C_Text");
const D_Text = document.getElementById("D_Text");
const submitButton = document.getElementById("Submit")

let currentQuestion = 0;
let Score = 0;


const deselectAnswers = () =>
{
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () =>
{
    let Answer;
    answerElements.forEach((answerElement) =>
    {
        if (answerElement.checked)
        Answer = answerElement.id;
    });
    return Answer;
};

const loadQuiz = () =>
{
    deselectAnswers();
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    A_Text.innerText = currentQuizData.A;
    B_Text.innerText = currentQuizData.B;
    C_Text.innerText = currentQuizData.C;
    D_Text.innerText = currentQuizData.D;
};

loadQuiz();

submitButton.addEventListener("click", () =>
{
    const answer = getSelected();
    if (answer)
    {
        if (answer === quizData[currentQuestion].correct) Score ++;
        currentQuestion ++;
        if (currentQuestion < quizData.length) loadQuiz();
        else
        {
            quiz.innerHTML = `
            <h2>You answered ${Score}/${quizData.length} questions correctly.</h2>
            <button class="Quiz-Submit" onclick="history.go(0)">Play Again</button></>
            `
        }
    }
    });