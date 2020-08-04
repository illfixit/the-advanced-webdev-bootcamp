/* State

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Intro to State

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Define state in React
+ Create a component with a constructor and state
+ Describe what happens when setState is called

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

State

+ Stateful data
+ Data in our application that can change

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

State Example

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: 'red' };
  }
  render() {
    return (
      <div>
        My favorite color:
        {this.state.favColor}
      </div>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setState

The correct way to change state in your application

Simplest Usage: setState accepts an object with new properties and values for this.state

this.setState({    });

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { favColor: 'red' };

    setTimeout(() => {
      this.setState({favColor: 'blue'})
    }, 3000);
  }
  render() {
    return (
      <div>
        My favorite color:
        {this.state.favColor}
      </div>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pure Functions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Define a pure function

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pure Function

>> it is a function with no side effects
>> it does not modify its inputs
>> It's repeatable (same inputs -> same outputs)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Not A Pure Function

function doubleVals(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pure Function

function doubleVals(arr) {
  return arr.map(v => v * 2);
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Not A Pure Function

var person = {id: 53, name: "Tim"};
function addJob(job){
  person.job = job;
}
addJob("Instructor");


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Pure Function 

var person = {id: 53, name: "Tim"};
function addJob(personObj, job){
  return Object.assign({},
                       perosnObj,
                       {job});
}
addJob(person, "Instructor");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Object Spread

var person = {id: 53, name: "Tim"};
function addJob(personObj, job){
  return {...personObj, job}; 
}
addJob(person, "Instructor");

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What does this have to do with React?
All changes to this.state

should be pure

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
>>>>>     >>>>>     >>>>>     >>>>>     >>>>>     >>>>>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Component
Architecture

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Pass state to child components as props
+ Define which components own state
+ Use stateless functional components

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

How Is State Shared?

State is always passed from a parent down to a child component as a prop

State should not be passed to a sibling or a parent

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Who owns the state?

class App extends Component {  
  render() {
    return (            
      <div>
       <Navbar />       // Wants State       Sib-
       <TicTacToe />    // Owns the State    lings
      </div>            
    );
  }
}

Navbar and TicTacToe are siblings -> App should have State

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Bad Practice: Don't Do This

class InstructorItem extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: this.props.name,
      hobbies: this.props.hobbies
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h4>
         Hobbies: {this.state.hobbies.join(", ")}
        </h4>
      </div>
    );
  }
}

! Never assign prop to your state !

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
Stateless Functional Component

>> Components implemented using a function, not a class
>> The function implements the render method only: no constructor, no state

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
Stateless Functional Component


import React from 'react';

const Greeting = props => (
  <h1>Hello, {props.name}</h1>
);

export default Greeting;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Thinking In React
https://facebook.github.io/react/
docs/thinking-in-react.html

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setState Can Be Tricky

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

+ Use a function as the first parameter to setState
+ Add a callback to setState to determine when the state is up to date

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setState That Depends on Previous State

this.state = { counter: 1 };

this.setState({
  counter: this.state.counter + 1
});

this.setState({
  counter: this.state.counter + 1
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setState is Asychronous

this.setState({
  counter: this.state.counter + 1
});

Object.assign({},
  {counter: this.state.counter + 1},
  {counter: this.state.counter + 1},
  {counter: this.state.counter + 1},
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Solution: Update Function

this.setState((prevState, props) => {
  return {
    counter: prevState.counter + 1
  };
});

Rule: When a setState depends on previous state, use a function parameter

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

setState is Asynchronous

this.setState({name: "Tim"});
// Won't be updated yet
console.log(this.state.name);

this.setState({name: "Tim"}, () => {
  console.log(
    "Now state is up to date",
    this.state.name
  );  
});


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
