import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./components/App";

// const element = React.createElement('h1', null, "Hello World!");

// ReactDOM.render(element, document.getElementById("root"));

ReactDOM.render(
    <React.StrictMode>
        <Welcome name="Pooja" />
    </React.StrictMode>,
    document.getElementById("root")
);