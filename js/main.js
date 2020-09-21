const allQuestion = [
    {
        question: "Яка площа України?",
        a: "453 245 км&sup2",
        b: "724 078 км&sup2",
        c: "684 501 км&sup2", 
        d: "603 628 км&sup2", 
        correct: "d"
    },
    {
        question: "Яка найпопулярніша мова програмування?",
        a: "Java",
        b: "Python",
        c: "Javascript", 
        d: "C#", 
        correct: "c"
    },
    {
        question: "Скільки материків на планеті Земля?",
        a: "4",
        b: "7",
        c: "8", 
        d: "6", 
        correct: "d"
    },
    {
        question: "Яка найвища гора світу?",
        a: "Еверест",
        b: "Канченджанґа",
        c: "Чогорі", 
        d: "Говерла", 
        correct: "a"
    },
    {
        question: "Чому дорівнює 25&sup2; ",
        a: "125",
        b: "625",
        c: "225", 
        d: "500", 
        correct: "b"
    }
]

const questionText = document.getElementById("question-text"),
aText = document.getElementById("a-text"),
bText = document.getElementById("b-text"),
cText = document.getElementById("c-text"),
dText = document.getElementById("d-text"), 
main = document.querySelector(".main-block"),
arrayCheck = document.querySelectorAll("input[name='anwers-inp']"),
buttonSubmit = document.getElementById("button");

let correctAnswer = 0;
let current = 0;

loadQuiz(allQuestion);

function deSelected(){
    arrayCheck.forEach(item=>item.checked=false)
}

function loadQuiz(arr){
    deSelected();
        questionText.innerHTML = arr[current].question;
        aText.innerHTML = arr[current].a;
        bText.innerHTML = arr[current].b;
        cText.innerHTML = arr[current].c;
        dText.innerHTML = arr[current].d;
}

buttonSubmit.addEventListener("click", function(){
    arrayCheck.forEach((item)=>{
        if(item.checked){
            if(item.id===allQuestion[current].correct){
                correctAnswer++;
            }
        }
    })

    if(current+1<allQuestion.length){
        current++;
        loadQuiz(allQuestion);
        
    }
    
    else {
        main.innerHTML = `<h2>You answered correctly at ${correctAnswer} / ${allQuestion.length} questions.</h2>
        <button onclick = "location.reload();">Reload</button> `
    }
})
