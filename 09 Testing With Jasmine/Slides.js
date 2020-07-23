/* Testing with Jasmine

Objectives
> Understand what Jasmine and unit testing are
> Define describe, it, matchers, and spies
> Write better tests with before and after hooks
> Write asynchronous tests with clocks and done callbacks
> Compare and contrast TDD and BDD and differentiate between unit and other kinds of tests
> Write unit tests using Jasmine!

Unit tests, test parts of an application, (or units). Very commonly, each unit is tested individually and independently to ensure an application is running as expected

What we need
- A framework to write tests 
- A way of describing the code we are testing

- A tool where we can make assertions or expectations about our code

Jasmine
+ Comes with everything we need to test our code!
+ Works will all kinds of JavaScript environments
+ Simple syntax to quickly get up and running with
+ We will be working in the browser!

How it works
-> Create an html file 
--> Link CSS and JavaScript tags
---> Start writing tests!

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <title>Jasmine Tests</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.css">
// </head>
// <body>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine-html.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/boot.js"></script>
// </body>
// </html>

Essential Keywords

describe 
- "let me describe ____ to you."

it 
- "let me tell you about _____"

expect 
- "here's what I expect"

A conceptual exercise

* describe("Earth")
*            it("is round")
*               expect(earth.isRound.toBe(true))
*            it("is the third planet from the sun")
*               expect(earth.numberFromSun).toBe(3)

In Code

// var earth = {
//   isRound: true,
//   numberFromSun: 3
// }

// describe("Earth", function(){
//   it("is round", function(){
//     expect(earth.isRound).toBe(true)
//   });
//   it("is the third planet from the sun", function(){
//     expect(earth.numberFromSun).toBe(3)
//   });
// });

describe, it, and expect are given to us by Jasmine!

Putting it all together

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.css">
// </head>
// <body>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine-html.js"></script>
//   <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/boot.js"></script>
//   <script>
//     var earth = {
//       isRound: true,
//       numberFromSun: 3
//     }
//     describe("Earth", function(){
//       it("is round", function(){
//         expect(earth.isRound).toBe(true)
//       });
//       it("is the third planet from the sun", function(){
//         expect(earth.numberFromSun).toBe(3)
//       });
//     });
//   </script>
// </body>
// </html>

Matchers
toBe / not.toBe
toBeCloseTo
toBeDefined
toBeFalsey / toBeTruthy
toBeGreaterThan / toBeLessThan
toContain
toEqual
jasmine.any()

*/ (() => {
  describe('Jasmine Matchers', function () {
    it('allows for === and deep equality', function () {
      expect(1 + 1).toBe(2);
      expect([1, 2, 3]).toEqual([1, 2, 3]);
    });

    it('allows for easy precision checking', function () {
      expect(3.1415).toBeCloseTo(3.14, 2);
    });

    it('allows for easy truthy / falsey checking', function () {
      expect(0).toBeFalsy();
      expect([]).toBeTruthy();
    });
    it('allows for checking contents of an object', function () {
      expect([1, 2, 3]).toContain(1);
      expect({ name: 'Elie' }).toEqual(
        jasmine.objectContaining({ name: 'Elie' })
      );
    });
    it('allows for easy type checking', function () {
      expect([]).toEqual(jasmine.any(Array));
      expect(function () {}).toEqual(jasmine.any(Function));
    });
  });
})();

// Anything wrong here?
(() => {
  describe('#push', function () {
    it('adds elements to an array', function () {
      var arr = [1, 3, 5];
      arr.push(7);
      expect(arr).toEqual([1, 3, 5, 7]);
    });

    it('returns the new length of the array', function () {
      var arr = [1, 3, 5];
      expect(arr.push(7)).toBe(4);
    });

    it('adds anything into the array', function () {
      var arr = [1, 3, 5];
      expect(arr.push({})).toBe(4);
    });
  });
})();
// defining the arr variable over and over!

