import React from "react";

import Header from "./components/views/Header";
import NewsDetails from "./components/views/newsDetails";
import NewsListing from "./components/views/newsListing";
import ExclusiveNews from "./components/views/ExclusiveNews";

import Users from "./components/views/Users"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import * as routes from "./constants/routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={routes.USERS} component={Users} />
        <Route exact path={routes.NEWS} component={NewsListing} />
        <Route exact path={routes.NEWSDETAIL} component={NewsDetails} />
        {/* <Route exact path={routes.EXCLUSIVE} component={ExclusiveNews} /> */}
        
      </Switch>
    </Router>
  );
}

export default App;
