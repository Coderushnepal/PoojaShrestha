import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './utils/history';

import * as routes from './constants/routes';
import Users from './components/views/Users';
import Header from './components/views/Header';
import Posts from './components/views/Posts.js';
import Profile from './components/views/Profile';
import EditPosts from './components/views/EditPosts.js';
import NewsDetails from './components/views/newsDetails';
import DeletePosts from './components/views/DeletePosts';
import NewsListing from './components/views/newsListing';
import EditProfile from './components/views/EditProfile';
import ExclusiveNews from './components/views/ExclusiveNews';
import CategoryListing from './components/views/CategoryListing';
import CategoryComponent from './components/views/CategoryComponent';

// import CategoryComponent from "./components/views/CategoryComponent";

function App() {
  // const existingUser = localStorage.getItem('Email');

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
        <Route exact path={routes.PROFILE} component={Profile} />
        <Route exact path={routes.EDITUSER} component={EditProfile} />
        <Route exact path={routes.CATEGORYDETAIL} component={CategoryComponent} />
      </Switch>
    </Router>
  );
}

export default App;
