// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
//add (2, 2)
const add = function(a, b) {
  return a + b;
};

//multiply (10, 16)
const multiply = function(a, b) {
  return a * b;
};

//greeting
const greeting = function(first_name, last_name) {
  return `Hello ${first_name} ${last_name} nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume('Mary', 'Poppins', greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation:
// nestedfunction can access the variable internal due to closures.
// This means that the scope chain, or lexical scope in which the nest functions reside can access or reach out and access the information from functions located outside its local scope, or functional scope. The closure or nested chain looks like this Global scope(const = external)->functional scope(myFunc)->local scope(nestedFunc or internal)

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
