import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

// const element = React.createElement('h1', null, "Hello World!");

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);