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






