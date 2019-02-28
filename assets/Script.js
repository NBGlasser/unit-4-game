        var wins = 0;
        var losses = 0;
        var points = 0;
        var target = Math.floor(Math.random() * 40) + 10;
        var button1 = Math.floor(Math.random() * 10) + 1;
        var button2 = Math.floor(Math.random() * 10) + 1;
        var button3 = Math.floor(Math.random() * 10) + 1;
        var button4 = Math.floor(Math.random() * 10) + 1;
        

        $(document).ready(function() {

          
          

            

            $("#target").text(target);
            $("#wins-text").text(wins);
            $("#losses-text").text(losses);
            
        
          $("#button-1").on("click", function() {
            
            points = (points + button1);
            $("#you-points").text(points);
          });

          $("#button-2").on("click", function() {
            
            points = (points + button2);
            $("#you-points").text(points);
          });

          $("#button-3").on("click", function() {
            
            points = (points + button3);
            $("#you-points").text(points);
          });

          $("#button-4").on("click", function() {
            
            points = (points + button4);
            $("#you-points").text(points);
            
          });
          $("img").on("click", function(){
          if(points === target){
              wins++;
              $("#wins-text").text(wins);
              points = 0;
              $("#you-points").text(points);
              target = Math.floor(Math.random() * 40) + 10;
              $("#target").text(target);
              button1 = Math.floor(Math.random() * 10) + 1;
              button2 = Math.floor(Math.random() * 10) + 1;
              button3 = Math.floor(Math.random() * 10) + 1;
              button4 = Math.floor(Math.random() * 10) + 1;
          }
          else if(points > target){
              losses++;
              $("#losses-text").text(losses);
              points = 0;
              $("#you-points").text(points);
              target = Math.floor(Math.random() * 40) + 10;
              $("#target").text(target);
              button1 = Math.floor(Math.random() * 10) + 1;
              button2 = Math.floor(Math.random() * 10) + 1;
              button3 = Math.floor(Math.random() * 10) + 1;
              button4 = Math.floor(Math.random() * 10) + 1;
          }
          
          })
        });