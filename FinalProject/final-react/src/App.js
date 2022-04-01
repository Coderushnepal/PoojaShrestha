import React from "react";

import Header from "./components/views/Header";
import NewsDetails from "./components/views/newsDetails";
import NewsListing from "./components/views/newsListing";

import {
  Routes,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import * as routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={routes.NEWS} component={NewsListing} />
        <Route exact path={routes.NEWSDETAIL} component={NewsDetails} />
      </Switch>
    </Router>
  );
}

export default App;
