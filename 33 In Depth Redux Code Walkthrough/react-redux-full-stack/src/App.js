import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Link, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to the App!</h1>
        <p>
          <Link to="/todos">See my todos!</Link>
        </p>
        <p>
          <Link to="/todos/new">Add a todo!</Link>
        </p>
        <Route path="/todos" component={TodoList} />
      </div>
    );
  }
}

export default App;
