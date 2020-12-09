import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCat,
	faKiwiBird,
	faPen,
	faRainbow,
	faFeatherAlt,
	faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export default ({ user, match }) => {
	const colors = ["#131917", "#2d424a", "#5f6468", "#b4786b", "#612a11"];
	const icons = [
		<FontAwesomeIcon
			icon={faCat}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
		<FontAwesomeIcon
			icon={faKiwiBird}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
		<FontAwesomeIcon
			icon={faRainbow}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
		<FontAwesomeIcon
			icon={faFeatherAlt}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
		<FontAwesomeIcon
			icon={faSnowflake}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
		<FontAwesomeIcon
			icon={faPen}
			className="user-icon"
			style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
		/>,
	];
	return (
		<li>
			<Link to={`/users/${user.id}`} className="user-index-item">
				{icons[Math.floor(Math.random() * icons.length)]}
				<br />
				{user.username}
			</Link>
		</li>
	);
};
