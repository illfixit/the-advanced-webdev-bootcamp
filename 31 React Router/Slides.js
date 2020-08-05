/* React Router

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

HTML5 History Object

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Modify the address bar with history.pushState
>> Describe how bookmarking a single page application works

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

History
HTML5 introduced the history object

history.back();
history.forward();
history.pushState({}, 'title', '/newpage');

Allows javascript to manipulate the browser history

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Changes To History

>> Changes the url address bar
>> Changes the browser's local navigation history
>> DOES NOT cause the browser to make a GET request

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

History

More Info
https://developer.mozilla.org/en-US/docs/Web/API/History_API

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

What Will We Use History For?

>> To create a good single page application, we want to have it feel like a normal website

>> Browser back button, internal links, etc should all seem to behave like a page with server rendering
Server Side Rendering

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Server Side Rendering

HTML            --- GET / --->            Node.js

HTML <--- index.html (fully rendered) --- Node.js

HTML         --- GET /signin --->         Node.js

HTML  <---  /signin (fully rendered) ---  Node.js




~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Client Side Rendering (React)

React              --- GET / --->              Node.js

React <--- index.html (only div id="root") --- Node.js

React:
>>> Render react app
>>> Change address to /signin
>>> Render /signin component

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Handling A Bookmark

Bookmarked /user/55

React          --- GET /user/55 --->          Node.js

React <--- index.html (only div id="root") --- Node.js

React:
>>> Render react app with
>>> correct user component

! Server side support is required !

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>>>>>>>>>>>>>>>>>>> Next Section >>>>>>>>>>>>>>>>>>>>>>>>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Describe React Router v4
>> Differentiate BrowserRouter vs HashRouter
>> Use Link, Switch, and Route components

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router v4

>> A library to manage routing in your single page application

>> Version 4 was launch in March 2017 and has some big changes compared to v3

>> Version 4 is a declarative api that uses components to make rendering decisions

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BrowserRouter vs HashRouter

>> BrowserRouter uses the history object and makes changes to the URL.
>> The hash router adds hashes to the url instead 

BrowserRouter           HashRouter

/                       /#
/users                  /#users
/users/57492/messages   /#users/57492/messages

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

BrowserRouter vs HashRouter

>> BrowserRouter requires server support

>> HashRouter does not require server support

Always choose BrowserRouter if you are able


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router Install

npm install --save react-router-dom

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router Setup

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Switch And Route

import React, {Component} from 'react';
import {
 Switch, Route
} from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const About = () => (<div>ABOUT</div>);

const SwitchDemo = () => (
  <Switch>
    <Route path="/about" component={About}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Link

import React from 'react';
import {Link} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const App = () => (
  <div>
    <Link to="/">HOME</Link>
    <Link to="/about">ABOUT</Link>
    <div style={{fontSize: '3em',
                 margin: '25px'}}>
      <SwitchDemo/>
    </div>
  </div>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

NavLink

import React from 'react';
import {NavLink} from 'react-router-dom';
import SwitchDemo from './SwitchDemo';

const s={color: "red"}; //active style
const App = () => (
  <div>
    <NavLink exact activeStyle={s} to="/">
     HOME
    </NavLink>
    <NavLink exact activeStyle={s} to="/about">
      ABOUT
    </NavLink>
    <div style={{fontSize: '3em',margin: '25px'}}>
      <SwitchDemo/>
    </div>
  </div>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

>>>>>>>>>>>>>>>>>>>>>> Next Section >>>>>>>>>>>>>>>>>>>>>>

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router
(Continued)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Objectives

>> Use URL parameters for a Route
>> Define Route props
>> Define withRouter
>> Passing your own props to a component in Route (render vs component)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

URL Parameters

import React from 'react';
import {
 Switch, Route
} from 'react-router-dom';

const Homepage = () => (<div>HOMEPAGE</div>);
const Name = ({match}) => (
  <div>Hello, {match.params.name}</div>
);
const SwitchDemo = () => (
  <Switch>
    <Route path="/:name" component={Name}/>
    <Route path="/" component={Homepage}/>
  </Switch>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Route Props

A component inside of a Route gets 3 props

>> match - info about how the url matches the route component

>> location - where you are now, similar to window.location

>> history - similar to html5 history object, allows explicit changes to the url

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

withRouter

If a component is not rendered inside of a Route component, you can use withRouter to get route props

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

withRouter Example

import {
 withRouter, Switch, Route
} from 'react-router-dom';

const SwitchDemo = ({history}) => (
  <div>
    <Switch>
      <Route path="/:name" component={Name}/>
      <Route path="/" component={Homepage}/>
    </Switch>
    <button onClick={() => history.push('/')}>
      Go Home
    </button>
  </div>
);
export default withRouter(SwitchDemo);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Route:

Render vs Component

>> Use render to pass custom props to your component

>> The route component can either use render or component (never both)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Route Render Example

import {Route} from 'react-router-dom';
const teachers = ['Tim', 'Colt', 'Matt', 'Elie'];
const Teachers = ({teachers}) => (
  <ul>
    {teachers.map((teach, ind) => (
      <li key={i}>{teach}</li>
     ))}
  </ul>
);

const App = () => (
  <Route path="/teachers" render={props => (
    <Teachers {...props} teachers={teachers} />
  )}/>
);

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

React Router Docs

https://reacttraining.com/react-router/web/guides/philosophy

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

*/
