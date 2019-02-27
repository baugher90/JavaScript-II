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

higherOrderFunction();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
let num = 0;

const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    num++;
    return num;
};

counter(num); // 1
counter(num); // 2
counter(num); // 3
counter(num); // 4

console.log(num); // 4

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====

const unCounter = () => {
  // Return a function that when invoked increments and returns a counter variable.
    num--;
    return num;
};

unCounter(num); // 3
unCounter(num); // 2

console.log(num); // 2

const counterFactory = (arr, cb) => cb(arr);


counterFactory(num,counter) // 3
counterFactory(num,unCounter) // 2
counterFactory(num,unCounter) // 2

console.log(num)