import React, { useState } from "react";
import { Link } from "react-router-dom";

import { icons } from "../../../../util/icon_util";

export default ({ user, logout }) => {
	const [isShow, setIsShow] = useState(false);
	const handleClick = () => setIsShow(!isShow);

	const currIcon = () => {
		icons[Math.floor(Math.random() * icons.length)];
	};

	const dropdownMenu = () => (
		<nav>
			<div>
				{currIcon()}
				<h5>{user.username}</h5>
				<p>{user.email}</p>
			</div>
			<ul>
				<li>
					<p>write a story</p>
				</li>
				<li>
					<p>stories</p>
				</li>
				<li>
					<p>states</p>
				</li>
				<li>
					<Link to={`/users/${user.id}`}>profile</Link>
				</li>
				<li>
					<button onCLick={logout}>Log out</button>
				</li>
			</ul>
		</nav>
	);
	return (
		<div id="user-dropdown">
			<button onClick={handleClick} id="user-dropdown-toggle"></button>
			{isShow ? dropdownMenu() : null}
		</div>
	);
};
