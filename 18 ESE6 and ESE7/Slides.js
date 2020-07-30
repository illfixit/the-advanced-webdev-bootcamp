/* ES6 and ES7

ES2016 + ES2017 Objectives

+ Examine two new features to ES2016
+ Use new string methods in ES2017
+ Understand how to refactor asynchronous code using ES2017 async functions
+ Use the spread and rest operator for objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Exponentiation Operator **

From:

//ES2015
var calculatedNumber = Math.pow(2,4);
calculatedNumber; // 16

To:

//ES2016
var calculatedNumber = 2**4;
calculatedNumber; // 16

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another example

From:

// ES2015
var nums = [1,2,3,4];
var total = 2;

for(let i = 0; i < nums.length; i++){
    total = Math.pow(total,nums[i])
}

To:

//ES2016
var nums = [1,2,3,4];
var total = 2;

for(let i = 0; i < nums.length; i++){
    total **= nums[i];
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

[].includes

From:

// ES2015

var nums = [1,2,3,4,5];
nums.indexOf(3) > -1; // true
nums.indexOf(44) > -1; // false

To:

// ES2016

var nums = [1,2,3,4,5];
nums.includes(3); // true
nums.includes(44); // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

padStart

The first parameter is the total length of the new string

The second parameter is what to pad with from the start. The default is an empty space

"awesome".padStart(10); // "   awesome"
"awesome".padStart(10,'!'); // "!!!awesome"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

padEnd

The first parameter is the total length of the new string

The second parameter is what to pad with from the end. The default is an empty space

"awesome".padEnd(10,'!'); // "awesome!!!"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2017 Async Functions

A special kind of function that is created using the word async
The purpose of async functions is to simplify writing asynchronous code, specifically Promises.

async function first(){
    return "We did it!";
}

first(); // returns a promise
first().then(val => console.log(val)); // "We did it!"

What makes them really special is the await keyword!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Await

A reserved keyword that can only be using inside async functions

await pauses the execution of the async function and is followed by a Promise. The await keyword waits for the promise to resolve, and then resumes the async function's execution and returns the resolved value.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Think of the await keyword like a pause button (similar to yield with generators)

Using await

Let's write a function that gets some movie data from the OMDB API!

async function getMovieData(){
    console.log("starting!");
    var movieData = await $.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb');
    // this line does NOT run until the promise is resolved!
    console.log("all done!");
    console.log(movieData);
}

getMovieData() // logs an object with data about the movie!

No .then or callback or yield necessary!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object async

We can also place async functions as methods inside objects!

var movieCollector = {
  data: "titanic",
  async getMovie(){
    var response = await $.getJSON(`https://omdbapi.com?t=${this.data}&apikey=thewdb`);
    console.log(response);
  }
}

movieCollector.getMovie();

Just make sure to prefix the name of the function with the async keyword

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Class async

We can also place async functions as instance methods with es2015 class syntax

class MovieData {
  constructor(name){
    this.name = name;
  }
  async getMovie(){
    var response = await $.getJSON(`https://omdbapi.com?t=${this.name}&apikey=thewdb`);
    console.log(response);
  }
}

var m = new MovieData('shrek');
m.getMovie();

But what happens when things go wrong?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Handling errors

If a promise is rejected using await, an error with be thrown so we can easily use a try/catch statement to handle errors!

async function getUser(user){
  try {
    var response = await $.getJSON(`https://api.github.com/users/${user}`);
    console.log(response.name);
  } catch(e){
    console.log("User does not exist!");
  }
}

getUser('elie'); // Elie Schoppik
getUser('foo!!!'); // User does not exist!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Thinking about HTTP Requests

Below we are making two requests sequentially. 

// SEQUENTIAL NOT PARALLEL
async function getMovieData(){
    var responseOne = await $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var responseTwo = await $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);
    console.log(responseOne);
    console.log(responseTwo);
}

getMovieData();

The second HTTP request does not get made until the first promise is resolved.

This can really slow down our applications....so how do we fix it?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Refactoring

Start the HTTP requests in parallel and then await their resolved promise!

// MUCH FASTER!
async function getMovieData(){
    var titanicPromise = $.getJSON(`https://omdbapi.com?t=titanic&apikey=thewdb`);
    var shrekPromise = $.getJSON(`https://omdbapi.com?t=shrek&apikey=thewdb`);

    var titanicData = await titanicPromise;
    var shrekData = await shrekPromise;

    console.log(titanicData);
    console.log(shrekData);
}

getMovieData();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Await with Promise.all

We can use Promise.all to await multiple resolved promises

async function getMovieData(first, second){
    var moviesList = await Promise.all([
        $.getJSON(`https://omdbapi.com?t=${first}&apikey=thewdb`),
        $.getJSON(`https://omdbapi.com?t=${second}&apikey=thewdb`) 
    ]);
    console.log(moviesList[0].Year);
    console.log(moviesList[1].Year);
}

getMovieData('shrek', 'blade'); 

// 2001
// 1998

Here we are simply waiting for an array of promises to resolve!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Rest

Gather remaining (rest) of keys and values in an object and create a new one out of them

var instructor = {first:"Elie", last:"Schoppik", job:"Instructor", numSiblings:3};

var { first, last, ...data } = instructor
first; // "Elie"
last; // "Schoppik"
data; // { job: "Instructor", numSiblings: 3 }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Spread

Spread out keys and values from one object to another

var instructor = {first:"Elie", last:"Schoppik", job:"Instructor"};

var instructor2 = {...instructor, first:"Tim", last:"Garcia"};

Great for creating objects starting with default values and is a more concise alternative to Object.assign

var defaults = {job: "Instructor", ownsCat:true, ownsDog: true};
var matt = {...defaults, ownsCat: false};
var colt = {...defaults, ownsDog: false};

Quite common in React and Redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

+ ES2016 provides the ** operator and [].includes
+ ES2017 provides helpful string methods and introduces async functions
+ The async/await keywords in ES2017 allow for writing synchronous looking functions that under the hood are asynchronous
+ We can combine async functions with Promise.all to create readable synchronous "looking" code
+ The rest and spread operator are proposed changes to JavaScript

*/
