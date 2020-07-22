/* Async Foundations 

Callback functions

Objectives:

+ Define callback functions
+ Define higher order functions
+ Use a callback function to make your code more general
+ Create callbacks using anonymous functions

A callback function is...
a function that is passed into another function as a parameter then invoked by that other function

Callback Example
*/
(() => {
  function callback() {
    console.log('Coming from callback');
  }

  function higherOrder(fn) {
    console.log('About to call callback');
    fn(); // Callback function is invoked
    console.log('Callback has been invoked');
  }

  higherOrder(callback);
})();
/*

A higher order function is...
a function that accept a callback as a parameter


What are callbacks used for?
+ Advanced Array Methods
+ Browser events
+ AJAX Requests
+ React Development

*/

// Duplicate Code Without Callbacks

(() => {
  function sendMessageConsole(message) {
    console.log(message);
  }

  function sendMessageAlert(message) {
    alert(message);
  }

  function sendMessageConfirm(message) {
    return confirm(message);
  }

  sendMessageAlert('Lots of duplication');
})();

// Code Reuse With Callbacks

(() => {
  function sendMessage(message, callback) {
    return callback(message);
  }

  sendMessage('Message for console', console.log);

  sendMessage('Message for alert', alert);

  var answer = sendMessage('Are you sure??', confirm);
})();

// Callbacks With Function Declarations

(() => {
  function greet(name, formatter) {
    return 'Hello, ' + formatter(name);
  }

  function upperCaseName(name) {
    return name.toUpperCase();
  }

  greet('Tim', upperCaseName);
})();

/* forEach Function

Objectives
+ Describe and use the forEach function
+ Implement the forEach function

Print Array Values Doubled

*  var arr = [1,2,3,4,5,6];
*  function double(arr) {
*    for(var i = 0; i < arr.length; i++) {
*      console.log(arr[i] * 2);
*    }
*  }
*  double(arr);

Double With forEach

* var arr = [1,2,3,4,5,6];
* forEach(arr, function(number) {
*     console.log(number * 2);
* });

forEach Function Definition

* function forEach(array, callback) {
*   // ... To be implemented
* }

* // Callback signature
* function callback(curElement, currentIndex, array) {
*   // ... Implemented by the caller of forEach
* }

*/

// forEach Example With All Callback Parameters

(() => {
  var strings = ['my', 'forEach', 'example'];

  var result = '';
  forEach(strings, function (str, index, array) {
    if (array.length - 1 !== index) {
      result += str + ' ';
    } else {
      result += str + '!!!';
    }
  });

  // result = "my forEach example!!!"
})();

/* findIndex Function

Objectives:
* Describe and use the findIndex function
* Implement the findIndex on your own

findIndex Definition

- Returns the index of the first element in the array for which the callback returns a truthy value.  -1 is returned if the callback never returns a truthy value.

function findIndex(array, callback) {
  // findIndex code to be implemented
}

function callback(curElement, curIndex, array) {
  // callback implemented by caller of function
}

findIndex Example: Find A Number

var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array) {
  return num === 6;
});

Returned Result: 2

findIndex Example: Find First Even

var arr = [5,11,13,8,6,7];
findIndex(arr, function(num, index, array) {
  return num % 2 === 0;
});

Returned Result: 3

findIndex Example: Could Not Find

var langs = ["Java", "C++", "Python", "Ruby"];
findIndex(langs, function(lang, index, arr) {
  return lang === "JavaScript";
});

Returned Result: -1

findIndex Example: Bad Callback

var langs = ["Java", "C++", "JavaScript"];
findIndex(langs, function(lang, index, arr) {
  lang === "JavaScript"; // NO RETURN
});

Returned Result: -1

*/

