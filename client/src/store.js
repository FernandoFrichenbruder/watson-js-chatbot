import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import combinedReducers from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middleware = [thunk];

const store = createStore(combinedReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;