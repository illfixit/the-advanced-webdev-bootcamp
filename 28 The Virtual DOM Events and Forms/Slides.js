/* The Virtual DOM Events and Forms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Virtual DOM

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Describe the virtual DOM
>> Define a synthetic events
>> Describe changes in React 16 (Fiber)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Virtual DOM

>> A data structure stored by React that tracks changes from one render state to the next

>> If something has changed from one render to the next, the browser's DOM is update (Reconciliation)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

... Reconciliation ...

App                 App

Instructor   --->   Instructor

Instructor          Instructor

Instructor

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Synthetic Events

>> Supports all the native browser events, but provides a consistent API on all browsers

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React 16

What's New In Fiber?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React 16

Render can return an array of JSX elements or a string

 render() {
   return [
     <div key='a'>First Element</div>,
     <div key='b'>Second Element</div>   
   ];
 }

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React 16

Error Boundary

https://facebook.github.io/react/blog/2017/07/26/error-handling-in-react-16.html

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React 16
Fiber
https://www.youtube.com/watch?v=ZCuYPiUIONs

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
----------------------------------------------------
 >>>>>>      >>>>>>>       >>>>>>>>       >>>>>>>>>
----------------------------------------------------
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Events

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Demonstrate an onClick event
>> Using bond functions vs inline callbacks

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

onClick

class ClickExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "tim" };
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button type="button"
          onClick={() => this.setState({name: "TIM"})}>
          UPPERCASE
        </button>
      </div>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

class ClickExample extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "tim" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState((prevState, props) => ({
      name: prevState.name.toUpperCase()
    });
  }
  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button type="button" onClick={this.handleClick}>
          UPPERCASE
        </button>
      </div>
    );
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Common Mistake

render() {
  return (
    <div>
      <p>{this.state.name}</p>
      <button type="button" onClick={this.handleClick()}>
        UPPERCASE   // The function will be invoked >()<
      </button>     // immediatley, not on the event
    </div>
  );
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

In Line Arrow Functions vs Bind

No noticeable performance benefits of using bind in the constructor

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
----------------------------------------------------
 >>>>>>      >>>>>>>       >>>>>>>>       >>>>>>>>>
----------------------------------------------------
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Forms

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Describe a controlled component vs uncontrolled
>> Handle a submit using onSubmit

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Uncontrolled Component

<input type="text" />

React is not aware of what the user is typing, the browser is in charge of the state

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Controlled Component

<input type="text" value={this.state.inputText}/>

React is now in control of the state via this.state.inputText, but the input can't be updated

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Controlled Component With Update

 <input
   type="text"
   name="inputText"
   value={this.state.inputText}
   onChange={(e) => {
     this.setState({inputText: e.target.value})
   }}
/>

React is now in control of the state via this.state.inputText and the state can change via onChange

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

onSubmit

<form onSubmit={(e) => {
  e.preventDefault();
  const data = [...this.state.data,
                this.state.inputText];
  this.setState({data, inputText: ''});
}}>
  <input
     type="text"
     name="inputText"
     value={this.state.inputText}
     onChange={(e) => {
       this.setState({[e.target.name]: e.target.value})
     }}
  />
</form>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Common Mistake

<form>
  <input
     type="text"
     name="inputText"
     value={this.state.inputText}
     onChange={(e) => {
       this.setState({[e.target.name]: e.target.value})
     }}
  />
  <button

    // A button's click is not the same as a submit, use onSubmit

    onClick={ // trying to handle submit here } 
    type="submit"
  >
   SAVE
  </button>
</form>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

----------------------------------------------------
 >>>>>>>       >>>>>>>       >>>>>>>>       >>>>>>>
----------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

refs

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Define a ref in react
>> Use a ref on an uncontrolled input component

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

refs

>> A direct reference to a DOM element

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Use Cases (From React Docs)

>> Managing focus, text selection, or media playback
>> Triggering imperative animations
>> Integrating with third-party DOM libraries

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Warning!

<< Do not use refs when the job can be done with React >>

<< You should not need direct DOM access for most tasks >>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

ref Example

<form onSubmit={(e) => {
  e.preventDefault();
  // access to the form value:
  console.log(this.inputText.value);
}}>
  <input
     type="text"
     ref={(input) => this.inputText = input}
  />
</form>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

----------------------------------------------------
 >>>>>>>       >>>>>>>       >>>>>>>>       >>>>>>>
----------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Memory Game

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

HINTS

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
};
Card States

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Memory Game State


let cards = [
  {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
  {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
  {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
  {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
  {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
  {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
  {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
  {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
  {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
  {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
];
this.state = {cards: shuffle(cards)};

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
