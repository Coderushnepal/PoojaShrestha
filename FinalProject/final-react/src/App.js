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
import CategoryListing from "./components/views/CategoryListing";
import Posts from "./components/views/Posts.js";
import EditPosts from "./components/views/EditPosts.js"

import Alert from 'react-s-alert';
 
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import DeletePosts from "./components/views/DeletePosts";


function App() {

  // const existingUser = localStorage.getItem('Email');

  return (
    
    <Router>
      <Header />
      <Switch>
      
        
        <Route exact path={routes.USERS} component={Users} />
        <Route exact path={routes.NEWS} component={NewsListing} />
        <Route exact path={routes.NEWSDETAIL} component={NewsDetails} />
        <Route exact path={routes.CATEGORY} component={CategoryListing} />
        <Route exact path={routes.CREATENEWS} component={Posts} />
        <Route exact path={routes.EDITNEWS} component={EditPosts} />
        <Route exact path={routes.DELETENEWS} component={DeletePosts} />
      </Switch>
    </Router>
  );
}

export default App;