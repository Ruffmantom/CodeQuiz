
// creating <tag> variables for the first step when page loads
var userName = $('#name-input');
var startBTN = $('#start-BTN');
var questionsLeft = $('#questions-left');
var question = $('#question');
var choiceA = $('#choiceA');
var choiceB = $('#choiceB');
var choiceC = $('#choiceC');
var congratsMessage = $('#congrats');
var nameScore = $('#name-and-score');
// render the progress number
var count = 0;
// count is for the questions you get correct it will be added to the score variable text
var questionsThatAreLeft = 10;
// ********* Timer Script *********************
var secondsLeft = 30;
function timeLeft() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        $('#timer').text(secondsLeft);
        if (secondsLeft <= 0) {
            endQuiz();
            clearInterval(timerInterval);
            console.log('not clearing interval');
        }
    }, 1000);  //milliseconds
}
// get the name from the local storage
var savedName = localStorage.getItem("name");
console.log(savedName);

//now "on click" for inputting name and storing to local storage
$('#start-BTN').on('click', function () {
    // need to log name to local storage and keep for end of quiz
    var getName = $("#name-input");
    localStorage.setItem("name", getName.val());
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
    $('#startDiv').hide();
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
        question: 'What is the common key used at the end of a line of code?',
        answerA: 'console.log("hello!").',
        answerB: 'console.log("hello!")/',
        answerC: 'console.log("hello!");',
        correct: 'C'
    },
    {
        question: 'What is the best way to submit work to gitHub after everything is added and commited?',
        answerA: 'git push',
        answerB: 'git -m push',
        answerC: 'g -u p',
        correct: 'A'
    },
    {
        question: 'var arr = [12, 46, 68, 93]; How do we return the 3rd number "68" to our console? ',
        answerA: 'console.log(arr[2]);',
        answerB: 'console.log(arr[3]);',
        answerC: 'console.log(arr(2));',
        correct: 'A'
    },
    {
        question: 'What specific type of code is this: var userName = { firstName: John, lastName: Robertson, age: 55}; ',
        answerA: 'Array',
        answerB: 'Variable',
        answerC: 'Object',
        correct: 'C'
    },
    {
        question: 'How many data types can you put in an array?',
        answerA: 'only 5',
        answerB: 'As many as you want',
        answerC: 'only as many as 10',
        correct: 'B'
    },
    {
        question: 'What goes in the quotes? for (var i = 0,"__________", i++ ){ }; ',
        answerA: '"e < arr.lengthOf"',
        answerB: '"i < arr.length"',
        answerC: '"i < arr.length()"',
        correct: 'B'
    },
    {
        question: 'What is the syntax for Jquery? ',
        answerA: '%("#my_ID")',
        answerB: '$(my_ID)',
        answerC: '$("#my_ID")',
        correct: 'C'
    },
    {
        question: 'What is the "console" in console.log()',
        answerA: 'Reader',
        answerB: 'Variable',
        answerC: 'Object',
        correct: 'C'
    },
    {
        question: 'Can you store a function inside a function and use it outside of the parent?',
        answerA: 'No you cant',
        answerB: 'Yes you can',
        answerC: 'Only if its called',
        correct: 'A'
    }

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


// check if answer was correct
function checkAnswer(answer) {
    if (answer === questions[runningQuestion].correct) {
        count++;
        console.log(count);
        nameScore.text(savedName.toUpperCase() + ' Your score was ' + count + ' out of 10');

        // questions left goes down 
        questionsThatAreLeft--;
        //need to make question count go down in the text
        questionLeft();
        // if the suer gets it right, add 10 seconds
        secondsLeft += 10;
        console.log('working');
        //need to make the question switch now
        if (runningQuestion < lastquestion) {
            runningQuestion++;
            renderQuestion();
        }
        endQuiz();
        // user grade
        if (count === 10) {
            $('#nice-job').text('Nice job! You scored great!! A+');
        } else if (count >= 7) {
            $('#nice-job').text('Dang nice job! I\'d give you a B');
        } else {
            $('#nice-job').text('Ouch.. You should totaly study more. F+');
        }
    } else {
        // need to switch questions when answer is wrong too
        if (runningQuestion < lastquestion) {
            runningQuestion++;
            renderQuestion();
        }
        questionsThatAreLeft--;
        //need to make it go down in the text
        questionLeft();
        // time reduced by 10 seconds if worng
        secondsLeft -= 10;
        console.log('not working');
        endQuiz();
    }

}
// end quiz
function endQuiz() {
    if (secondsLeft <= 0 || count === 10 || questionsThatAreLeft === 0) {
        // need to hide the question div
        $('#question-box').css({ 'display': 'none' });
        //need to show the score-card
        $('#score-card').css({ 'display': 'block' });
        // change color of progress bar
        $('#timerContainer').css({ 'background': '#FC4349' });
        // need to stop and reset timer
        $('#timer').hide();
    }
}


