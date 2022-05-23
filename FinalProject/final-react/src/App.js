import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
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
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// import CategoryComponent from "./components/views/CategoryComponent";

function App() {
	const loggedIn = localStorage.getItem('User');

	const admin = localStorage.getItem('Admin');

	return (

		// (existingUser == "false") ?
		// <Router history={history}>

		// <PrivateRoute/>
		// </Router> :
		// <Router history={history}>
		// <PublicRoute/>
		// </Router>

		<Router history={history}>
			<Header />
			<Switch>
				<Route exact path={routes.USERS} component={Users} />
				<Route exact path={routes.NEWS} component={NewsListing} />
				<Route exact path={routes.NEWSDETAIL} component={NewsDetails} />
				<Route exact path={routes.CATEGORY} component={CategoryListing} />
				{admin == "true" ? <Route exact path={routes.CREATENEWS} component={Posts} /> : loggedIn ? <Redirect to={routes.NEWS} /> : <Redirect to={routes.USERS} />}
				{admin == "true" ? <Route exact path={routes.EDITNEWS} component={EditPosts} /> : loggedIn ? <Redirect to={routes.NEWS} /> : <Redirect to={routes.USERS} />}
				{admin == "true" ? <Route exact path={routes.DELETENEWS} component={DeletePosts} /> : loggedIn ? <Redirect to={routes.NEWS} /> : <Redirect to={routes.USERS} />}
				<Route exact path={routes.PROFILE} component={Profile} />
				{loggedIn ? <Route exact path={routes.EDITUSER} component={EditProfile} /> : <Redirect to={routes.USERS} />}
				{loggedIn ? <Route exact path={routes.CATEGORYDETAIL} component={CategoryComponent} /> : <Redirect to={routes.USERS} />}
			</Switch>
		</Router>
	);
}

export default App;
