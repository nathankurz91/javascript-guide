Following along with the javascript guide.

Link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide


-----------------------------------------------------------------------

But for now, remember to always include the (function(){"use strict"; before your code, and add })(); to the end of your code. You will learn what these mean, but for now they can be thought of as doing the following:

1.  Massively improve performance.

2.  Prevent stupid semantics in JavaScript that trip up beginners.

3.  Prevent code snippets executed in the console from interacting with one-another (e.g., having something created in one console execution being used for a different console execution).





In the case that a value representing a number is in memory as a string, there are methods for conversion.

    parseInt()
    parseFloat()




From what the docs on functions is saying, it sounds like the functions take arguments by value if they are primitive types. If they are objects then they are passed as references...

Function expressions allow you declare a function with or without a name. It seems better to use a name for debugging purposes.

Function hoisting only works with function declarations—not with function expressions.

You can have nested functions... how useful is this? Perhaps it allows for more concise code, but is it more readable?

Name conflicts: inner most scope takes precedence

*** Take a closer look at CLOSURES







