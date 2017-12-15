// Once again I started out with high hopes for my homework.  I thought I understood
// and had a game plan for game.  But now I have am having trouble sortting our my javascript page.
// I am usure about the placement of all of the information that belongs on the page.
// I get that variables should be placed at the top of the page and then the functions.
// But I don't fully understand the order of the functions.  Ie: is the run function placed on the page first,
// then the stop function?  Where does the timer fall in place?  Also, what all should be included in the run func.?
//I think it needs to have, start my timer, display my questions & answers.  So does that mean the timer and the display
// questions and answer functions should be defined below the start function?
// All do I use .append or docuent.querySelector to target a div element to make the Qs& As display?
// Finally, I don't know how to connect the check box the user selects with the correct answer so that I can use
// a if/else statement to show the answer is correct or wrong.  This week feels like another epic fail.





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
    console.log("this is a test");
    }
  
})


      
// $("#stop").on("click", stop);
// for(var i=0; i<questions.length;i++){

    //   var wrap = $("<div>")

    //   var questionName=  $("<h3>").text(questions[i].q);
    //      $("#questions").append(questionName);

    // }
    // function stop() {
    //   clearInterval(intervalId);
    // }


    // var number = 30;
    //     //  Variable that will hold our interval ID when the run function is executed
    //     var intervalId;

    //    
    //     
    
    //     //  The run function sets an interval that runs a decrement function every second
    //     
    //       document.querySelector('#questions1').innerHTML = questions[0].q;
    //       document.querySelector('#anw1').innerHTML = questions[0].a[0];
    //       document.querySelector('#anw2').innerHTML = questions[0].a[1];
    //       document.querySelector('#anw3').innerHTML = questions[0].a[2];
    //       document.querySelector('#anw4').innerHTML = questions[0].a[3];
    //       console.log("looking for questions");
    //     }
        
    //     function time() {
    //       intervalId = setInterval(decrement, 1000);
    //     function decrement() {
    //       number--;
    //     };
    //       //  Show the countdow of the timer created by the run function
    //       $("#timeclock").html("<h2>" + number + "</h2>");
    //       if (number === 0) {
    //         stop();
    //         alert("Time Up!");
    //       
