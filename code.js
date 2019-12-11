// Quiz script
// ********* Test box on load up *********************
var testContainer = $('#test-box');
// Adding variables for the first step when page loads
var title = testContainer.append('<h1>Welcome to CodeQuiz!</h1>');
var description = testContainer.append('<h5>Here you will see how you are doing in the class and can compare scores with other classmates</h5>');
var userName = testContainer.append('<input id="name-input" type = "text" placeholder="Enter your name" >');
var startBTN = testContainer.append('<br><button type = "submit" class="btn btn-primary" id="sart-BTN">Click to start</button>');
var questionsLeft = $('#questions-left');


// ********* Timer Script *********************
var secondsLeft = 30;
function timeLeft() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        $('#timer').html(secondsLeft);
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);  //milliseconds
}
//now "on click" for inputting name and storing to local storage
$('#sart-BTN').on('click', function () {
    // need to log name to local storage
    var saveName = $("#name-input");
    localStorage.setItem("name", saveName.val());
    var getName = localStorage.getItem("name");
    console.log(getName);
    // need to start timer
    timeLeft();
    // need to clear test div and add questions and answer butns
    // switch questionsLeft to show how many questions are left


})

// ********* objects for questions *********************


var questions = {
    qOne: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qTwo: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qThree: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qFour: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qFive: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qSix: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qSeven: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qEight: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qNine: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    },
    qTen: {
        question: 'What is the ',
        answer: ['answer 1', 'answer 2', 'answer 3'],
        correct: 'answer 1'
    }
}

