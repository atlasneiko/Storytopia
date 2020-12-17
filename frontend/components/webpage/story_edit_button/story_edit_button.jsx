import React from "react";
import { Link } from "react-router-dom";

export default ({ storyId, currentUserId, userId }) => {
	return userId === currentUserId ? (
		<Link to={`/stories/${storyId}/edit`}>
			<button>Edit</button>
		</Link>
	) : null;
};
