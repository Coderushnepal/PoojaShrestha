import React from 'react';

import Header from './components/views/Header';
import NewsDetails from './components/views/newsDetails';
import NewsListing from './components/views/newsListing';
import ExclusiveNews from './components/views/ExclusiveNews';

import Users from './components/views/Users';

import { Router, Switch, Route, Redirect } from 'react-router-dom';

import * as routes from './constants/routes';
import CategoryListing from './components/views/CategoryListing';
import Posts from './components/views/Posts.js';
import EditPosts from './components/views/EditPosts.js';
import history from './utils/history';

import DeletePosts from './components/views/DeletePosts';
import userProfile from './components/views/userProfile';
// import CategoryComponent from "./components/views/CategoryComponent";

function PrivateRoute() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path={routes.USERS} component={Users} />
        <Route exact path={routes.NEWS} component={NewsListing} />
        <Route exact path={routes.NEWSDETAIL} component={NewsDetails} />
        <Route exact path={routes.CATEGORY} component={CategoryListing} />
        <Route exact path={routes.CREATENEWS} component={Posts} />
        <Route exact path={routes.EDITNEWS} component={EditPosts} />
        <Route exact path={routes.DELETENEWS} component={DeletePosts} />
        <Route exact path={routes.PROFILE} component={userProfile} />)
        <Redirect to={routes.USERS} />
      </Switch>
    </Router>
  );
}

export default PrivateRoute;
