// Reducer
import reducers from "./reducers/index";

// Redux Thunk
import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";

// Redux Dev Tools in Browser Extension
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducers, // Reducer
  enhancer(applyMiddleware(reduxThunk)) // Redux Thunk
);

export default store;
