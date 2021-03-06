import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default ({ user, logout, currIcon }) => {
	const [isShow, setIsShow] = useState(false);

	// this.state = {isShow: false}
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
		<nav ref={dropdownRef} id="user-dropdown-nav">
			<div id="dropdown-triangle">
				<div></div>
			</div>
			<div id="user-dropdown-info">
				<h2>{currIcon}</h2>
				<div>
					<p id="dropdown-username">{user.username}</p>
					<Link
						to={`/users/${user.id}`}
						id="dropdown-profile-link"
						className="dropdown-links"
					>
						<p>@{user.username}</p>
					</Link>
				</div>
			</div>
			<ul>
				<li>
					<Link to="/new-story" className="dropdown-links">
						write a story
					</Link>
				</li>

				<li>
					<Link
						to={`/users/${user.id}`}
						className="dropdown-links"
						id="to-profile"
					>
						profile
					</Link>
				</li>
				<li>
					<button onClick={logout} id="dropdown-logout">
						Log out
					</button>
				</li>
			</ul>
		</nav>
	);
	return (
		<div id="user-dropdown-div">
			<button onClick={handleClick} id="user-dropdown-toggle">
				{currIcon}
			</button>
			{isShow ? dropdownMenu() : null}
		</div>
	);
};
