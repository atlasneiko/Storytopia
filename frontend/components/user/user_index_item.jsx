import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../util/icon_util";

export default ({ user, match }) => {
	return (
		<li>
			<Link to={`/users/${user.id}`} className="user-index-item">
				{icons[Math.floor(Math.random() * icons.length)]}
				<p>{user.username}</p>
			</Link>
		</li>
	);
};
