const initialState = {
  count: 0
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      var newState = { ...state };
      newState.count++;
      return newState;
    case "DECREMENT":
      var newState = { ...state };
      newState.count--;
      return newState;
    default:
      return state;
  }
}

const store = Redux.createStore(rootReducer);

$(document).ready(function() {
  let currentState = store.getState(); // {count: 0}
  $("#counter").text(currentState.count); // h1 text to be 0

  $("#increment").on("click", function() {
    store.dispatch({
      type: "INCREMENT"
    });
    let currentState = store.getState(); // {count: 1}
    $("#counter").text(currentState.count); // h1 text to be 1
  });

  $("#decrement").on("click", function() {
    store.dispatch({
      type: "DECREMENT"
    });
    let currentState = store.getState(); // {count: 0}
    $("#counter").text(currentState.count); // h1 text to be 0
  });
});
