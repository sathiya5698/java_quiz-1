// Set the questions

const questions = [
    {
        questions : "What is the difference between == and equals() in String class",
        answers : [
            {
                text : "a) == compares references; equals() compares values", correct : true
            },
            {
                text : "b) Both compare references", correct : false
            },
            {
                text : "c) Both compare values", correct : false
            },
            {
                text : "d) == compares values; equals() compares references", correct : false
            },
        ]
    },
    {
        questions : "What are the major differences between HashMap and TreeMap?",
        answers : [
            {
                text : "a) HashMap is synchronized; TreeMap is not", correct : false
            },
            {
                text : "b) HashMap maintains insertion order; TreeMap does not", correct : false
            },
            {
                text : "c) HashMap is unordered; TreeMap maintains natural order", correct : true
            },
            {
                text : "d) HashMap uses a binary search tree; TreeMap uses hash codes", correct : false
            },
        ]
    },
    {
        questions : "Explain how garbage collection works in Java. Can you manually trigger it?",
        answers : [
            {
                text : "a) Garbage collection is manual, and you can trigger it using System.runGC()", correct : false
            },
            {
                text : "b) Garbage collection is automatic; you can suggest it using System.gc()", correct : true
            },
            {
                text : "c) Java does not have garbage collection", correct : false
            },
            {
                text : "d) Garbage collection is triggered by System.clean()", correct : false
            },
        ]
    },
    {
        questions : "What is the purpose of the transient keyword in Java?",
        answers : [
            {
                text : "a) It marks variables to be synchronized", correct : false
            },
            {
                text : "b) It prevents variables from being serialized", correct : true
            },
            {
                text : "c) It marks methods to be final", correct : false
            },
            {
                text : "d) It allows variables to be inherited by subclasses", correct : false
            },
        ]
    },
    {
        questions : "What is the difference between an interface and an abstract class in Java?",
        answers : [
            {
                text : "a) Abstract classes cannot have constructors; interfaces can", correct : false
            },
            {
                text : "b) Abstract classes can have method implementations; interfaces cannot(before Java 8)", correct : true
            },
            {
                text : "c) Interfaces can have instance variables; abstract classes cannot", correct : false
            },
            {
                text : "d) Abstract classes must be implemented by the class; interfaces must not", correct : false
            },
        ]
    },
    {
        questions : "Which of the following is a marker interface in Java?",
        answers : [
            {
                text : "a) Serializable", correct : false
            },
            {
                text : "b) Cloneable", correct : false
            },
            {
                text : "c) RandomAccess", correct : false
            },
            {
                text : "d) All of the above", correct : true
            },
        ]
    },
    {
        questions : "Which class does not override the equals() and hashCode() methods, inheriting them directly from Object?",
        answers : [
            {
                text : "a) String", correct : false
            },
            {
                text : "b) StringBuffer", correct : true
            },
            {
                text : "c) Integer", correct : false
            },
            {
                text : "d) ArrayList", correct : false
            },
        ]
    },
    {
        questions : "What is the purpose of the volatile keyword in Java?",
        answers : [
            {
                text : "a) It makes a variable read-only", correct : false
            },
            {
                text : "b) It ensures visibility of changes to variables across threads", correct : true
            },
            {
                text : "c) It allows a variable to be accessed by only one thread at a time", correct : false
            },
            {
                text : "d) It prevents a class from being instantiated", correct : false
            },
        ]
    },
    {
        questions : "What is the default value of an instance variable in Java?",
        answers : [
            {
                text : "a) null", correct : false
            },
            {
                text : "b) 0", correct : false
            },
            {
                text : "c) Depends on the data type", correct : true
            },
            {
                text : "d) Undefined", correct : false
            },
        ]
    },
    {
        questions : "Which of the following is not a valid access modifier in Java?",
        answers : [
            {
                text : "a) private", correct : false
            },
            {
                text : "b) protected", correct : false
            },
            {
                text : "c) final", correct : true
            },
            {
                text : "d) public", correct : false
            },
        ]
    }
];

// Getting all the element
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

// Create variable to store question index and score.
let currentQuestionIndex = 0 ;
let score = 0;

// Function for start Quiz
function startQuiz()
{
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function for Show Question
function showQuestion()
{
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo+". "+currentQuestion.questions;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct)
        {
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState()
{
    nextButton.style.display = "none";
    while(answerButton.firstChild)
    {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e)
{
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect)
    {
        selectedBtn.classList.add("correct");
        score++;
    }
    else
    {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true")
        {
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    nextButton.style.display = "block";
}

function showScore()
{
    resetState();
    if(score>7)
    {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Well done!`;
        let img = document.createElement("img");
        img.setAttribute('src','123.gif');
        img.setAttribute("alt", "Well done image");
        img.setAttribute("width", "100");
        questionElement.appendChild(img);
    }
    else if(score>=5)
    {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Good!`;
        let img = document.createElement("img");
        img.setAttribute('src','123.gif');
        img.setAttribute("alt", "Well done image");
        img.setAttribute("width", "100");
        questionElement.appendChild(img);
    }

    else
    {
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}. Keep trying!`;
        let img = document.createElement("img");
        img.setAttribute('src','1234.png');
        img.setAttribute("alt", "Well done image");
        img.setAttribute("width", "100");
        questionElement.appendChild(img);
    }

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton()
{
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length)
    {
        showQuestion();
    }
    else
    {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length)
    {
        handleNextButton();
    }
    else
    {
        startQuiz();
    }
});

startQuiz();