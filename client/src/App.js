import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import CategoriesDetails from './pages/CategoriesDetail';
import Profile from './pages/Profile';
import './App.css';

export default class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/profile/:id">
							<Profile />
						</Route>
						<Route path="/category/:id/events">
							<CategoriesDetails />
						</Route>
						<Route path="/register">
							<Register />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/event">
							<EventDetails />
						</Route>
						<Route path="/">
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
