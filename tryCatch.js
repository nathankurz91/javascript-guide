(function(){
    "use strict";
    
//        function f() {
//     try {
//       console.log(0);
//       throw 'bogus';
//     } catch(e) {
//       console.log(1);
//       return true; // this return statement is suspended
//                    // until finally block has completed
//       console.log(2); // not reachable
//     } finally {
//       console.log(3);
//       return false; // overwrites the previous "return"
//       console.log(4); // not reachable
//     }
//     // "return false" is executed now  
//     console.log(5); // not reachable
//   }
//   console.log(f()); // 0, 1, 3, false


// this looks like the better way of handling errors...
// thought im not sure. this is basically how we do it at work but we just use booleans...
function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
      throw (new Error('The message'));
    } else {
      doSomethingToGetAJavascriptError();
    }
  }

  try {
    doSomethingErrorProne();
  } catch (e) { // now we actually use console.error()
    console.error(e.name); // logs 'Error'
    console.error(e.message); // logs 'The message' or a JavaScript error message
  }
  })();