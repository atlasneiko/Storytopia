import React from "react";
export default ({ storyId, removeStory, history }) => {
	const handleClick = () => {
		removeStory(storyId).then(history.push("/"));
	};

	return storyId ? (
		<button onClick={() => handleClick()}>Delete story</button>
	) : null;
};
