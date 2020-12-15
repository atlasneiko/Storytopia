import React from "react";
import { connect } from "react-redux";
import UserHeader from "./user_header";
const mSTP = (state, ownProps) => {
	// console.log(state);
	// const user = ownProps.match.params.userId
	// 	? state.entities.users[ownProps.match.params.userId]
	// 	: state.entities.users[
	// 			state.entities.stories[ownProps.match.params.storyId]
	// 	  ];
	const story = state.entities.stories[ownProps.match.params.storyId];
	let user;
	if (story) {
		if (Object.keys(state.entities.users).length > 1)
			user = state.entities.users[story.userId];
	} else {
		user = state.entities.users[ownProps.match.params.userId];
	}
	console.log("users", state.entities.users);
	console.log("ownProps", ownProps);
	console.log("story", story);
	return {
		history: ownProps.history,
		user: user,
	};
};
// state.entities.users[ownProps.match.params.userId],
const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(UserHeader);
