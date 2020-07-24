/* Closures and the Keyword 'this'

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives
├ Understand what a closure is and what it is not
├ Use a closure to emulate private variables
└ List use cases for closures in the real world

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Closure Defined

• A closure is a function that makes use of variables defined in outer functions that have previously returned

• What does that mean? Sometimes an example is worth 1000 words (or slides)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Our first closure

▒  function outer(a){
▒      return function inner(b) {
▒ 
▒       // the inner function is making use of the variable 
▒       // "a" which was defined in an outer function called
▒       // "outer" and by the time inner is called, that 
▒       // outer function has returned this function called
▒       // "inner" is a closure!
▒ 
▒          return a + b;
▒      }
▒  }
▒  
▒  outer(5)(5); // 10
▒  
▒  var storeOuter = outer(5);
▒  storeOuter(10); // 15

A couple things to note here:

• We have to 'return' the inner function for this to work
• We can either call the inner function right away by using an extra () or we can store the result of the function in a variable
• We do NOT have to give the inner function a name - we can make it anonymous (we just called it "inner" for learning purposes)


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Is this a closure?

▒ function outerFn(){
▒     var data = "something from outer";
▒     return function innerFn(){
▒         return "Just returned from the inner function";
▒     }
▒ }

What about this?

▒ function outerFn(){
▒     var data = "something from outer";
▒     return function innerFn(){
▒         var innerData = "something from inner";
▒         return data + " " + innerData;
▒     }
▒ }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution
The first one is NOT, but the second one is. Why?

!! Because a closure only exists when an inner function makes use of variables defined from an outer function that has returned. 
If the inner function does not make use of any of the external variables all we have is a nested function.  !!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How Closures Work

(!) Only variables used in the inner function are remembered !

▒ function outerFn(){
▒     var data = "something from outerFn";
▒     var fact = "Remember me!";
▒     return function innerFn(){
▒ 	// if you keep the chrome dev tools open
▒ 	// this will pause our code and place us 
▒   // in the sources tab where we can examine 
▒ 	// variables debugger 
▒         return fact;
▒     }
▒ }
▒ 
▒ var outer = outerFn();
▒ outer();

(!) Closures don't remember everything from an outer function  - just the variables they need!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Why do I need to know this?

So what are some other use cases for closures? Can you think of some?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Private Variables

In other languages, there exists support for variables that can not be modified externally. We call those private variables, but in JavaScript we don't have that built in. No worries - closures can help!

▒ function counter(){
▒     var count = 0;
▒     return function(){
▒         count++;
▒         return count;
▒     }
▒ }

▒ var counter1 = counter();
▒ counter1(); // 1
▒ counter1(); // 2
▒ 
▒ var counter2 = counter();
▒ counter2(); // 1
▒ counter2(); // 2
▒ 
▒ counter1(); // 3 this is not affected by counter2!
▒ 
▒ count; // ReferenceError: count is not defined - because it is private!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

More Privacy

Let's look at this example:

▒ function classRoom(){
▒     var instructors = ["Elie", "Colt"];
▒     return {
▒         getInstructors: function(){
▒             return instructors;
▒         },
▒         addInstructor: function(instructor){
▒             instructors.push(instructor);
▒             return instructors;
▒         }
▒     }
▒ }

▒ var course1 = classRoom();
▒ course1.getInstructors(); // ["Elie", "Colt"]
▒ course1.addInstructor("Matt"); // ["Elie", "Colt","Matt"]
▒ course1.addInstructor("Tim"); // ["Elie", "Colt","Matt", 
▒                               // "Tim"]
▒ course1.getInstructors(); // ["Elie", "Colt","Matt", "Tim"]
▒ 
▒ var course2 = classRoom();
▒ course2.getInstructors(); // ["Elie", "Colt"] - not 
▒                           // affected by course1
▒ 
▒ // the instructors variable is private, you're stuck with 
▒ Colt and Elie...sort of

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Correct Implementation

▒ function classRoom(){
▒     var instructors = ["Elie", "Colt"];
▒     return {
▒         getInstructors: function(){
▒             return instructors.slice();
▒         },
▒         addInstructor: function(instructor){
▒             instructors.push(instructor);
▒             return instructors.slice();
▒         }
▒     }
▒ }

▒ var course1 = classRoom();
▒ course1.getInstructors().pop(); // ["Colt"]
▒ course1.getInstructors().pop(); // "Colt"
▒ course1.getInstructors(); // ["Colt", "Elie"]
▒ 
▒ // now the instructors variable is truly private
▒ // you're stuck with Colt and Elie...for good!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/

(() => {
  function classRoom() {
    var instructors = ['Elie', 'Colt'];
    return {
      getInstructors: function () {
        return instructors.slice();
      },
      addInstructor: function (instructor) {
        instructors.push(instructor);
        return instructors.slice();
      },
    };
  }

  var course1 = classRoom();
  console.log(course1.getInstructors().pop()); // "Colt"
  console.log(course1.getInstructors().pop()); // "Colt"
  console.log(course1.getInstructors()); // ["Colt", "Elie"]

  // now the instructors variable is truly private
  // you're stuck with Colt and Elie...for good!
})();

/*

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

• Closure exists when an inner function makes use of variables declared in an outer function which has previously returned
• Closure does not exist if you do not return an inner function and if that inner function does not make use of variables returned by an outer function
• JavaScript will only remember values that are being used inside of the inner function, not all variables defined in the outer function
• We can use closures to create private variables and write better code that isolates our logic and application

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The Keyword 'this'

Objectives
► Define what the keyword 'this' is
► Understand the four ways to always figure out what the keyword 'this' is
► Try as hard as possible not to use the word "this" in a sentence

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So what is 'this'?

• A reserved keyword in JavaScript
• Usually determined by how a function is called (what we call 'execution context')
• Can be determined using four rules (global, object/implicit, explicit, new)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

1 - Global Context

When 'this' is not inside of a declared object

▒ console.log(this); // window
 
▒ function whatIsThis(){
▒     return this;
▒ }
▒ 
▒ whatIsThis(); // window
 
▒ function variablesInThis(){
▒     this.person = "Elie"
▒ }
▒ 
▒ // the keyword this inside the function is the window
▒ variablesInThis() 
▒ 
▒ console.log(person); // Elie

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Strict Mode

▒ "use strict"
▒ 
▒ console.log(this); // window
▒ 
▒ function whatIsThis(){
▒     return this;
▒ }
▒ 
▒ whatIsThis(); // undefined
 
▒ "use strict"
▒ 
▒ function variablesInThis(){
▒     // since we are in strict mode this is undefined
▒     // so what happens if we add a property on undefined?
▒     // let's see what happens when we call the function...
▒     this.person = "Elie";
▒ }
▒ 
▒ variablesInThis(); // TypeError, can't set person on undefined! 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

2 - Implicit/Object
When the keyword 'this' IS inside of a declared object

// strict mode does NOT make a difference here

▒ var person = {
▒     firstName: "Elie",
▒     sayHi: function(){
▒         return "Hi " + this.firstName;
▒     },
▒     determineContext: function(){
▒         return this === person;
▒     }
▒ }

▒ person.sayHi(); // "Hi Elie"

▒ person.determineContext(); // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Check your progress

What should the keyword 'this' refer to here?

▒ var person = {
▒     firstName: "Elie",
▒     determineContext: this;
▒ }
▒ 
▒ person.determineContext; // window

A keyword 'this' is defined when a function is run! 
There is not a function being run here to create a new value of the keyword 'this' so the value of 'this' is still the window!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Nested Objects

What happens when we have a nested object?

▒ var person = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         return "Hi " + this.firstName;
▒     },
▒     determineContext: function(){
▒         return this === person;
▒     },
▒     dog: {
▒         sayHello: function(){
▒             return "Hello " + this.firstName;
▒         },
▒         determineContext: function(){
▒             return this === person;
▒         }        
▒     }
▒ }

▒ person.sayHi(); // "Hi Colt"
▒ person.determineContext(); // true
▒ 
▒ // but what is the value of the keyword this right now?
▒ person.dog.sayHello(); // "Hello undefined"
▒ person.dog.determineContext(); // false

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

3 - Explicit Binding
Choose what we want the context of 'this' to be using call, apply or bind

▒ NAME OF         	PARAMETERS	          INVOKE 
▒ METHOD                               IMMEDIATELY?

▒ Call	    thisArg, a, b, c, d , ...	     Yes
▒ Apply	    thisArg, [a,b,c,d, ...]	       Yes
▒ Bind	    thisArg, a, b, c, d , ...	     No

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Fixing Up With Call

▒ var person = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         return "Hi " + this.firstName;
▒     },
▒     determineContext: function(){
▒         return this === person;
▒     },
▒     dog: {
▒         sayHello: function(){
▒             return "Hello " + this.firstName;
▒         },
▒         determineContext: function(){
▒             return this === person;
▒         }        
▒     }
▒ }

▒ person.dog.sayHello.call(person); // "Hello Colt"
▒ person.dog.determineContext.call(person); // true
▒ 
▒ // Using call worked! 
▒ // Notice that we do NOT invoke sayHello or determineContext


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using Call in the Wild

Let's examine a very common use case

▒ var colt = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         return "Hi " + this.firstName; 
▒     }
▒ }
▒ 
▒ var elie = {
▒     firstName: "Elie",
▒     // Look at all this duplication :(
▒     sayHi: function(){
▒         return "Hi " + this.firstName; 
▒     }
▒ }

▒ colt.sayHi(); // Hi Colt
▒ elie.sayHi(); // Hi Elie (but we had to copy and paste the function from above...)

How can we refactor the duplication using call?
How can we "borrow" the sayHi function from colt and set the value of 'this' to be elie?


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using Call in the Wild

Solution

▒ var colt = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         return "Hi " + this.firstName; 
▒     }
▒ }
▒ 
▒ var elie = {
▒     firstName: "Elie"
▒ }
▒ 
▒ colt.sayHi(); // Hi Colt
▒ colt.sayHi.call(elie); // Hi Elie 
▒ 
▒ // much better! 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One Step Further

Let's make a sayHi function for anyone!

▒ function sayHi(){
▒     return "Hi " + this.firstName; 
▒ }
▒ 
▒ var colt = {
▒     firstName: "Colt"
▒ }
▒ 
▒ var elie = {
▒     firstName: "Elie"
▒ }

▒ sayHi.call(colt); // Hi Colt
▒ sayHi.call(elie); // Hi Elie 

▒ // one function for many use cases - awesome!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Another Use Case For Call

Let's imagine we want to select all the 'divs' on a page

▒ var divs = document.getElementsByTagName('divs');

How can we find all the divs that have the text "Hello"?
Using filter would be nice!

▒ divs.filter // undefined

Unfortunately, divs is not an array, it's an array like object so filter won't work.

So how can we convert an array-like-object into an array?

Very similar to the way we make copies of arrays - using slice!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How can we do this?

call to the rescue!

Let's use the slice method on arrays, but instead of the target of slice (the keyword this) being that array, let's set the target of the keyword `this` to be our divs array-like-object.

▒ var divsArray = [].slice.call(divs);
▒ // you might also see this 
▒ //  as Array.prototype.slice.call(divs) 
▒ // they do the same thing

▒ divsArray.filter(function(val){
▒     return val.innerText === 'Hello';
▒ });

What we are doing is trying to slice something that is not actually an array! In JavaScript, slice will not work on all data types, but it works very well on array-like-objects

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What about Apply?

▒ function sayHi(){
▒     return "Hi " + this.firstName; 
▒ }
▒ 
▒ var colt = {
▒     firstName: "Colt"
▒ }
▒ 
▒ var elie = {
▒     firstName: "Elie"
▒ }
▒ 
▒ sayHi.call(colt); // Hi Colt
▒ sayHi.apply(elie); // Hi Elie 
▒ 
▒ // well this seems the same....

It seems identical...but what happens if we start adding parameters?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Let's add parameters!

It's almost identical to call - except the parameters!

▒ function addNumbers(a,b,c,d){
▒     return this.firstName + " just calculated " + (a+b+c+d);
▒ }
▒ 
▒ var colt = {
▒     firstName: "Colt"
▒ }
▒ 
▒ var elie = {
▒     firstName: "Elie"
▒ }

▒ addNumbers.call(elie,1,2,3,4) // Elie just calculated 10

▒ addNumbers.apply(elie,[1,2,3,4]) // Elie just calculated 10

▒ // What differences do you see?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

When to use apply

(!) When a function does not accept an array, apply will spread out values in an array for us!

▒ var nums = [5,7,1,4,2];
▒ 
▒ Math.max(nums); // NaN 

▒ Math.max.apply(this, nums); // 7

▒ function sumValues(a,b,c){
▒     return a+b+c;
▒ }
▒ 
▒ var values = [4,1,2];
▒ 
▒ sumValues(values); // "4,1,2undefinedundefined

▒ sumValues.apply(this,[4,1,2]); // 7

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

And what about bind?

The parameters work like call, but bind returns a function with the context of 'this' bound already!

▒ function addNumbers(a,b,c,d){
▒     return this.firstName + " just calculated " + (a+b+c+d);
▒ }

▒ var elie = {
▒     firstName: "Elie"
▒ }

▒ var elieCalc = addNumbers.bind(elie,1,2,3,4); 
▒ // function(){}...
▒ elieCalc(); // Elie just calculated 10

▒ // With bind - we do not need to know all the arguments up ▒ front!

▒ var elieCalc = addNumbers.bind(elie,1,2); // function(){}.. 
▒ elieCalc(3,4); // Elie just calculated 10  

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Bind in the wild

Very commonly we lose the context of 'this', but in functions that we do not want to execute right away!

▒ var colt = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         setTimeout(function(){
▒             console.log("Hi " + this.firstName);
▒         },1000);
▒     }
▒ }

▒ colt.sayHi(); // Hi undefined (1000 milliseconds later)

Use bind to set the correct context of 'this'

▒ var colt = {
▒     firstName: "Colt",
▒     sayHi: function(){
▒         setTimeout(function(){
▒             console.log("Hi " + this.firstName);
▒         }.bind(this),1000);
▒     }
▒ }

▒ colt.sayHi(); // Hi Colt (1000 milliseconds later)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

4 - The 'new' keyword

We can set the context of the keyword 'this' using the 'new' keyword - it does quite a bit more as well which we will discuss further when we talk about OOP

▒ function Person(firstName, lastName){
▒     this.firstName = firstName;
▒     this.lastName = lastName;
▒ }

▒ var elie = new Person("Elie", "Schoppik");

▒ elie.firstName; // "Elie"
▒ elie.lastName; // "Schoppik"

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap
• The keyword 'this' is a reserved keyword in JavaScript and its value is determined at execution
• It is either set using the global context, object binding, explicit binding, or the new keyword
• When set in the global context in a function, it is either the global object (window if in the browser) or undefined (if we are using strict mode)
• To explicitly set the value of the keyword 'this', we use call, apply, or bind
• We can also use the 'new' keyword to set the context of 'this', which we will discuss when we talk about Object Oriented Programming

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
