import React from "react";
import ReactDOM from "react-dom";
// import {Provider} from "react-redux";
// import {createStore} from "redux";

import App from "./components/App";
// import listReducer from "./reducers/list";
// import speedReducer from "./reducers/speed";


// const element = React.createElement('h1', null, "Hello World!");

// ReactDOM.render(element, document.getElementById("root"));

// const store = createStore(listReducer, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <React.StrictMode>
        {/* <Provider store={store}> */}
        <App />
        {/* </Provider> */}
    </React.StrictMode>,
    document.getElementById("root")
);