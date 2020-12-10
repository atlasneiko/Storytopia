import React from "react";
import { Link, useLocation } from "react-router-dom";

export default ({ currentUser, logout, loggedIn }) => {
	const location = useLocation();
	const greeting = () => {
		let date = new Date();
		let hour = date.getHours();
		if (hour >= 5 && hour <= 12) {
			return "Good morning, ";
		} else if (hour > 12 && hour < 18) {
			return "Good afternoon, ";
		} else {
			return "Good evening, ";
		}
	};
	const login = (
		<Link to="/login" id="login">
			Login
		</Link>
	);

	const signup = (
		<Link to="/signup" id="signup">
			Sign Up
		</Link>
	);

	const links = () => {
		if (location.pathname === "/login") {
			return <nav className="nav-links">{signup}</nav>;
		} else if (location.pathname === "/signup") {
			return <nav className="nav-links">{login}</nav>;
		} else {
			return (
				<nav className="nav-links">
					{login}
					{signup}
				</nav>
			);
		}
	};

	const message = () => (
		<div className="message">
			<h2>
				{greeting()}
				<Link to={`/users/${currentUser.id}`}>{currentUser.username}</Link>
			</h2>
			<button onClick={logout} id="logout">
				Log out
			</button>
		</div>
	);

	return loggedIn ? message() : links();
};
