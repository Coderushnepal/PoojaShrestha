import React from "react";
import BeerInfiniteList from "./views/BeerInfiniteList";
import Favorite from "./views/Favorite";
import Beer from "./views/Beer";
import history from '../utils/history';

import { Switch, BrowserRouter, Redirect, Route } from "react-router-dom";
import * as routes from "../constants/routes";

function App() {
  return (
    <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.BEERS} component={BeerInfiniteList} />
      <Route exact path={routes.BEER} component={Beer} />
      <Route exact path={routes.FAVORITE} component={Favorite} />
      <Redirect to={routes.BEERS} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
