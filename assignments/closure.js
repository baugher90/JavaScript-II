// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function higherOrderFunction() {
  console.log(`I am the HOF`);
  const closureMessage = "this is the closure";
    function nestedFunc() {
      const alsoClosure = "this is also a closure";
    console.log(`${closureMessage} and ${alsoClosure}`);
      function subNestedFunc() {
        const nonClosure = "I am not a closure"
        console.log(`${nonClosure} but ${closureMessage} and ${alsoClosure}`);
    }
    subNestedFunc();
  }
 nestedFunc();
};

console.log(higherOrderFunction());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
