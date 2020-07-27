/* Object Oriented Programming with JavaScript

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives
└ Define what OOP (Object Oriented Programming) is
└ Revisit the 'new' keyword and understand the four things it does
└ Use constructor functions to reduce duplication in our code
└ Use call and apply to refactor constructor functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OOP Defined

A programming model based around the idea of objects

These objects are constructed from what are called "classes", which we can think of like a blueprint. We call these objects created from classes "instances"

We strive to make our classes abstract and modular

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

OOP in JavaScript
But JavaScript does not have "classes" built into it (we have now) - so what do we do?

We use functions and objects!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Creation

Imagine we want to make a few house objects, they will all have bedrooms, bathrooms, and numSqft

var house = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
}

var house2 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
}

var house3 = {
    bedrooms: 2,
    bathrooms: 2,
    sqFeet: 1000
}

// woof...imagine if we had to make 100 of these!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A Solution
Instead of making an infinite number of different objects, let's see if we can create a function to construct these similar "house" objects.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Constructor Functions


Let's use a function as a blueprint for what each house should be - we call these kinds of functions "constructor" functions

function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

Capitalization of the function name - this is convention!
The keyword 'this' is back!
We are attaching properties onto the keyword 'this'. We would like the keyword 'this' to refer to the object we will create from our constructor function, how might we do that?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating an object

So how do we use our constructor to create objects?

function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = House(2,2,1000) // does this work?
firstHouse // undefined...guess not!

Why is this not working??

We are not returning anything from the function so our House function returns undefined
We are not explicitly binding the keyword 'this' or placing it inside a declared object. This means the value of the keyword 'this' will be the global object, which is not what we want!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The 'new' keyword

function House(bedrooms, bathrooms, numSqft){
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
firstHouse.bedrooms; // 2
firstHouse.bathrooms; // 2
firstHouse.numSqft; // 1000

So what does the new keyword do? A lot more than we might think...

It first creates an empty object
It then sets the keyword 'this' to be that empty object
It adds the line `return this` to the end of the function, which follows it
It adds a property onto the empty object called "__proto__", which links the prototype property on the constructor function to the empty object (more on this later)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Create a constructor function for a Dog

Each dog should have a name and an age.

As a bonus, add a function for each dog called 'bark', which console.log's the name of the dog added to the string 'just barked!'

// Your constructor function goes here

// this code should work if you have implemented it correctly

var rusty = new Dog('Rusty', 3); 
var fido = new Dog('Fido', 1);

rusty.bark() // Rusty just barked!
fido.bark() // Fido just barked!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution

We can add methods to our objects inside of the constructor function

// Your constructor function goes here

function Dog(name, age){
    this.name = name;
    this.age = age;
    this.bark = function(){
        console.log(this.name + " just barked!");
    }
}

var rusty = new Dog('Rusty', 3); 
var fido = new Dog('Fido', 1);

rusty.bark() // Rusty just barked!
fido.bark() // Fido just barked!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Multiple Constructors

Let's create two constructor functions, one for a Car and one for a Motorcycle - here is what it might look like

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    // we can also set properties on the keyword this
    // that are preset values
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}

Notice how much duplication is going on in the Motorcycle function. Is there any way to "borrow" the Car function and invoke it inside the Motorcycle function?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using call/apply

We can refactor our code quite a bit using call + apply

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 4;
}

function Motorcycle(make, model, year){
    // using call
    Car.call(this, make, model, year)
    this.numWheels = 2;
}

function Motorcycle(make, model, year){
    // using apply
    Car.apply(this, [make,model,year]);
    this.numWheels = 2;
}

function Motorcycle(){ // we don't need to even pass in parameters!
    // even better using apply with arguments
    Car.apply(this, arguments);
    this.numWheels = 2;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap
Object Oriented Programming is a model based on objects constructed from a blueprint. We use OOP to write more modular and shareable code

In languages that have built-in support for OOP, we call these blueprints "classes" and the objects created from them "instances"

Since we do not have built-in class support in JavaScript, we mimic classes by using functions. These constructor functions create objects through the use of the new keyword

We can avoid duplication in multiple constructor functions by using call or apply

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototypes

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

Understand what the prototype object is

Describe and diagram the relationship between __proto__, prototype, and constructor

Add methods and properties on the prototype object to write more efficient code

Explain the differences between adding methods and properties to the prototype versus the constructor function

Implement inheritance in JavaScript through the prototype object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The new keyword
Creates an object out of thin air

Assigns the value of 'this' to be that object

Adds 'return this' to the end of the function

Creates a link (which we can access as __proto__) between the object created and the prototype property of the constructor function

We previously used the new keyword to create objects from constructor functions - let's recap what it does

We're going to focus on the 4th point - let's see what that link looks like!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A Small Diagram

*           .prototype
* Person ----------------> Person
*        <---------------- .prototype
*           .constructor
*                         /.__proto__ \ 
*                       elie          colt


Every constructor function has a property on it called "prototype", which is an object

The prototype object has a property on it called "constructor", which points back to the constructor function

Anytime an object is created using the 'new' keyword, a property called "__proto__" gets created, linking the object and the prototype property of the constructor function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Code

Let's see that previous example in code

// this is the constructor function
function Person(name){
    this.name = name;
}

// these are objects created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// since we used the new keyword, we have established
// a link between the object and the prototype property
// we can access that using __proto__

elie.__proto__ === Person.prototype; // true
colt.__proto__ === Person.prototype; // true

// The Person.prototype object also has a property
// called constructor which points back to the function

Person.prototype.constructor === Person; // true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototype

Where does the prototype property fit into all of this? Remember, the prototype is shared among all objects created by that constructor function

// this is the constructor function
function Person(name){
    this.name = name;
}

// this is an object created from the Person constructor

var elie = new Person("Elie");
var colt = new Person("Colt");

Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to access properties on the prototype??

// __proto__!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Prototype Chain

How does JavaScript find methods and properties?

* Array      .__proto__    Object     .__proto__
* .prototype ------------> .prototype ----------->  null
*     ^
*     | .__proto__
*     |
*     arr


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Refactoring

Now that we know that objects created by the same constructor have a shared prototype, let's refactor some code:

function Person(name){
    this.name = name;
    this.sayHi = function(){
        return "Hi " + this.name; 
    }
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie

The code works, but it is inefficient.

Every time we make an object using the new keyword we have to redefine the sayHi function!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Refactoring

Let's put it on the prototype instead!

function Person(name){
    this.name = name;
}

Person.prototype.sayHi = function(){
    return "Hi " + this.name; 
}

elie = new Person("Elie");
elie.sayHi(); // Hi Elie

Much more efficient!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Challenge

(~) Create a constructor function for a Vehicle: every object created from this constructor should have a make, model, and year property. Each object should also have a property called isRunning, which should be set to false

(~) Every object created from the Vehicle constructor should have a function called turnOn, which changes the isRunning property to true

(~) Every object created from the Vehicle constructor should have a function called turnOff, which changes the isRunning property to false

(~) Every object created from the Vehicle constructor should have a method called honk, which returns the string "beep" ONLY if the isRunning property is true

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution

function Vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function(){
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function(){
    this.isRunning = false;
}

Vehicle.prototype.honk = function(){
    if(this.isRunning){
        return "beep!";
    }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Inheritance

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What is it?

The passing of methods and properties from one class to another

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Why?

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Do we really need to redefine sayHi on the Student.prototype? That seems repetitive...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How?

function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.sayHi = function(){
  return "Hello " + this.firstName + " " + this.lastName;
}

Assign the prototype property of one object to be another's!

function Student(firstName, lastName){
  return Person.apply(this, arguments);
}

Student.prototype = Person.prototype;

var elie = new Student('Elie', 'Schoppik');
elie.sayHi(); // "Hello Elie Schoppik"

It works!!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Not exactly...

Let's now add something onto the Student prototype object

Student.prototype.status = function(){
    return "I am currently a student!";
}

Now let's create a new object from the Person constructor.

var elie = new Person('Elie', 'Schoppik');
elie.status(); // "I am currently a student!"

Uh oh...why does the Person prototype have properties from the Student prototype? Student inherits from Person, not the other way around...

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The problem

We can't assign one object to another - it will just create a reference!

This means if we change the Student.prototype, it will affect the Person.prototype!

We still want all of the methods and properties from the Parent.prototype, but we want two totally separate objects - not a reference!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A better alternative

Object.create

Creates a brand new function and accepts as its first parameter, what the prototype object should be for the newly created object. 

This is perfect for us!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object.create in action

function Student(firstName, lastName){
  return Person.apply(this, arguments);
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.status = function(){
  return "I am currently a student!"
}

var elie = new Person('Elie', 'Schoppik');

elie.status; // undefined 

Student.prototype does not effect Person.prototype anymore!

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Why not 'new'?

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype = new Person;

This will do almost the same thing, but add additional unnecessary properties on the prototype object (since it is creating an object with undefined properties just for the prototype).

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

One missing piece

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return "Hello " + this.firstName + " " + this.lastName;
}

Student.prototype = Object.create(Person.prototype);

Student.prototype.constructor; // Person

Student.prototype.constructor = Student;

Two parts of inheritance

Set the prototype to be an object created with another prototype

Reset the constructor property

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Recap

Every time the new keyword is used, a link between the object created and the prototype property of the constructor is established - this link can be accessed using __proto__

The prototype object contains a property called constructor, which points back to the constructor function

To share properties and methods for objects created by a constructor function, place them in the prototype as it is the most efficient

To pass methods and properties from one prototype object to another, we can use inheritance which involves setting the prototype property to be a newly created object using Object.create and reseting the constructor property

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
