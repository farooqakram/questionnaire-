(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];
        

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"><b> ${currentQuestion.question}</b> </div>
            <div class="answers"><b> ${answers.join("")} </b></div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "I consider myself more",
      answers: {
        a: "Spiritual",
        b: "Religious"

      },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Conservative",
        b: "Liberal"

      },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Traditional",
        b: "Progressive"
      },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Dedicated",
        b: "Relaxed"
        },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Optimistic",
        b: "Realistic"

      },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Simple",
        b: "Stylish"

      },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Forgiving",
        b: "Fair"
        },
      correctAnswer: ""
    },

    {
      question: "I consider myself more",
      answers: {
        a: "Social",
        b: "Reserved"

      },
      correctAnswer: ""
    },

    {
      question: "I spend time more so with",
      answers: {
        a: "Friends",
        b: "Family"

      },
      correctAnswer: ""
    },

    {
      question: "My favourite season is",
      answers: {
        a: "Spring",
        b: "Summer",
        c: "Autumn",
        d: "Winter"
      },
      correctAnswer: ""
    },

    {
      question: "My confidence is",
      answers: {
        a: "Low",
        b: "Medium",
        c: "High"
      },
      correctAnswer: ""
    },

    {
      question: "I am more",
      answers: {
        a: "Loyal",
        b: "Adventurous",
        c: "Emotional",
        d: "Positive"
      },
      correctAnswer: ""
    },

    {
      question: "I am more",
      answers: {
        a: "Practical",
        b: "Risk taker",
        c: "Productive",
        d: "Nurturing"
      },
      correctAnswer: ""
    },

    {
      question: "I am more",
      answers: {
        a: "Logical",
        b: "Sensible",
        c: "Good listener",
        d: "Respectful",
      },
      correctAnswer: ""
    },

    {
      question: "I am more",
      answers: {
        a: "Lighthearted",
        b: "Influential",
        c: "Sympathetic",
        d: "Just"
      },
      correctAnswer: ""
    },

    {
      question: "I am more",
      answers: {
        a: "Witty",
        b: "Punctual",
        c: "Accepting",
        d: "Intimate"
      },
      correctAnswer: ""
    },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
