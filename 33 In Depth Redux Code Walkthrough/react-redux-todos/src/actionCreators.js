export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const GET_TODOS = "GET_TODOS";

function handleTodos(data) {
  debugger;
  return {
    type: GET_TODOS,
    data
  };
}

function handleAdd(todo) {
  debugger;
  return {
    type: ADD_TODO,
    todo
  };
}

function handleRemove(id) {
  debugger;
  return {
    type: REMOVE_TODO,
    id
  };
}

export function getTodos() {
  debugger;
  return dispatch => {
    return fetch("http://localhost:3001/api/todos")
      .then(res => res.json())
      .then(data => dispatch(handleTodos(data)))
      .catch(err => console.log("SOMETHING WENT WRONG!", err));
  };
}

export function addTodo(task) {
  debugger;
  return dispatch => {
    return fetch("http://localhost:3001/api/todos", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify({ task })
    })
      .then(res => res.json())
      .then(data => dispatch(handleAdd(data)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}

export function removeTodo(id) {
  debugger;
  return dispatch => {
    return fetch(`http://localhost:3001/api/todos/${id}`, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(data => dispatch(handleRemove(id)))
      .catch(err => console.log("SOMETHING WENT WRONG", err));
  };
}
