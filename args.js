// shows that you can pass more args into a function than exist in the function definition
// this is much different than c++
(function(){
    "use strict";
    
       function myConcat(separator) {
     var result = ''; // initialize list
     var i;
     // iterate through arguments
     for (i = 1; i < arguments.length; i++) {
        result += arguments[i] + separator;
     }
     return result;
  }
    
    // returns "red, orange, blue, "
  myConcat(', ', 'red', 'orange', 'blue');
  
  // returns "elephant; giraffe; lion; cheetah; "
  myConcat('; ', 'elephant', 'giraffe', 'lion', 'cheetah');
  
  // returns "sage. basil. oregano. pepper. parsley. "
  myConcat('. ', 'sage', 'basil', 'oregano', 'pepper', 'parsley');
  })();