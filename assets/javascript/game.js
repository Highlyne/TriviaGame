console.log("this is a test");

    questions =[{q:"Here is a questions",
    a:["pick1", "pick2", "pick3", "pick4"],
    c:"here is the correct answer"},
{q:"Here is a questions",
a:"here is some answer choices",
c:"here is the correct answer"}]
    
    
    for(var i=0; i<questions.length;i++){

      var wrap = $("<div>")

      var questionName=  $("<h3>").text(questions[i].q);
         $("#questions").append(questionName);

    }



    var number = 30;
        //  Variable that will hold our interval ID when the run function is executed
        var intervalId;

        $("#stop").on("click", stop);
        $("#resume").on("click", run);
    
        //  The run function sets an interval that runs a decrement function every second
        function run() {
          intervalId = setInterval(decrement, 1000);
          document.querySelector('#questions1a').innerHTML = questions[0].q1;
          document.querySelector('#anw1').innerHTML = questions[0].a1[0];
          document.querySelector('#anw2').innerHTML = questions[0].a1[1];
          document.querySelector('#anw3').innerHTML = questions[0].a1[2];
          document.querySelector('#anw4').innerHTML = questions[0].a1[3];
          console.log("lookig for questions");
        }
        function decrement() {
          number--;
    
          //  Show the countdow of the timer created by the run function
          $("#timeclock").html("<h2>" + number + "</h2>");

          //  Once number hits zero...
          if (number === 0) {
    
            //  ...run the stop function.
            stop();
    
            //  Alert the user that time is up.
            alert("Time Up!");
          }
        }
    
        //  The stop function
        function stop() {
    
          //  Clears our intervalId
          //  We just pass the name of the interval
          //  to the clearInterval function.
          clearInterval(intervalId);
        }
    
        //  Execute the run function.
        run();

   

        