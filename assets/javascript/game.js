console.log("this is a test");
    //  Interval Demonstration
    //  Set our number counter to 100.
    questions =[{q1:"Here is a questions",
    a1:"here is some answer choices",
    c1:"here is the correct answer"},
{q2:"Here is a questions",
a2:"here is some answer choices",
c2:"here is the correct answer"}]
    
    
    var number = 30;
    
        //  Variable that will hold our interval ID when we execute
        //  the "run" function
        var intervalId;
    
        //  When the stop button gets clicked, run the stop function.
        $("#stop").on("click", stop);
    
        //  When the resume button gets clicked, execute the run function.
        $("#resume").on("click", run);
    
        //  The run function sets an interval
        //  that runs the decrement function once a second.
        function run() {
          intervalId = setInterval(decrement, 1000);
          $("#questions").data("Hello World" + questions[0].q1);
          console.log("lookig for questions");
        }
        function decrement() {
          number--;
    
          //  Show the number in the #show-number tag.
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

        questions =[{q1:"Here is a questions",
                    a1:"here is some answer choices",
                    c1:"here is the correct answer"},
                {q2:"Here is a questions",
                a2:"here is some answer choices",
                c2:"here is the correct answer"}]

        