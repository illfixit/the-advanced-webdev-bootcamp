import { ADD_TODO, REMOVE_TODO, GET_TODOS } from "./actionCreators";

const initialState = {
  todos: []
};

export default function rootReducer(state = initialState, action) {
  debugger;
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todos: action.data };
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.todo] };
    case REMOVE_TODO:
      let todos = state.todos.filter(val => val._id !== action.id);
      return { ...state, todos };
    default:
      return state;
  }
}