/* The Stack and the Heap

Objectives:
* Describe what the stack is 
* Describe a stack frame 
* Describe the heap 

What is the Stack?

- An ordered data structure
- Keeps track of function invocations
- Part of the JavaScript runtime (you don't access it directly)

How Your Code Changes the Stack
> Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
> Whenever a function returns, the information about the invocation is taken off the top of the stack (popped off of the top)

Stack Example

1  function multiply(x, y) {
2    return x * y;
3  }
4 
5  var res = multiply(3,5);

Stack: 

5  function: main 
=> 
2  function: multiply
5  function: main
=>
5  function: main
=>
Empty

Stack Frame:
2  function: multiply
5  function: main

> The function that was invoked
> The parameters that were passed to the function
> Current line number

Stack Definition

- An ordered set of stack frames
- Most recently invoked function is on the top of the stack
- The bottom of the stack is the first function invoked
- The stack is processed from top to bottom

Heap Definition
- An area in memory where your data is stored

// The object is created in
// the heap.  obj is a reference
// to the object.
var obj = {firstName: "Tim", lastName: "Garcia"};

// New data is not created,
// only a copy of the reference
var referenceCopy = obj;
*/

/* The Stack: An Example

Stack Example

1  function upperCaseFirst(word) {
2    return word[0].toUpperCase() + word.slice(1);
3  }
4 
5  function upperCaseWords(sentence) {
6    var words = sentence.split(" ");
7    for (var i = 0; i < words.length; i++) {
8      words[i] = upperCaseFirst(words[i]);
9    }
10   return words.join(" ");
11 }
12
13 upperCaseWords("lowercase words");

Stack:
13  function: main
=> 
6   function: upperCaseWords
13  function: main
=>
?    function: split
6   function: upperCaseWords
13  function: main
=>
8    function: upperCaseWords
13  function: main
=>
2    function: upperCaseFirst
8    function: upperCaseWords
13  function: main
=>
?    function: toUpperCase
2    function: upperCaseFirst
8    function: upperCaseWords
13  function: main
=>
2    function: upperCaseFirst
8    function: upperCaseWords
13  function: main
=>
?    function: slice
2    function: upperCaseFirst
8    function: upperCaseWords
13  function: main
=>
2    function: upperCaseFirst
8    function: upperCaseWords
13  function: main
=>
8    function: upperCaseWords
13  function: main
=>
?    function: join
8    function: upperCaseWords
13  function: main
=>
8    function: upperCaseWords
13  function: main
=>
13  function: main

*/
/* setTimeout and setInterval

Objectives
+ Write asynchronous code using setTimeout
+ Write asynchronous code using setInterval

============================================================
============================================================

setTimeout

* // setTimeout usage
* function callback() {
*   console.log("callback function");
* }
* var delay = 1000;  // Delay is in ms
* setTimeout(callback, delay);

A function that asynchronously invokes a callback after a delay in milliseconds

setTimeout Example

* setTimeout(function() {
*   console.log("Runs in approx. 2000ms");
* }, 2000);

Canceling setTimeout

* var timerId = setTimeout(function() {
*   console.log("This function runs in 30 seconds");
* }, 30000);
*
* setTimeout(function() {
*   console.log("Canceling the first setTimeout", timerId);
*   clearTimeout(timerId);
* }, 2000);

Console:
Canceling the first setTimeout 42

============================================================
============================================================

setInterval
- A function that continually invokes a callback after every X milliseconds, where X is provided to setInterval

setInterval Example

* var num = 0;
* setInterval(function() {
*   num++;
*   console.log("num:", num);
* }, 1000);


Console:
num: 1
num: 2
num: 3
num: 4

Canceling setInterval
* var num = 0;
* var intervalId = setInterval(function() {
*   num++;
*   console.log("num:", num);
*   if (num === 3) {
*     clearInterval(intervalId);
*   }
* }, 1000);

Console:
num: 1
num: 2
num: 3

Queue Example:
Waiting for the Stack to Empty

1 function square(n) {
2   return n * n;
3 }
4 setTimeout(function() {
5   console.log("Callback is placed", "on the queue");
6 }, 0);
7 console.log(square(2));

Stack:                   Queue:
4  function: main        []

=>                       =>

?  function: setTimeout  
4  function: main        []

=>                       =>

?  function: setTimeout  
4  function: main        [function()]

=>                       =>

?  function: setTimeout  
4  function: main        [function()]

=>                       =>

4  function: main        [function()]

=>                       =>

7  function: main        [function()]

=>                       =>

2  function: square
7  function: main        [function()]

=>                       =>

?  function: console.log
7  function: main        [function()]

Console: 4

Event Loop

=>                       =>

5  function: main        []

=>                       =>

?  function: console.log
5  function: main        []

Console: 4
Callback was placed on the queue

=>                       =>

5  function: main        []

===========================================================
===========================================================
JavaScript is Single Threaded

Single Threaded Example

* setTimeout(function() {
*   console.log("Hello from the timeout");
* }, 0);
*
* for (var i = 0; i < 1000000000; i++) {
*   var x = i * 2;
* }
* console.log("Done with loop");

*/
/* 

Event Loop
and the
Queue

Objectives:
= Define the event loop and the queue
= Describe how the event loop and the queue work with the stack
= Define JavaScript as a single threaded language

The Queue
- An ordered list of functions waiting to be placed on the stack
- Functions in the queue are processed on a first in, first out basis (FIFO)

The Event Loop
- Functionality in the JavaScript runtime that checks the queue when the stack is empty
- If the stack is empty, the front of the queue is placed in the stack

JavaScript is
Single Threaded

Single Threaded: Code execution is linear.  Code that is running cannot be interrupted by something else going on in the program.

*/
/*

Promise
Basics

Objectives
+ Define a promise
+ Add a .then callback to a promise
+ Add a .catch callback to a promise
+ Wrap a setTimeout call in a promise

Nested Async Callbacks:

* var counter = 0;
* setTimeout(function() {
*   counter++;
*   console.log("Counter:", counter);
*   setTimeout(function() {
*     counter++;
*     console.log("Counter:", counter);
*     setTimeout(function() {
*       counter++;
*       console.log("Counter:", counter);
*     }, 3000);
*   }, 2000);
* }, 1000);

Console:
Counter: 1
Counter: 2
Counter: 3

Disadvantages of Nested Callbacks
- The code is hard to read
- Logic is difficult to reason about
- The code is not modular


Promise: Conceptually

A promise is an object that represents a task that will be completed in the future

Analogy: Taking a number at a government office before you can get helped.  The piece of paper you get is like your promise.  The help you get at the counter is like the invocation of your callback.

Creating a Promise

* var p1 = new Promise(function(resolve, reject) {
*   resolve([1,2,3,4]);
* });
*
* p1.then(function(arr) {
*   console.log("Promise p1 resolved with data:", arr);
* });

Console:

Promise p1 resolved with data: [1,2,3,4]

Promise: Handling Errors

* var p1 = new Promise(function(resolve, reject) {
*   reject("ERROR");
* });
*
* p1.then(function(data) {
*   console.log("Promise p1 resolved with data:", data);
* }).catch(function(data) {
*   console.log("Promise p1 was rejected with data:", data);
* });

Console:
Promise p1 was rejected with data: ERROR

Promise:
With Randomly Occurring Errors

* var p1 = new Promise(function(resolve, reject) {
*   var num = Math.random();
*   if (num < 0.5) {
*     resolve(num);
*   } else {
*     reject(num);
*   }
* });
*
* p1.then(function(result) {
*   console.log("Success:", result);
* }).catch(function(error) {
*   console.log("Error:", error);
* });
*

Wrap setTimeout With Promise

* var promise = new Promise(function(resolve, reject) {
*   setTimeout(function() {
*     var randomInt = Math.floor(Math.random() * 10);
*     resolve(randomInt);
*   }, 4000);
* });
*
* promise.then(function(data) {
*   console.log("Random int passed to resolve:",
*               data);
* });

Returning a Promise:
Promise Chaining

* var promise = new Promise(function(resolve, reject) {
*   setTimeout(function() {
*     randomInt = Math.floor(Math.random() * 10);
*     resolve(randomInt);
*   }, 500);
* });
*
* promise.then(function(data) {
*   console.log("Random int passed to resolve:",
*                data);
*   return new Promise(function(resolve, reject) {
*     setTimeout(function() {
*       resolve(Math.floor(Math.random() * 10));
*     }, 3000);
*   });
* }).then(function(data) {
*   console.log("Second random int passed to resolve:",
*                data);
* });

Promise Chaining:

Returning Data

* var promise = new Promise(function(resolve, reject) {
*   resolve(5);
* });
*
* promise.then(function(data) {
*   return data * 2;
* }).then(function(data) {
*   return data + 20;
* }).then(function(data) {
*   console.log(data);
* });

Console: 30

Nested Callbacks:
To Be Refactored

* var counter = 0;
* setTimeout(function() {
*   counter++;
*   console.log("Counter:", counter);
*   setTimeout(function() {
*     counter++;
*     console.log("Counter:", counter);
*     setTimeout(function() {
*       counter++;
*       console.log("Counter:", counter);
*     }, 3000);
*   }, 2000);
* }, 1000);

Console:

Counter: 1
Counter: 2
Counter: 3

Step 1:
Create a Function Declaration

* var counter = 0;
* function incCounter() {
*   counter++;
*   console.log("Counter:", counter);
* }
 
Step 2:
Create a runLater Function

* var counter = 0;
* function incCounter() {
*   counter++;
*   console.log("Counter:", counter);
* }
*
* function runLater(callback, timeInMs) {
*   var p = new Promise(function(resolve, reject) {
*     setTimeout(function() {
*       var res = callback();
*       resolve(res);
*     }, timeInMs);
*   });
*   return p;
* }

Step 3: Chain Promises

* var counter = 0;
* function incCounter() {
*   counter++;
*   console.log("Counter:", counter);
* }
*
* function runLater(callback, timeInMs) {
*   var p = new Promise(function(resolve, reject) {
*     setTimeout(function() {
*       var res = callback();
*       resolve(res);
*     }, timeInMs);
*   });
*   return p;
* }
*
* runLater(incCounter, 1000).then(function() {
*   return runLater(incCounter, 2000);
* }).then(function() {
*   return runLater(incCounter, 3000);
* }).then(function() {
*   // final .then not necessary
* });

Promise Refactor: Side By Side

* // var counter = 0;
* // setTimeout(function() {
* //   counter++;
* //   console.log("Counter:", counter);
* //   setTimeout(function() {
* //     counter++;
* //     console.log("Counter:", counter);
* //     setTimeout(function() {
* //       counter++;
* //       console.log("Counter:", counter);
* //     }, 3000);
* //   }, 2000);
* // }, 1000);
*
*  var counter = 0;
* function incCounter() {
*   counter++;
*   console.log("Counter:", counter);
* }
*
* function runLater(callback, timeInMs) {
*   var p = new Promise(function(resolve, reject) {
*     setTimeout(function() {
*       var res = callback();
*       resolve(res);
*     }, timeInMs);
*   });
*   return p;
* }
*
* runLater(incCounter, 1000).then(function() {
*   return runLater(incCounter, 2000);
* }).then(function() {
*   return runLater(incCounter, 3000);
* });*

Promises In Practice

 It is useful to understand how promises work (resolve, reject), but in practice you will often use promises that are returned to you


Promise Chaining

Objectives:
+ Describe the disadvantages of using nested callbacks
+ Return a promise from a .then callback function
+ Use a promise to make asynchronous code seem sequential

Nested Async Callbacks

* var counter = 0;
* setTimeout(function() {
*   counter++;
*   console.log("Counter:", counter);
*   setTimeout(function() {
*     counter++;
*     console.log("Counter:", counter);
*     setTimeout(function() {
*       counter++;
*       console.log("Counter:", counter);
*     }, 3000);
*   }, 2000);
* }, 1000);

Console:
Counter: 1
Counter: 2
Counter: 3

Disadvantages of Nested Callbacks
- The code is hard to read
- Logic is difficult to reason about
- The code is not modular

Returning a Promise:
Promise Chaining

* var promise = new Promise(function(resolve, reject) {
*   setTimeout(function() {
*     randomInt = Math.floor(Math.random() * 10);
*     resolve(randomInt);
*   }, 500);
* });
* 
* promise.then(function(data) {
*   console.log("Random int passed to resolve:",
*                data);
*   return new Promise(function(resolve, reject) {
*     setTimeout(function() {
*       resolve(Math.floor(Math.random() * 10));
*     }, 3000);
*   });
* }).then(function(data) {
*   console.log("Second random int passed to resolve:",
*                data);
* });

*/