var xhttp = new XMLHttpRequest();
var url = https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple;
$(document).ready(function () {

  $("#game-content").hide();
  $("#result-wrapper").hide();
  $("#start-game-btn").on("click", game);
  console.log("this is a test");
},

function game() {
// Make a call to the API to retrieve all of the quiz data

  xhttp.open("GET", "demo_get.asp", true);
  xhttp.send();

// Use the quiz data to load the question area and the answer area

// Need button to submit game answers that will check to see what is correct

// Show the results of the quiz and offer a restart of the game


}


var questions = ["Who picked a peck of pickled pepper?", "What colors are dandelions?", "How many holes are there on a standard golf course?", "test"];
var a1 = ["pick1", "Peter Piper", "Peter Parker", "pick4"];
var c = "here is the correct answer";



//Create answer buttons
function renderAnswers() {
  for (let w = 0; w < a1.length; w++) {
    const emlement = a1.length;
    $("#answerboxes1").append(a1[w]);
  }
}

function showQuestions() {
  $("#questions1").append(questions[0]);
  $("#questions2").append(questions[1]);
  $("#questions3").append(questions[2]);
  $("#questions4").append(questions[3]);
  console.log("test " + questions[1]);
}

function run() {
  $("#game-content").show();
  $("#open-message").hide();
  renderAnswers();
  showQuestions();
  timer();
  console.log("this is a test");
}

})

var number = 10;
function timer() {
  intervalId = setInterval(decrement, 1000);
  function decrement() {
    number--;
    console.log("test for timer" + number);
    $("#timeclock").html("<h2>" + number + "</h2>");
  }
}

function stop() {
  clearInterval(intervalId);
}

if (number === 0) {
  stop();
  alert("Time Up!");
}


// $("#stop").on("click", stop);
// for(var i=0; i<questions.length;i++){

    //   var wrap = $("<div>")

    //   var questionName=  $("<h3>").text(questions[i].q);
    //      $("#questions").append(questionName);

    // }
    // function stop() {
    //   clearInterval(intervalId);
    // }
