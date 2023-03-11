const { fetchUsers } = require("./app/features/user/userSlice");
const store = require("./app/store");
const cakeActions = require("./app/features/cake/cakeSlice").cakeActions;
const iceCreamActions =
  require("./app/features/icecream/iceCreamSlice").iceCreamActions;

console.log("Initial State ", store.getState());
const unsubscribe = store.subscribe(() => {
  // console.log("Updated State ", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.restocked(2));
store.dispatch(fetchUsers());

unsubscribe();
