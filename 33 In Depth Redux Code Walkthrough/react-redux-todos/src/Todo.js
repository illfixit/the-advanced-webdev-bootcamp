import React, { Component } from "react";

const Todo = ({ task, removeTodo }) => (
  <li>
    {task}
    <button onClick={removeTodo}>X</button>
  </li>
);

export default Todo;
