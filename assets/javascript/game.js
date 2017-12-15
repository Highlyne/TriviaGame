//I used the added time to work on getting my start
//game button to work and switch to the questions & answers
//I have my time clock running... but it doesn't stop.
//I need to find a way to display the answer choices and 
// mark the correct answer so that when the user clicks on
// the correct checkbox the computer will know to alert them
// how many questions are correct and how many are wrong.
// I also need to get the reset button to clear all the variables and 
// start the time clock again.




$(document).ready(function() {

$("#game-content").hide();
$("#result-wrapper").hide();
$("#start-game-btn").on("click", run);
console.log("this is a test");

var questions =["Who picked a peck of pickled pepper?", "What colors are dandelions?", "How many holes are there on a standard golf course?", "test"];
var a1 =["pick1", "Peter Piper", "Peter Parker", "pick4"];
var c ="here is the correct answer";

  // {q:"What colors are dandelions?",
  // a:["White", "Brown", "Pink", "Yellow"],
  // c:"White"},

  // {q:"How many holes are there on a standard golf course?",
  // a:["13", "20", "16", "18"],
  // c:"18"}];

    //Create answer buttons
  function renderAnswers() {
    for (let w = 0; w < a1.length; w++) {
      const emlement= a1.length;
    $("#answerboxes1").append(a1[w]);
    }}
  
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

var number =10;
  function timer() {
        intervalId = setInterval(decrement, 1000);
      function decrement() {
        number--;
        console.log("test for timer" + number);
    $("#timeclock").html("<h2>" + number + "</h2>");}
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
