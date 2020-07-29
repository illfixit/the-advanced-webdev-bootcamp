/* ESE5 Part II

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015, ES2016
and ES2017

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Refactor Object oriented code to use the class, extends and super keywords
+ Understand how to use new data structures in ES2015  
+ Refactor asynchronous code using the native Promise constructor and create functions that can pause and resume execution with generators
+ Utilize helpful ES2015 methods for copying objects, converting array-like-objects into arrays and handling issues with NaN.
+ Examine two new features to ES2016
+ Use new string methods and refactor code using ES2017 async functions
+ Introduce  the spread and rest operator for objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class

+ A new reserved keyword provided by ES2015
+ The class keyword creates a constant - can not be redeclared
+ The class keyword is an abstraction of constructor functions and prototypes. JavaScript does not have built in support for object oriented programming
+ The class keyword does not hoist
+ Still use `new` keyword to create objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 Object Oriented

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Student('Elie', 'Schoppik');

+ create a constructor function
+ use the new keyword to create objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 Object Oriented

class Student { 
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

var elie = new Student('Elie', 'Schoppik'); // same as ES5

+ use the class keyword instead of creating a function
+ inside, use a special method constructor which is run when new is used
+ use the new keyword to create objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 Instance Methods

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Shared methods and properties are placed directly on the function's prototype property

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 (= ES6) Instance Methods

class Student { 
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

+ placed inside of class keyword
+ no 'function' keyword - similar to object shorthand notation
+ under the hood it is placing methods on the prototype object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

(OLD) ES5 Class Methods

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype.sayHello = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Student.isStudent = function(obj){
    return obj.constructor === Student;
}

Class methods are placed directly on the constructor function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 Class Methods

class Student { 
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
    static isStudent(obj){
        return obj.constructor === Student;
    }
}

Class methods are created using the static keyword

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inheritance

Passing along methods and properties from one class to another

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 Inheritance

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Set the prototype property of a constructor to be an object created from another prototype property
Reset the constructor property on a constructor function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 Inheritance
Use the extends keyword

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person { 

}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Super

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 Refactoring Constructors

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Notice the duplication in the Student constructor function!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use Apply

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHello(){
    return "Hello " +  this.firstName + " " + this.lastName;
}

function Student(){
    Person.apply(this, arguments);
}

Use call or apply in a constructor function - apply is handy when there are many arguments

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 - super

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person { 
    constructor(firstName, lastName){
        // you must use super here!
        super(firstName, lastName);
    }
}

Super can only be used if a method by the same name is implemented in the parent class

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

+ Quickly create constructor functions and prototype methods using the class keyword
+ Add class methods using the static keyword
+ Implement inheritance using the extends and super keywords
+ ES2015 class syntax is an abstraction of using functions and objects!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Maps

+ Also called "hash maps" in other languages
+ Until ES2015 - objects were replacements for maps
+ Similar to objects, except the keys can be ANY data type!
+ Created using the new keyword

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Maps

var firstMap = new Map;

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice'); // true
firstMap.size(); // 2

Keys can be any type!

var arrayKey = [];
firstMap.set(arrayKey, [1,2,3,4,5]);

var objectKey = {};
firstMap.set(objectKey, {a:1});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Extracting Values

firstMap.get(1); // 'Elie'
firstMap.get(false); // 'a boolean'
firstMap.get(arrayKey); // [1,2,3,4,5]
firstMap.get(objectKey); // {a:1}

We can easily iterate over the map!

firstMap.forEach(v => console.log(v));

// Elie
// a boolean
// [1,2,3,4,5]
// {a:1}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Iterating over a map

maps implement a Symbol.iterator which means we can use a for...of loop!

firstMap.values(); // MapIterator of values
firstMap.keys(); // MapIterator of keys

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Accessing keys and values in a map

we can access everything with .entries() and destructuring!

var m = new Map;
m.set(1, 'Elie');
m.set(2, 'Colt');
m.set(3, 'Tim');

for(let [key,value] of m.entries()){
    console.log(key, value);
}

// 1 "Elie"
// 2 "Colt"
// 3 "Tim"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Why use maps?

+ Finding the size is easy  - no more loops or Object.keys()
+ The keys can be any data type!
+ You can accidentally overwrite keys on the Object.prototype in an object you make - maps do not have that issue
+ Iterating over keys and values in a map is quite easy as well

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When to use a map

+ If you need to look up keys dynamically (they are not hard coded strings)
+ If you need keys that are not strings!
+ If you are frequently adding and removing key/value pairs
+ Are key-value pairs frequently added or removed?
+ If you are operating on multiple keys at a time

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WeakMap

+ Similar to a map, but all keys MUST be objects
+ Values in a WeakMap can be cleared from memory if there is no reference to them
+ More performant than maps, but can not be iterated over

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Syntax

var s = new Set;

// can also be created from an array
var s2 = new Set([3,1,4,1,2,1,5]); // {3,1,4,2,5}

s.add(10); // {10}
s.add(20); // {20, 10}
s.add(10); // {20, 10}

s.size; // 2

s.has(10); // true

s.delete(20); // true

s.size; // 1

s2[Symbol.iterator]; // function(){}...
// we can use a for...of loop!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

WeakSet

+ Similar to a set, but all values MUST be objects
+ Values in a WeakSet can be cleared from memory if there is no reference to them
+ More performant than sets, but can not be iterated over

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Promises

+ A one time guaranteed return of some future value
+ When that value is figured out - the promise is resolved/fulfilled or rejected
+ Friendly way to refactor callback code
+ Libraries have implemented Promises for a while, ES2015 is a little late to the game

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Story time

+ You're hungry - so you go to McDonalds
+ You place your order and get a ticket (a promise)
+ After some time, you either get your food and the promise is resolved or you do not get your food and the promise is rejected
+ If you want another order - you need a new Promise!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Where have you seen promises before?

+ jQuery implemented its own version of a promise called a deferred. jQuery version 3 now supports native promises.

+ Many JavaScript libraries and frameworks (Node, Angular) use popular promise libraries like q and bluebird

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

We can now create our own promises!
Created using the new keyword
Every promise constructor accepts a callback function which contains two parameters, resolve and reject
You can call these parameters whatever you like, resolve and reject are most common
These parameters are both functions to be run if the promise is resolved or rejected

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A simple example

function displayAtRandomTime(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(Math.random() > .5) {
                resolve('Yes!');
            } else {
                reject('No!');
            }
        },1000);
    });
}

The returned value from a promise will always contain a .then and .catch method which are functions to be executed when the promise is resolved or rejected

displayAtRandomTime().then(function(value){
    console.log(value);
}).catch(function(error){
    console.log(error);
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Returning promises

Since a promise always returns something that has a .then (thenable) - we can chain promises together and return values from one promise to another!

var years = [];
$.getJSON('https://omdbapi.com?t=titanic&apikey=thewdb')

.then(function(movie){
    years.push(movie.Year);
    return $.getJSON('https://omdbapi.com?t=shrek&apikey=thewdb');  
})

.then(function(movie){
    years.push(movie.Year);
    console.log(years);
})

console.log('ALL DONE!');

// "ALL DONE!"
// ["1997", "2001]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Promise.all

Accepts an array of promises and resolves all of them or rejects once a single one of the promises has been first rejected (fail fast).

If all of the passed-in promises fulfill, Promise.all is fulfilled with an array of the values from the passed-in promises, in the same order as the promises passed in.

You may have seen something like this when $.when in jQuery or Q

The promises don't resolve sequentially, but Promise.all waits for them

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Promise.all

Let's make a function that returns a promise

function getMovie(title){
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

We can now resolve all of the promises using Promise.all

Promise.all([titanicPromise, shrekPromise, braveheartPromise]).then(function(movies){
    return movies.forEach(function(value){
        console.log(value.Year);
    });
});

// 1997
// 2001
// 1995

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Generators

+ A special kind of function which can pause execution and resume at any time
+ Created using a *
+ When invoked, a generator object is returned to us with the keys of value and done.
+ Value is what is returned from the paused function using the yield keyword
+ Done is a boolean which returns true when the function has completed

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our first generator

function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++){
	yield i;
    }
}

var gen = pauseAndReturnValues(5);

gen.next(); // {value: 0, done: false}
gen.next(); // {value: 1, done: false}
gen.next(); // {value: 2, done: false}
gen.next(); // {value: 3, done: false}
gen.next(); // {value: 4, done: false}
gen.next(); // {value: undefined, done: true}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Yield Multiple Values

We can place multiple yield keywords inside of a generator function to pause multiple times!

function* printValues(){
    yield "First";
    yield "Second";
    yield "Third";
}

var g = printValues();
g.next().value; // "First"
g.next().value; // "Second"
g.next().value; // "Third"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Iterating over a generator

Since generators implement a Symbol.iterator property we can use a for...of loop!

function* pauseAndReturnValues(num){
    for(let i = 0; i < num; i++){
	yield i;
    }
}

for(val of pauseAndReturnValues(3)){
    console.log(val);
}

// 0
// 1
// 2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Async Generators

We can use generators to pause asynchronous code!

function* getMovieData(movieName){
    console.log('starting')
    yield $.getJSON(`https://omdbapi.com?t=${movieName}&apikey=thewdb`);
    console.log('ending')
}

The next value returned is a promise so let's resolve it!

var movieGetter = getMovieData('titanic');
movieGetter.next().value.then(val => console.log(val));

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object.assign

Create copies of objects without the same reference!

// ES5

var o = {name: "Elie"};
var o2 = o;

o2.name = "Tim";
o.name; // "Tim"

Fixing up with Object.assign (notice the first parameter)

// ES2015

var o = {name: "Elie"};
var o2 = Object.assign({},o);

o2.name = "Tim";
o.name; // "Elie"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Not a deep clone

// ES2015

var o = {instructors: ["Elie", "Tim"]};
var o2 = Object.assign({},o);

o2.instructors.push("Colt");

o.instructors; // ["Elie", "Tim", "Colt"];

If we have objects inside of the object we are copying - those still have a reference!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Array.from

Convert other data types into arrays

// ES5

var divs = document.getElementsByTagName("div"); // returns an array-like-object

divs.reduce // undefined, since it is not an actual array

How this was done with ES5 - using call

// convert the array-like-object into an array
var converted = [].slice.call(divs) 

converted.reduce // function reduce() { ... }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using Array.from

Convert array-like-objects into arrays

// ES2015

var divs = document.getElementsByTagName("div"); 
var converted = Array.from(divs);

Convert different types of objects into arrays

var firstSet = new Set([1,2,3,4,3,2,1]); // {1,2,3,4}
var arrayFromSet = Array.from(firstSet); // [1,2,3,4]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

find

+ Invoked on arrays
+ Accepts a callback with value, index and array (just like forEach, map, filter, etc.)
+ Returns the value found or undefined if not found

var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.find(function(val){
    return val.name === "Tim";
}); // {name: "Tim"}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

findIndex

Similar to find, but returns an index or -1 if the value is not found

var instructors = [{name: "Elie"}, {name: "Matt"}, {name: "Tim"}, {name: "Colt"}];

instructors.findIndex(function(val){
    return val.name === "Tim";
}); // 2

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

includes 

returns a boolean if a value is in a string - easier than using indexOf

From:
//ES5
"awesome".indexOf("some") > -1 // true

To:
//ES2015
"awesome".includes("some"); // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Number.isFinite

A handy way for handling NaN being a typeof number

From:

// ES5
function seeIfNumber(val){
    if(typeof val === "number" && !isNaN(val)){
        return "It is a number!";
    }
}

To:

// ES2015
function seeIfNumber(val){
    if(Number.isFinite(val)){
        return "It is a number!";
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

+ The map data structure is useful when creating key value pairs and the keys are not strings.

+ Sets are useful for creating unique data sets and do not require key value pairs

+ The ES2015 Promise constructor allows for creating promises and resolving an array of promises with Promise.all

+ Generators are valuable when creating functions or methods that can pause and resume at any time

+ ES2015 provides a few useful methods for converting array like objects into arrays, making shallow copies of objects, and handling issues with NaN and typeof number.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
