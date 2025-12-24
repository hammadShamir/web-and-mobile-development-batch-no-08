const startBtn = document.getElementById('startbtn');
const stopQuiz = document.getElementById('stopQuiz');
const nextBtn = document.getElementById('nextBtn');
const quizForm = document.getElementById('quizForm');
const questionHeading = document.getElementById('question');
const list = document.getElementById('list');
const li = document.getElementsByTagName('li');
let step = 0;

quizForm.style.display = 'none'
const quizzData = [
    {
        question: "What does HTML stand for?",
        answers: [
            { id: 1, option: "Hyper Text Markup Language" },
            { id: 2, option: "High Text Machine Language" },
            { id: 3, option: "Hyperlinks and Text Markup Language" },
            { id: 4, option: "Home Tool Markup Language" }
        ],
        correctAnswer: {
            id: 1,
            option: "Hyper Text Markup Language",
        }
    },
    {
        question: "Which language is used for styling web pages?",
        answers: [
            { id: 1, option: "HTML" },
            { id: 2, option: "JQuery" },
            { id: 3, option: "CSS" },
            { id: 4, option: "XML" }
        ],
        correctAnswer: {
            id: 3,
            option: "CSS",
        }
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: [
            { id: 1, option: "var" },
            { id: 2, option: "int" },
            { id: 3, option: "string" },
            { id: 4, option: "float" }
        ],
        correctAnswer: {
            id: 1,
            option: "var",
        }
    }
];
localStorage.setItem('quizzz', JSON.stringify(quizzData));


const data = localStorage.getItem('quizzz');
const convertedData = JSON.parse(data);


startBtn.addEventListener('click', () => {
    const { question, answers } = convertedData[step]
    questionHeading.textContent = question
    answers.map((answer) => {
        console.log(answer)
        const item = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = answer.option;
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'option')
        list.appendChild(item)
        item.append(input, span)
    })
    startBtn.style.display = 'none';
    quizForm.style.display = 'block'
})
stopQuiz.addEventListener('click', () => {
    startBtn.style.display = 'block';
    quizForm.style.display = 'none'
    for (let index = 0; index < li.length; index++) {
        const element = li[index];
        element.remove()
    }
})
nextBtn.addEventListener('click', () => {
    if (step === 2) return;
    ++step;
    const { question, answers } = convertedData[step]
    questionHeading.textContent = question
    
    
    answers.map((answer,i) => {
        li[i].remove()
        const item = document.createElement('li')
        const span = document.createElement('span')
        span.textContent = answer.option;
        const input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.setAttribute('name', 'option')
        list.appendChild(item)
        item.append(input, span)
    })
})