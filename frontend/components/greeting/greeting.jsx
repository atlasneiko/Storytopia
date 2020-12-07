import React from "react";
import { Link } from "react-router-dom";

export default ({ currentUser, logout }) => {
	const links = () => (
		<nav>
			<Link to="/login">Login</Link>
			<Link to="/signup">Sign Up</Link>
		</nav>
	);
	const message = () => (
		<div>
			<h2>Hi, {currentUser.username}!</h2>
			<button onClick={logout}>Log out</button>
		</div>
	);
	return currentUser ? message() : links();
};
