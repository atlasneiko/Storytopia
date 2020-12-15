import React, { useEffect, useState } from "react";

export default ({ storyId, story, users, fetchStory, getAllUsers }) => {
	useEffect(() => {
		fetchStory(storyId);
		getAllUsers();
	}, []);
	// console.log("story", story);
	// console.log("users", users);
	if (Object.keys(users).length > 1 && !!story) {
		return <h1>hi</h1>;
	} else {
		return null;
	}
};
