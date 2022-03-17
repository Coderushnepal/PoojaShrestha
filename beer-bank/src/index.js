import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import fetchBeers from "./reducers/beers";

import App from "./components/App";
import './public';
import { Provider } from "react-redux";

const store = createStore( fetchBeers, applyMiddleware(thunk));
// [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), 

ReactDOM.render(
    <React.StrictMode>

        <Provider store={store}>
        <App />
        </Provider>

    </React.StrictMode>,
    document.getElementById("root")
);