const questions=[
    {
        question: "1. Which method can be used to select an element by its ID?",
        answers:[
        { text:"A) document.querySelectorAll()", correct:false},
        { text:"B) document.getElementsByClassName()", correct:false},
        { text:"C) document.getElementById()", correct:true},
        { text:"D) document.getElementsByTagName()", correct:false}
        ]
    },
    {
        question: "2. How do you write a single-line comment in JavaScript?",
        answers:[
        { text:"A) <-- This is a comment -->", correct:false},
        { text:"B) # This is a comment", correct:false},
        { text:"C) // This is a comment", correct:true},
        { text:"D) /* This is a comment */", correct:false}
        ]
    },
    {
        question: "3. Which keyword is used to declare a constant in JavaScript?",
        answers:[
        { text:"A) var", correct:false},
        { text:"B) const", correct:true},
        { text:"C) let", correct:false},
        { text:"D) constant", correct:false}
        ]
    },
    {
        question: "4. Which operator is used to compare both value and type?",
        answers:[
        { text:"A) ===", correct:true},
        { text:"B) ==", correct:false},
        { text:"C) =", correct:false},
        { text:"D) !=", correct:false}
        ]
    },
    {
        question: "5. Which company developed JavaScript?",
        answers:[
        { text:"A) Netscape", correct:true},
        { text:"B) Microsoft", correct:false},
        { text:"C) Sun Microsystems", correct:false},
        { text:"D) Oracle", correct:false}
        ]
    },
    {
        question: "6. What is the output of: console.log(2 + '2');",
        answers:[
        { text:"A)  4", correct:false},
        { text:"B) 22", correct:true},
        { text:"C) NaN", correct:false},
        { text:"D) 2", correct:false}
        ]
    },
    {
        question: "7. How do you define an array in JavaScript?",
        answers:[
        { text:"A)  let arr = (1,2,3)", correct:false},
        { text:"B) let arr = [1,2,3] ", correct:true},
        { text:"C) let arr = {1,2,3}", correct:false},
        { text:"D) let arr = <1,2,3>", correct:false}
        ]
    },
    {
        question: "8. Which one is NOT a JavaScript data type?",
        answers:[
        { text:"A)  String", correct:false},
        { text:"B) Number ", correct:false},
        { text:"C)  Boolean", correct:false},
        { text:"D) Character", correct:true}
        ]
    },
    {
        question: " 9.Which function is used to delay code execution?",
        answers:[
        { text:"A) setInterval()", correct:false},
        { text:"B) setDelay() ", correct:false},
        { text:"C) setTimeout() ", correct:true},
        { text:"D) wait()", correct:false}
        ]
    },
    {
        question: " 10. What is the purpose of addEventListener()",
        answers:[
        { text:"A) To define a variable", correct:false},
        { text:"B) To send HTTP requests", correct:false},
        { text:"C) To handle user events", correct:true},
        { text:"D) To update HTML content", correct:false}
        ]
    }
]
const questionElement=document.getElementById('question');
const answersButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML='Next';
   
 showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    questionElement.innerHTML=currentQuestion.question;
 
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answersButton.appendChild(button); 

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });   
}

function resetState(){
    nextButton.style.display = 'none';
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answersButton.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'; 
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        }
         else{
            showScore();   
        }

}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
     nextButton.innerHTML = 'Play Again';
     nextButton.style.display = 'block';
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        }
         else{
            startQuiz();   
        } 
});
startQuiz();  