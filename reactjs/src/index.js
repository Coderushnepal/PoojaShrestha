import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";

import App from "./components/App";
import list from "./reducers/list";
import speed from "./reducers/speed";

const rootReducer = combineReducers({speed, list});


// const element = React.createElement('h1', null, "Hello World!");

// ReactDOM.render(element, document.getElementById("root"));


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);