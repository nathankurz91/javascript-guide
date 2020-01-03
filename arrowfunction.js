(function(){
    "use strict";
    
    // the arrow function basically reduces a functio definition
    var a = [
        'Hydrogen',
        'Helium',
        'Lithium',
        'Beryllium'
      ];
      
      // regular function definition
      var a2 = a.map(function(s) { return s.length; });
      
      console.log(a2); // logs [8, 6, 7, 9]
      
      // arrow function definition
      var a3 = a.map(s => s.length);
      
      console.log(a3); // logs [8, 6, 7, 9]
  })();

