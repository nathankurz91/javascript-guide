(function(){
    "use strict";

    // this is the "old way" before ECMA 5
    // there was an issue using this that would make it so the growUp function this would refer to the global object
    // and not the in scope one
    // function Person() {
    //     // The Person() constructor defines `this` as itself.
    //     this.age = 0;
      
    //     setInterval(function growUp() {
    //       // In nonstrict mode, the growUp() function defines `this` 
    //       // as the global object, which is different from the `this`
    //       // defined by the Person() constructor.
    //       this.age++;
    //     }, 1000);
    //   }
      
    //   var p = new Person();

    // it was fixed and now you can assign a new variable to this in the constructor and use that instead of this throughout...
    // i am not sure if this is exactly correct but i feel like it is the gist
    // function Person() {
    //     var self = this; // Some choose `that` instead of `self`. 
    //                      // Choose one and be consistent.
    //     self.age = 0;
      
    //     setInterval(function growUp() {
    //       // The callback refers to the `self` variable of which
    //       // the value is the expected object.
    //       self.age++;
    //     }, 1000);
    //   }

    // this was made even easier using an arrow function
    // you can just use 'this' now without having to reassign it
      function Person() {
        this.age = 0;
      
        setInterval(() => {
          this.age++; // |this| properly refers to the person object
        }, 1000);
      }
      
      var p = new Person();
})();