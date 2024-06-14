const questions=[
    {
            question: "Who is the prime minister of india in 2024??",
            answers:[
                {
                    text:  "Pappu",correct:false},
                {   text: "Yogi-Aditynanth", correct:false},
                {text: " Shri Narendra Modi", correct: true},
                {text: "Khejriwal",correct: false},

                
            ]
    },
    {
        question:"What is the name of the World's Richest man?",
        answers:[
            {text:"Mukesh-Ambani",correct:false},
            {text:"Elon-musk",correct:true},
            {text:"Bill-gates",correct:false},
            {text:"Ratan Tata",correct:false},

        ]
    },
    {
    question:"Which Country first discovered the vaccine of corona-virus?",
    answers:[
        {text:"Russia",correct:false},
        {text:"India",correct:false},
        {text:"United-Kingdom",correct:true},
        {text:"Japan",correct:false},
    ]
    },
    {
        question:"What is the capital of France?",
        answers:[
             {text:"paris",correct:true},
             {text:"new-york",correct:false},
             {text:"vetican-city",correct:false},
             {text:"algeirs",correct:false},
            
        ]
    },
    {
        question:"Look at this series: 12, 11, 13, 12, 14, 13, … What number should come next?",
        answers:[
             {text:"11",correct:false},
             {text:"15",correct:true},
             {text:"20",correct:false},
             {text:"14",correct:false},
            
        ]
    }
];

const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;


function startquiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question;  

    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });  
}
function resetState(){
      nextButton.style.display="none";
      while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
      }


}
function selectAnswer(e){
    const selectedButton=e.target;
    const correct=selectedButton.dataset.correct == "true";
    if(correct){
        selectedButton.classList.add("correct");
        score++;
}else{
    selectedButton.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button=>{
    if(button.dataset.correct == "true"){
        button.classList.add("correct");
    }
    button.disabled=true;
});
nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play-Again";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startquiz();
    }
})

startquiz();