//   BeforeEach
// run before each "it" callback
(() => {
  describe('Arrays', function () {
    var arr;
    beforeEach(function () {
      arr = [1, 3, 5];
    });
    it('adds elements to an array', function () {
      arr.push(7);
      expect(arr).toEqual([1, 3, 5, 7]);
    });

    it('returns the new length of the array', function () {
      expect(arr.push(7)).toBe(4);
    });

    it('adds anything into the array', function () {
      expect(arr.push({})).toBe(4);
    });
  });
})();

// afterEach
// run after each "it" callback - useful for teardown
(() => {
  describe('Counting', function () {
    var count = 0;

    beforeEach(function () {
      count++;
    });

    afterEach(function () {
      count = 0;
    });

    it('has a counter that increments', function () {
      expect(count).toBe(1);
    });

    it('gets reset', function () {
      expect(count).toBe(1);
    });
  });
})();

// beforeAll / afterAll
// run before/after all tests! Does not reset in between

(() => {
  var arr = [];
  beforeAll(function () {
    arr = [1, 2, 3];
  });
  describe('Counting', function () {
    it('starts with an array', function () {
      arr.push(4);
      expect(1).toBe(1);
    });
    it('keeps mutating that array', function () {
      console.log(arr); // [1,2,3,4]
      arr.push(5);
      expect(1).toBe(1);
    });
  });
  describe('Again', function () {
    it('keeps mutating the array...again', function () {
      console.log(arr); // [1,2,3,4,5]
      expect(1).toBe(1);
    });
  });
})();

// Nesting describe
(() => {
  describe('Array', function () {
    var arr;
    beforeEach(function () {
      arr = [1, 3, 5];
    });
    describe('#unshift', function () {
      it('adds an element to the beginning of an array', function () {
        arr.unshift(17);
        expect(arr[0]).toBe(17);
      });
      it('returns the new length', function () {
        expect(arr.unshift(1000)).toBe(4);
      });
    });
    describe('#push', function () {
      it('adds elements to the end of an array', function () {
        arr.push(7);
        expect(arr[arr.length - 1]).toBe(7);
      });
      it('returns the new length', function () {
        expect(arr.push(1000)).toBe(4);
      });
    });
  });
})();

// Pending tests
// Sometimes you just don't know...

(() => {
  describe('Pending specs', function () {
    xit('can start with an xit', function () {
      expect(true).toBe(true);
    });

    it('is a pending test if there is no callback function');

    it('is pending if the pending function is invoked inside the callback', function () {
      expect(2).toBe(2);
      pending();
    });
  });
})();

// One or more expect

(() => {
  // Not great
  describe("Earth", function(){
    it('is round and has a method to check what number it is from the sun', function(){
        expect(earth.isRound()).toBe(true);
        expect(earth.howFarFromSun).toBe(jasmine.any(Function);
        expect(earth.howFarFromSun()).toBe(3);
    });
});
})();

(() => {
  // Better
  describe("Earth", function(){
    it('is round', function(){
        expect(earth.isRound()).toBe(true);
    });
    it('has a method to check what number it is from the sun', function(){
        expect(earth.howFarFromSun).toBe(jasmine.any(Function);
        expect(earth.howFarFromSun()).toBe(3);
    });
});
})();

// You do not always need a single expect per it block, if you are testing the same piece of functionality

// Spies
// > Jasmine has test double functions called spies.
// > A spy can stub (mimic) any function and track calls to it and all arguments.
// > Spies only exists in the describe or it block in which it is defined,
// > Spies are removed after each spec.
// > There are special matchers for interacting with spies.

(() => {
  // Creating a spy

  function add(a,b,c){
    return a+b+c;
  }

  describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
      addSpy = spyOn(window, 'add');
      result = addSpy();
    })
    it("is can have params tested", function(){
      expect(addSpy).toHaveBeenCalled();
    });
  });

})();

(() => {
  // Testing parameters
  function add(a,b,c){
    return a+b+c;
  }

  describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
      addSpy = spyOn(window, 'add');
      result = addSpy(1,2,3);
    });
    it("is can have params tested", function(){
      expect(addSpy).toHaveBeenCalled();
      expect(addSpy).toHaveBeenCalledWith(1,2,3);
    });
  });
})();

