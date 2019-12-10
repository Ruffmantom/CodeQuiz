// Quiz script

// ********* Timer Script *********************



// ********* Test box on load up *********************
var testContainer = $('#test-box');

// Adding variables for the first step when page loads
var title = testContainer.append('<h1>Welcome to CodeQuiz!</h1>');
var description = testContainer.append('<h5>Here you will see how you are doing in the class and can compare scores with other classmates</h5>');
var userName = testContainer.append('<input id="name-input" placeholder="Enter your name" >');
var startBTN = testContainer.append('<br><button class="btn btn-primary" id="sart-BTN">Click to start</button>');

//now "on click" for inputting name and storing to local storage
var savedName = userName.value;
localStorage.getItem('text', savedName);

startBTN.on('click', function () {
    // alert('Hello!')
    console.log(savedName);
    // if (savedName) {
    //     alert(savedName);
    // } else {
    //     alert('please enter your name');
    // }


})

