import React from "react";
import { Link, useLocation } from "react-router-dom";
import UserDropdown from "../user_dropdown/user_dropdown_container";
import {
	icons,
	bellIcon,
	searchIcon,
	bookmarkIcon,
} from "../../../../util/icon_util";

const currIcon = icons[Math.floor(Math.random() * icons.length)];
export default ({ currentUser, logout, loggedIn }) => {
	const location = useLocation();
	const greeting = () => {
		let date = new Date();
		let hour = date.getHours();
		if (hour >= 5 && hour <= 12) {
			return "Good morning. ";
		} else if (hour > 12 && hour < 18) {
			return "Good afternoon. ";
		} else {
			return "Good evening. ";
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
			<h2>{greeting()}</h2>
			<div id="nav-util">
				{bookmarkIcon}
				{bellIcon}
			</div>

			<UserDropdown currIcon={currIcon} />
		</div>
	);

	return loggedIn ? message() : links();
};