(() => {
  // Returning a value

  function add(a,b,c){
    return a+b+c;
  }

  describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
      addSpy = spyOn(window, 'add').and.callThrough();
      result = addSpy(1,2,3);
    })
    it("can have a return value tested", function(){
      expect(result).toEqual(6);
    });
  });

})();

(() => {
  // Testing frequency

  function add(a,b,c){
    return a+b+c;
  }

  describe("add", function(){
    var addSpy, result;
    beforeEach(function(){
      addSpy = spyOn(window, 'add').and.callThrough();
      result = addSpy(1,2,3);
    })
    it("is can have params tested", function(){
      expect(addSpy.calls.any()).toBe(true);
      expect(addSpy.calls.count()).toBe(1);
      expect(result).toEqual(6);
    });
  });
})();

// Clock
// - The Jasmine Clock is available for testing time dependent code.
// - It is installed by invoking jasmine.clock().install()
// - Be sure to uninstall the clock after you are done to restore the original functions.

// setTimeout

(() => {
  describe("a simple setTimeout", function(){
    var sample;
    beforeEach(function() {
      sample = jasmine.createSpy("sampleFunction");
      jasmine.clock().install();
    });
  
    afterEach(function() {
      jasmine.clock().uninstall();
    });
  
    it("is only invoked after 1000 milliseconds", function(){
      setTimeout(function() {
        sample();
      }, 1000);
      jasmine.clock().tick(999);
      expect(sample).not.toHaveBeenCalled();
      jasmine.clock().tick(1);
      expect(sample).toHaveBeenCalled();
    });
  });
})();

(() => {
  // setInterval

  describe("a simple setInterval", function(){
    var dummyFunction;
  
    beforeEach(function() {
      dummyFunction = jasmine.createSpy("dummyFunction");
      jasmine.clock().install();
    });
  
    afterEach(function() {
      jasmine.clock().uninstall();
    });
  
    it("checks to see the number of times the function is invoked", function(){
      setInterval(function() {
        dummyFunction();
      }, 1000);
      jasmine.clock().tick(999);
      expect(dummyFunction.calls.count()).toBe(0);
      jasmine.clock().tick(1000);
      expect(dummyFunction.calls.count()).toBe(1);
      jasmine.clock().tick(1);
      expect(dummyFunction.calls.count()).toBe(2);
    });
  });
})();

// Testing async code
// + Jasmine also has support for running specs that require testing async code    
// + beforeAll, afterAll, beforeEach, afterEach, and it take an optional single argument (commonly called 'done') that should be called when the async work is complete.
// + A test will not complete until its 'done' is called.    

(() => {
  // Async tests

  function getUserInfo(username){
    return $.getJSON('https://api.github.com/users/' + username);
  }

  describe("#getUserInfo", function(){
    it("returns the correct name for the user", function(done){
      getUserInfo('elie').then(function(data){
        expect(data.name).toBe('Elie Schoppik');
        done();
      });
    });
  });

  // notice 'done' being passed and used in the callback function
})();
/*

TDD - Test Driven Development
> Write the tests
> See the tests fail
> Write code to pass the tests
> Refactor code as necessary
> Repeat

BDD - Behavior Driven Development

> A subset of TDD
> Not mutually exclusive with TDD
> Involves being verbose with our style and describing the behavior of the functionality
> Helpful when testing the design of the software

Other kinds of tests
> Integration tests
> Acceptance tests
> Stress tests

Recap
> Unit testing involves testing pieces of functionality
> Jasmine is a testing framework that allows us to easily write unit tests
> Jasmine has quite a few matchers for testing almost any kind of expectation
> Using beforeEach / afterEach / beforeAll / afterAll hooks can help reduce duplication and confusion
> Jasmine provides spies for mimicking the behavior of a function
> Jasmine provides a clock object for testing timers and a callback function for testing asynchronous code
> Unit testing is just one part of testing applications

*/
