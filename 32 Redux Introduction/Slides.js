/* Redux Introduction

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Introduction to Redux

(Without React)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Define what redux is
>> Describe actions and reducers in redux
>> Describe methods on the redux store

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Redux

>> A popular state management library 
>> Created by Dan Abramov and Andrew Clark
>> Inspired by Facebook Flux and Elm
>> Models the application state as a single JavaScript Object
>> Often used with React but it does not depend on React

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Redux Installation

npm install --save redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Action

A plain JavaScript object that must have a key called type and a string value

{
  type: "LOGOUT_USER"
}

The action can have any number of additional keys

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Reducer
A function that accepts the state and an action and returns a new state (entire state object)

function rootReducer(state={}, action) {
  switch(action.type) {
    case "LOGOUT_USER":
      return {...state, login: false}
    case "LOGIN_USER":
      return {...state, login: true}
    default:
      return state;
  }
}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Creating A Store
Use the Redux createStore function which accepts the root reducer as a paramter

const store = Redux.createStore(rootReducer);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Changing the State

The only way to change the state is by calling dispatch

const store = Redux.createStore(rootReducer);
store.dispatch({
  type: "LOGIN_USER"
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Getting The State

You can get the state of the Redux store using getState

const store = Redux.createStore(rootReducer);
store.dispatch({
  type: "LOGIN_USER"
});

const newState = store.getState();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Listening For Changes

You can add a listener to see when the state has changed

const store = Redux.createStore(rootReducer);
const changeCallback = () => {
  console.log("State has changed",
              store.getState());
}
const unsubscribe = 
   store.listen(changeCallback);


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Redux State Change


-- dispatch(action) ->
-> reducer(currentState, action) ->
-> newState ->
-> Invoke Listeners (UI Changes)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

> > > > > > > > > > >  Next Section > > > > > > > > > > > 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React With Redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Describe react-redux
>> Use the provider component to share a store
>> Use connect to mapStateToProps and mapDispatchToProps

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React-Redux

>> A library to facilitate integrating React with Redux
>> Exposes a Provider component and a connect function
>> Handles: Listeners, passing in state to a component

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React-Redux Install

npm install --save react-redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Provider

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Connect: Wrapping A Component

import React from 'react';
import {connect} from 'react-redux';
const BoldName = ({name}) => (
  <strong>{name}</strong>
);

const mapStateToProps = state => (
  { name: state.name }
);

export default 
  connect(mapStateToProps, null)(BoldName);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Connect: Wrapping A Component

import React from 'react';
import {connect} from 'react-redux';

const DelName = ({delName}) => (
  <button type="button"
    onClick={delName}>DELETE</button>
);

const mapDispatchToProps = (
  dispatch, ownProps
) => (
  { 
    delName: () => (dispatch({
      type: "DEL_NAME" 
    }))
   }
);

export default 
  connect(null, mapDispatchToProps)(DelName);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Using Wrapped Components

import React from 'react';
import BoldName from './BoldName';
import DelName from './DelName';

const App = () => (
  <div>
    <BoldName />
    <DelName />
  </div>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

> > > > > > > > > > >  Next Section > > > > > > > > > > > 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Organizing Redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Define a presentational component vs a container component
>> Define combine reducers
>> Define action creators
>> Describe a folder structure for redux

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Presentational Component

>> A component that is primarily concerned with how things look
>> It is often a stateless functional component, but does have to be ? maybe doesn't ?

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Container Component

>> Usually a stateful component that deals with application data
>> Often created using higher order components like connect or withRouter

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

combineReducers

>> A redux function that allows for reducer composition

>> Each reducer is only responsible for its piece of the entire state object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

combineReducers

import {combineReducers} from 'redux';
import currentUser from './currentUser';
import messages from './messages';

const rootReducer = combineReducers({
  currentUser,
  messages,
});

export default rootReducer;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Messages Reducer

const messages = (state=[], action) => {
  switch(action.type) {
    case "LOAD_MESSAGES":
      return [...action.messages];
    case "ADD_MESSAGE":
      return [action.message, ...state];
    default:
      return state;
  }
};

export default messages;

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Action Creators

> A function that returns an action object

const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch({
      type: "USER_LOGOUT"
    })
  },
});

const mapDispatchToProps = dispatch => ({
  onLogout() {
    dispatch(actions.userLogout())
  },
});

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Redux Directory Structure

>> /src
>>>> /actions
>>>> /components
>>>> /containers
>>>> /reducers
>>>> index.js

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
