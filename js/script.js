
const questionText = document.querySelector('.question-text');

const optionBox = document.querySelector('.options-group');

const currentQuestionNumber = document.querySelector('.current-question-number');
const correctAnswers = document.querySelector('.correct-answers')
const nextQuestionButton = document.querySelector('.next');
let questionIndex = 0;  //let keyword
let score = 0;
let number = 0;

// question, option and answer section
// Array of objects


appResources = [
  {
    questions: 'What does HTML stand for',
    options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyper and Text Markup Language', 'Hyper Test Mark Language'],
    answers: 0,
  },
  {
    questions: 'Who is making the Web standards',
    options: ['Google', 'Microsoft', 'The World Wide Web Consortium', 'Mozilla'],
    answers: 2,
  },
  {
    questions: 'What is the correct HTML element for the largest heading',
    options: ['head', 'heading', 'h1', 'h6'],
    answers: 3,
  },
  {
    questions: 'What is the correct HTML element for inserting a line break',
    options: ['br', 'lb', 'break', 'hr'],
    answers: 0,
  },
  {
    questions: 'What is the correct HTML for adding a background color',
    options: ['body style="background-color:yellow;"', 'background yellow </background> ', 'body bg="yellow"', 'none of the above'],
    answers: 0,
  },
];



function load(){
  number++;
  questionText.innerHTML = appResources[questionIndex].questions;
  displayOptions();
  scoreBoard();
  currentQuestionNumber.innerHTML = number + '/' + appResources.length;
}

function displayOptions(){
  optionBox.innerHTML = "";
  animationDelay = 0.2;
  for(var i = 0; i< appResources[questionIndex].options.length; i++){
    const option = document.createElement('div');
    option.innerHTML = appResources[questionIndex].options[i];
    option.classList.add('options-list');
    option.id = i;
    animationDelay = animationDelay + 0.2;
    option.style.animationDelay = animationDelay + 's';
    option.setAttribute('onclick', 'checkAnswer(this)');
    optionBox.appendChild(option);
  }
}


function checkAnswer(element){
  const id = element.id;
  if(id==appResources[questionIndex].answers){
    element.classList.add('correct');
    score++;
  }
  else{
    element.classList.add('wrong');
  }
  disableOptions();
  showNextQuestionButton();
  scoreBoard();
}

function disableOptions(){
  for(let i=0; i<optionBox.children.length; i++){
    optionBox.children[i].classList.add('answered-already')
    //or optionBox.children[i].removeAttribute['onclick'];
  }
}

function showNextQuestionButton(){
  nextQuestionButton.classList.add('show');
}

function hideNextQuestionButton(){
  nextQuestionButton.classList.remove('show');
}

function scoreBoard(){
  correctAnswers.innerHTML = score;
}

nextQuestionButton.addEventListener('click', nextQuestion);

function nextQuestion(){
  questionIndex++;
  load();
  hideNextQuestionButton();

}
window.onload=()=>{
  load();
}
