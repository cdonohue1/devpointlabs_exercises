$(document).ready(function(){
     var choices =['rock', 'paper', 'scissors'];
     var userChoice = '';
     var wins = 0;
     var loses = 0;
     var ties = 0;
     var cpuChoice = Math.random();
     console.log(cpuChoice);
        if (cpuChoice < 0.34) {
            cpuChoice = "rock";
        } else if(cpuChoice <= 0.67) {
            cpuChoice = "paper";
        } else {
            cpuChoice = "scissors";
        }

    // $('.choice').select("userChoice(this)"){
    // }
    // function userChoice(choice) {
    // }
    $('.choice').change(function() {
      userChoice = $(this).val();
      result(userChoice, cpuChoice);
    });
    // console.log("TEST");
    // $('.cpuChoice')document.console.log = cpuChoice

    //  $('.choice')(function(){ //Confused
    //   if('.choice' == 'rock'){
    //     userChoice == 'rock'
    //   };


    //  });
    //  $('.agian').click(function){

    //  });


     function result(userChoice, cpuChoice){
      var result = '';
      console.log(userChoice);
      console.log(cpuChoice);
      if(userChoice == cpuChoice) { //why not three ====? 
        result = 'Tie'; 
        ties++;
        } 
      else if(userChoice == 'rock'){

        if (cpuChoice == 'paper'){
          result = 'Lose'; //has only one =
          loses++;
         } else {
            result = 'Win'; //scissors
            wins++;
         }; 
      }
      else if(userChoice =='paper'){

        if (cpuChoice == 'scissors'){
          result = 'Lose';
          loses++; 
        } else{
          result = 'Win';
          wins++;
        };
      }
      else if(userChoice == 'scissors'){
        if (cpuChoice == 'rock'){
          result = 'Lose';
          loses++;
        } else{
          result = 'Win';
          wins++;
        };
      };
      // return result;
      alert("what hapened:" + result +", wins, "+wins+" loses, "+loses+" Ties, "+ties); 
     // $(#total).html("what hapened:" + result +", wins, "+wins+" loses, "+loses); Why this no work? 
     };
  });
//$(#results_div_id).html("the winner is "+results)//if the results div id was an id it would insert the results into that div 