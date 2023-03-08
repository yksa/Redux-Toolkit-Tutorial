const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";

// action creator that returns action
function orderCake() {
  // action object
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

// Declare the initial state
const initialState = {
  numOfCakes: 10,
};

// (previousState, action) => newState
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

// Allow access to state via getState()
console.log("Initial State ", store.getState());

// Register listener via subscribe(listener)
const unsubscribe = store.subscribe(() =>
  console.log("Updated state ", store.getState())
);

// Allow state to be updated via dispatch(action)
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

// Remove the listener
unsubscribe();
