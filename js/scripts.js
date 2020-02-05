// Business logic





// Interface
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    
    const vowelCheck = function() {
      const input = $("#string").val().toLowerCase();
      const vowels = ['a','e','i','o','u'];
      if(!isNaN(input)){
        console.log('Error: please input a string!');
        return;
      }
      else if($.inArray(input[0], vowels) !== -1 && input.length === 1) {
        console.log(`${input}ay`);
      }
      else if($.inArray(input[0], vowels) !== -1) {
        console.log(`${input}way`);
      }
      else{
        console.log('not a vowel');
        // for(let i = 0; i<input.length-1; i++){
        //   (input.pop(input[0]))
        //   console.log(input);
        // }
        
          }

          // input.push(letter);
        // console.log(`${input}ay`);
      







    //   else if(input.includes('qu')) {
    //   const index = input.indexOf('q');
    //   const sliced = input.slice(index, index+1);
    //   console.log(sliced);
    //   // console.log('qu!');  
    //   console.log(input.indexOf('q'));
    // }
  };
        vowelCheck();

        event.preventDefault();

        //Result text
      
    
});
});