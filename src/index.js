import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // import provider 1
import { createStore, applyMiddleware } from "redux"; // import createStore 1 & 1a
import thunkMiddleware from "redux-thunk"; // import middleware
import { composeWithDevTools } from "redux-devtools-extension"; //import redux dev tools
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import catsReducer from "./features/cats/catsSlice.js"; //import reducer even though we haven't made it yet

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(catsReducer, composedEnhancer) //create store var and pass in catsReducer

//wrap app in provder and pass store to it
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));

//steps for getting index.js set up with redux:
// 1. import provder from react-redux and import createStore from redux
// 2. import reducer
// 3. set value = to createStore with reducer passed in
// 4. wrap app in provider
// 5. pass store={store} into provider as props
// once those steps are done, we can work on setting up thunk middleware
// 1a.import applyMiddlware from redux
// 2a. import thunkMiddleware from 'redux-thunk'
// 3a. pass applyMiddleware(thunkMiddleware) as second arg for createStore
// once those steps are done, we can add Redux Devtools
// 1b. import composeWithDevTools from redux-devtools-extension
// 2b. create const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
// 3b. pass composedEnhancer as second arg in createStore
// time to move on to reducer in catsSlice.js