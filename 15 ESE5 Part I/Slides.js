/* ES 2015 Part I

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015
Part One

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

> Understand what ES2015 is and how the term came to be
> Refactor code to use let and const and explain the implications of using both
> Use template strings to avoid string concatenation in your JavaScript code
> Use arrow functions to write shorter functions and compare arrow functions and the function keyword
> Use ES2015 object enhancements to refactor code
> Explain what ES2015 default parameters are and how to use them
> Compare and contrast the rest and spread operators
> Unpack values from arrays and objects using destructuring

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

But first....
a little history

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Start
1995 + 1996

ES1
1997

ES2
1998

ES3
1999

ES5
2009

ES6 / ES2015
2015

ES2016
2016

ES2017
2017

+++

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 (ES6) Additions

+ let, const
+ template strings
+ arrow functions
+ default parameters
+ rest and spread operators
+ for...of loops
+ object shorthand notation
+ computed property names

+ object destructuring
+ array destructuring
+ class keyword
+ super and extends keywords
+ Maps / Sets
+ Promises
+ Generators
+ Object, Number, Array methods

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const

var firstInstructor = "Colt";
firstInstructor = "Elie"; // no problem here

const anotherInstructor = "Tim";
anotherInstructor = "Elie"; // TypeError
const anotherInstructor = "Elie"; // SyntaxError

Can NEVER redeclare

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Gotcha with const

const numbers = [1,2,3,4];
numbers.push(10); // 5 (length)
numbers; // [1,2,3,4,10]
 
numbers = "no!"; // TypeError

Can mutate if it is an object, but not declare again

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

let

let anotherInstructor = "Tim";

anotherInstructor = "Elie"; // no problems here!
let anotherInstructor = "Tim"; // SyntaxError

Can reassign, can not redeclare

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Scope with let

var instructor = "Elie";

if(instructor === "Elie"){
    let funFact = "Plays the cello";
}

funFact; // ReferenceError!

blocks create scope!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Hoisting with let

function helloInstructor(){
    return elie; // use before declaration
    var elie = "ME!";
}

helloInstructor(); // undefined

function helloSecondInstructor(){
    return colt; // use before declaration
    let colt = "HIM!";
}

helloSecondInstructor(); // ReferenceError

let does hoist, but we can not access the value - it is in a TDZ (Temporal Dead Zone)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use Cases for let

for(var i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000)
}

// 5 (five times)


for(var i = 0; i < 5; i++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },1000);
    })(i)
}


// 0
// 1
// 2
// 3
// 4

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

for(let i = 0; i < 5; i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}

// 0
// 1
// 2
// 3
// 4

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Template Strings

var firstName = "Elie";

var lastName = "Schoppik";

console.log("Hello " + firstName + " " + lastName); // error prone!

console.log(`Hello ${firstName} ${lastName}`); // Much nicer!

Make sure you use backticks!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Multiline Strings

"
Hello
" // does not work!

`
Hello
How
Nice
Is
This!
` // works well!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Arrow Functions

// ES5
var add = function(a,b){
    return a+b;
}

Replace the keyword 'function' with =>

// ES2015
var add = (a,b) => {
    return a+b;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One-line arrow functions

You can put arrow functions on one line.
But you must omit the return keyword as well as curly braces

We can go from:

var add = (a,b) => {
    return a+b;
}

To:

var add = (a,b) => a+b;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Refactoring with arrow functions

We can go from:

// ES5
[1,2,3].map(function(value){
    return value * 2;
}); // [2,4,6]

To:

// ES2015
[1,2,3].map(value => value * 2); // [2,4,6];

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's do it again!

We can go from:

function doubleAndFilter(arr){
    return arr.map(function(value){
        return value * 2;
    }).filter(function(value){
        return value % 3 === 0;
    })
};

doubleAndFilter([5,10,15,20]); // [30]

To:

var doubleAndFilter = arr => arr.map(val => val * 2).filter(num => num % 3 === 0);

doubleAndFilter([5,10,15,20]); // [30]

Notice that if we only have one parameter, we do not need parenthesis around it with arrow functions!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So...what's the catch?

+ Arrow functions are not exactly the same as regular functions!
+ Arrow functions do not get their own 'this' keyword
+ Inside of an arrow function, the keyword this has its original meaning from the enclosing context.
+ The fact that arrow functions do not have their own this keyword can be quite helpful - you just need to understand when you might NOT want that!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A familiar situation...

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello undefined"

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(function(){
            console.log("Hello " + this.firstName);
        }.bind(this), 1000);
    }
}

instructor.sayHi(); // "Hello Elie"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Arrow functions as an alternative

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello Elie"

But why does this work?

Arrow functions do not have their own keyword this.  The keyword this refers to its enclosing context (the instructor object).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One quick gotcha

We used both the function keyword and an arrow function - why?

var instructor = {
    firstName: "Elie",
    // why can't we use an arrow function here?
    sayHi: function(){
        setTimeout(() => {
            console.log("Hello " + this.firstName);
        }, 1000);
    }
}

instructor.sayHi(); // "Hello Elie"

If we use an arrow function, the sayHi function will not have its own keyword this - and the keyword this will not refer to the instructor object anymore!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Arrow Functions and `arguments`

arrow functions do not get their own keyword arguments

var add = (a,b) => {
    return arguments;
}

add(2,4); // ReferenceError: arguments is not defined

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One more note about 'arguments'

An arguments keyword can be accessed if the arrow function is inside of another function (it will be the outer functions arguments)

function outer() {
  return innerFunction = () => {
    return arguments;
  }
}

outer(1)(2); // only prints out [1]

If you REALLY need the arguments to an arrow function, use the rest operator - we'll see that very soon!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

! When NOT to use Arrow Functions

Arrow functions should NEVER be used as methods in objects since we will get the incorrect value of the keyword this. ES2015 provides a better alternative - we'll see it soon!

var instructor = {
    firstName: "Elie",
    sayHi: () => `Hello ${this.firstName}`;
}

instructor.sayHi(); // "Hello undefined"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Default Parameters

function add(a, b){
    return a+b;
}

add(); // NaN because a is undefined and b is undefined

function add(a=10, b=20){
    return a+b;
}

add(); // 30
add(20); // 40

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For...of

var arr = [1,2,3,4,5];

for(let val of arr){
    console.log(val);
}

// 1
// 2
// 3
// 4
// 5

Can't access an index
Can only be used on data structures with a Symbol.iterator method implemented (no objects!)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Rest

function printRest(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

printRest(1,2,3,4,5); 

// 1
// 2
// [3,4,5]

+ The rest operator always returns an array 
+ Is called the rest operator "only" when it is a parameter to a function
+ Is accessed without the ... in a function
+ A better alternative to using the arguments array-like- object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Rest Continued

// ES5
function sumArguments(){
    var total = 0;
    for(var i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

// A little fancier ES5
function sumArguments(){
    var argumentsArray = [].slice.call(arguments);
    return argumentsArray.reduce(function(accumulator,nextValue){
        return accumulator + nextValue;
    });
}

// ES2015
var sumArguments = (...args) => args.reduce((acc, next) => acc + next);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Spread

+ Used on arrays to spread each value out (as a comma separated value)
+ Useful when you have an array, but what you are working with expects comma separated values

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ES5
var arr1 = [1,2,3];
var arr2 = [4,5,6];
var arr3 = [7,8,9];

var combined = arr1.concat(arr2).concat(arr3);

// ES2015
var combined = [...arr1, ...arr2, ...arr3];

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Spread instead of apply

var arr = [3,2,4,1,5];
Math.max(arr); // NaN

// ES5
Math.max.apply(this, arr); // 5

// ES2015
Math.max(...arr); // 5

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One more time

function sumValues(a,b,c){
    return a+b+c;
}

var nums = [12,15,20];

// ES5
sumValues.apply(this, nums); // 47

// ES2015
sumValues(...nums); // 47

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Shorthand Notation

var firstName = "Elie";
var lastName = "Schoppik";

// ES5
var instructor = {
    firstName: firstName,
    lastName: lastName
}

var firstName = "Elie";
var lastName = "Schoppik";

// ES2015
var instructor = {
    firstName,
    lastName
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Methods

// ES5
var instructor = {
    sayHello: function(){
        return "Hello!";
    }    
}

// ES2015 - do NOT use arrow functions here!
var instructor = {
    sayHello(){
        return "Hello!";
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Computed Property Names

// ES5
var firstName = "Elie";
var instructor = {};
instructor[firstName] = "That's me!";

instructor.Elie; // "That's me!"

// ES2015
var firstName = "Elie";
var instructor = {
    [firstName]: "That's me!"
}

instructor.Elie; // "That's me!"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Destructuring

Extracting values from data stored in objects and arrays

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5

var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var firstName = instructor.firstName;
var lastName = instructor.lastName;

firstName; // "Elie"
lastName; // "Schoppik"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Destructuring

var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var {firstName, lastName} = instructor;

firstName; // "Elie"
lastName; // "Schoppik"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Different Variables

var instructor = {
    firstName: "Elie",
    lastName: "Schoppik"
}

var {firstName:first, lastName:last} = instructor;

first; // "Elie"
last; // "Schoppik"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 Default Values with an object

function createInstructor(options){
    var options = options || {};
    var name = options.name || {first: "Matt", last:"Lane"}
    var isHilarious = options.isHilarious || false; 
    return [name.first, name.last, isHilarious];
}

createInstructor(); // ["Matt", "Lane", false]

createInstructor({isHilarious:true}); // ["Matt", "Lane", true]

createInstructor({name: {first:"Tim", last:"Garcia"}}); // ["Tim", "Garcia", false]

Lots of work!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES2015 Destructuring

function createInstructor({name = {first:"Matt", last:"Lane"}, isHilarious=false } = {}){
    return [name.first, name.last, isHilarious];
}

+ We're passing in a destructured object as a default parameter!
+ We assign as a default value an empty object so ES2015 knows we are destructuring
+ If nothing is passed in, we default to the destructured object as the parameter.

createInstructor(); // ["Matt", "Lane", false]

createInstructor({isHilarious:true}); // ["Matt", "Lane", true]

createInstructor({name: {first:"Tim", last:"Garcia"}}); // ["Tim", "Garcia", false]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object fields as parameters ES5

function displayInfo(obj) {
    return [obj.name, obj.favColor];
}

var instructor = { 
    name: "Elie",
    favColor: "Purple"
};

displayInfo(instructor); // ["Elie", "Purple"]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object fields as parameters ES2015 (ES6)

function displayInfo({name,favColor}) {
    return [name, favColor];
}

var instructor = { 
    name: "Elie",
    favColor: "Purple"
};

displayInfo(instructor); // ["Elie", "Purple"]

Very common in React!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 vs ES2015 (aka ES6)

var arr = [1,2,3];

var a = arr[0];
var b = arr[1]; 
var c = arr[2];

a; // 1
b; // 2
c; // 3

var arr = [1,2,3];

var [a,b,c] = arr;

a; // 1
b; // 2
c; // 3 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ES5 vs ES2015 (aka ES6)

// ES5

function returnNumbers(a,b) {
  return [a,b];
}

var first = returnNumbers(5,10)[0];
var second = returnNumbers(5,10)[1];

first; // 5
second; // 10

// ES6

function returnNumbers(a,b) {
  return [a,b];
}

[first, second] = returnNumbers(5,10); 

first; // 5
second; // 10


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Swapping Values

//ES5
function swap(a,b){
    var temp = a;
    a = b;
    b = temp;
    return [a,b];
}

swap(10,5); // [5,10]

// ES2015
function swap(a,b){
    return [a,b] = [b,a];
}

swap(10,5); // [5,10]

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap
+ ES2015 gives us two new keywords for declaring variables let, const. Const ensures we can not redeclare a variable and let gives us block scope
+ Easily evaluate variables in strings and create multi-line strings with ES2015 template strings. Don't forget the backticks!
+ Create more concise functions using the => syntax, but these functions do not get their own this and arguments keywords
+ Gather arguments to a function as an array using the rest operator and spread out values in an array to another value or function using ...
+ Write more concise methods and property names using shorthand notation and computed property names
+ Object destructuring is very useful for reducing duplication and passing in default parameters as a destructured object
+ Array destructuring can also be used for swapping variables in an array without a separate swap function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
