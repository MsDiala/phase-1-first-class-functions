// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    return () => {
      console.log("This is an anonymous function.");
    };
  }
  
  // Test the functions
  const namedFunc = returnsANamedFunction();
  const anonymousFunc = returnsAnAnonymousFunction();
  
  receivesAFunction(() => {
    console.log("Callback function called.");
  });
  
  namedFunc();
  anonymousFunc();
  