const configureStore = require("@reduxjs/toolkit").configureStore;
const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const reduxlogger = require("redux-logger");
const cakeReducer = require("./features/cake/cakeSlice");
const iceCreamReducer = require("./features/icecream/iceCreamSlice");
const userReducer = require("./features/user/userSlice");

const logger = reduxlogger.createLogger();

const store = configureStore({
  reducer: { cake: cakeReducer, iceCream: iceCreamReducer, user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
