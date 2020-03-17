var questions = [
    {
        question: "How far from Cleveland, Oh to San Diego, CA?",
        answers: ["500", "2366", "5000", "80"],
        correct: "2366"
        }, 
        
        {
        question: "How many states are in the US?",
        answers: ["25", "13", "50", "7"],
        correct: "50"
        }
    
        {
        question: "What is LeBron James current jersey number?",
        answers: ["14", "6", "23", "99"],
        correct: "23"
        }]

console.log(questions);

var answers= true

    var score = 0
    var highScore = [
        {
            name: "aaa",
            score: 3,
        }

    ]

    var timer = 15
    
        var inputquestions = [ 
        {
        question: "Describe your first vacation",
        answer: "Cat"
        } 
        ]
    

        const quizContainer = document.getElementById('quiz');
        const resultsContainer = document.getElementById('results');
        const submitButton = document.getElementById('submit');


function buildQuiz(){}

function showResults(){}

// display quiz 
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);


function buildQuiz(){
    // variable to store the HTML output
    const output = [];
  
    // for each question
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // variable to store the list of possible answers
        const answers = [];
  
        // for loop
        for(letter in currentQuestion.answers){
  
          // HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
  
        // Question being pushed
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // combine list to a string
    quizContainer.innerHTML = output.join('');
  }


  myQuestions.forEach( (currentQuestion, questionNumber) => { });