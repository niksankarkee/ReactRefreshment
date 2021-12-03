// const redux = require("redux");

// const counterReducer = (state = { counter: 0 }, action) => {
//   return {
//     counter: state.counter + 1,
//   };
// };

// const store = redux.createStore(counterReducer);

// const counterSuscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };

// store.subscribe(counterSuscriber);

// store.dispatch({ type: "increment" });

// const redux = require("redux");

// const initialState = { counter: 0 };

// const incrementReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   }

//   return state;
// };

// const store = redux.createStore(incrementReducer);

// const counterSubscriber = () => {
//   const latestState = store.getState();

//   console.log(latestState);
// };

// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });
// store.dispatch({ type: "increment" });
// store.dispatch({ type: "decrement" });

const redux = require("redux");

const initialState = { counter: 0 };

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestValue = store.getState();
  console.log(latestValue);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "decrement" });
