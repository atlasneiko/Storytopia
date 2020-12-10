import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default ({ user, logout, currIcon }) => {
	const [isShow, setIsShow] = useState(false);
	const handleClick = () => setIsShow(!isShow);
	const dropdownRef = useRef(null);
	useEffect(() => {
		const pageClick = (event) => {
			if (
				(dropdownRef.current !== null) &
				!dropdownRef.current.contains(event.target)
			) {
				handleClick();
			}
		};
		if (isShow) {
			window.addEventListener("click", pageClick);
		}
		return () => {
			window.removeEventListener("click", pageClick);
		};
	}, [isShow]);

	const dropdownMenu = () => (
		<nav ref={dropdownRef}>
			<div>
				{currIcon}
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
					<button onClick={logout}>Log out</button>
				</li>
			</ul>
		</nav>
	);
	return (
		<div id="user-dropdown">
			<button onClick={handleClick} id="user-dropdown-toggle">
				{currIcon}
			</button>
			{isShow ? dropdownMenu() : null}
		</div>
	);
};
