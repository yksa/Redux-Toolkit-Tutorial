const CAKE_ORDERED = "CAKE_ORDERED";

// action creator that returns action
function orderCake() {
  // action object
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}
