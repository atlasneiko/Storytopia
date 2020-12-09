import React from "react";
import { Link, useLocation } from "react-router-dom";

export default ({ currentUser, logout }) => {
	const location = useLocation();
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
				Welcome back,
				<Link to={`/users/${currentUser.id}`}>
					{currentUser.username}
				</Link>
			</h2>
			<button onClick={logout} id="logout">
				Log out
			</button>
		</div>
	);
	return currentUser ? message() : links();
};
