// Quiz script
// ********* Test box on load up *********************
var testContainer = $('#test-box');
// creating <tag> variables for the first step when page loads
var title = testContainer.append('<h1 id="title">Welcome to CodeQuiz!</h1>');
var description = testContainer.append('<h5 id="description">Here you will see how you are doing in the class and can compare scores with other classmates</h5>');
var userName = testContainer.append('<input id="name-input" type = "text" placeholder="Enter your name" >');
var startBTN = testContainer.append('<br><button type = "submit" class="btn btn-primary allBtns" id="start-BTN">Click to start</button>');
var questionsLeft = $('#questions-left');
var question = $('#question');
var choiceA = $('#choiceA');
var choiceB = $('#choiceB');
var choiceC = $('#choiceC');
var congratsMessage = $('#congrats');
var score = $('#score')

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
$('#start-BTN').on('click', function () {
    // need to log name to local storage and keep for end of quiz
    var getName = $("#name-input");
    localStorage.setItem("name", getName.val());
    var savedName = localStorage.getItem("name");
    console.log(savedName);
    // need to start timer
    changeColor();
    timeLeft();
    // need to clear test div and add questions and answer butns
    hideItems();
    // switch questionsLeft to show how many questions are left
    questionLeft();
    // start displaying answer buttons when quiz starts
    renderQuestion();
    $('#question-box').css({ 'display': 'block' });
})

// adding function to hide the first section
function hideItems() {
    $('#title').hide();
    $('#description').hide();
    $('#name-input').hide();
    $('#sart-BTN').hide();
}
// changing color of the timer to red
function changeColor() {
    $('#timer').css({ "color": "#FC4349" });
}
// change questionsLeft to display how many are left function
function questionLeft() {
    $('#questions-left').text('You have' + ' ' + questionsThatAreLeft + ' ' + 'questions left');
}
// ********* objects for questions *********************
var questions = [
    {
        question: 'What syntax is used when creating a variable?',
        answerA: 'start myVariable = "..."',
        answerB: 'var myVariable = "..."',
        answerC: 'constant myVariable = "..."',
        correct: 'B'
    },
    {
        question: 'What is the moon ',
        answerA: 'wrong',
        answerB: 'wrong',
        answerC: 'correct',
        correct: 'C'
    },
    {
        question: 'What is the cow ',
        answerA: 'correct',
        answerB: 'wrong',
        answerC: 'wrong',
        correct: 'A'
    },
    {
        question: 'What is the dog ',
        answerA: 'correct',
        answerB: 'wrong',
        answerC: 'wrong',
        correct: 'A'
    },
    {
        question: 'What is the sheep ',
        answerA: 'wrong',
        answerB: 'wrong',
        answerC: 'correct',
        correct: 'C'
    },
    {
        question: 'What is the land',
        answerA: 'wrong',
        answerB: 'correct',
        answerC: 'wrong',
        correct: 'B'
    },
    {
        question: 'What is the boondocks ',
        answerA: 'wrong',
        answerB: 'correct',
        answerC: 'wrong',
        correct: 'B'
    },
    {
        question: 'What is the circle ',
        answerA: 'wrong',
        answerB: 'correct',
        answerC: 'wrong',
        correct: 'C'
    },
    {
        question: 'What is the freddy ',
        answerA: 'wrong',
        answerB: 'wrong',
        answerC: 'correct',
        correct: 'C'
    },
    {
        question: 'What is the clock ',
        answerA: 'correct',
        answerB: 'wrong',
        answerC: 'wrong',
        correct: 'A'
    },

]

// creating variables for this use
var lastquestion = questions.length - 1;
var runningQuestion = 0;

// render it to the page
function renderQuestion() {
    var q = questions[runningQuestion];
    question.text(q.question);
    choiceA.text(q.answerA);
    choiceB.text(q.answerB);
    choiceC.text(q.answerC);
};
// render the progress number
var count = 0;
// count is for the questions you get correct it will be added to the score variable text
var questionsThatAreLeft = 10;

// check if answer was correct
function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        count++;
        // questions left goes down 
        questionsThatAreLeft--;
        //need to make it go down in the text
        questionLeft();
        secondsLeft += 10;
        console.log('working');
        //need to make the question switch now
        if (runningQuestion < lastquestion) {
            runningQuestion++;
            renderQuestion();
        }
        endQuiz();
    } else {
        // need to switch questions when answer is wrong too
        if (runningQuestion < lastquestion) {
            runningQuestion++;
            renderQuestion();
        }
        questionsThatAreLeft--;
        //need to make it go down in the text
        questionLeft();
        // time reduced by 5 seconds
        secondsLeft -= 5;
        console.log('not working');
        endQuiz();
    }

}
// end quiz
function endQuiz() {
    if (count === 10 || secondsLeft === 0 || questionsThatAreLeft === 0) {
        // need to hide the question div
        $('#question-box').css({ 'display': 'none' });
        //need to show the score-card
        $('#score-card').css({ 'display': 'block' });
        // need to stop and reset timer

    }
}
