import React from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../../../actions/user_actions";
import { fetchAllStories } from "../../../../actions/story_actions";

import TheFeed from "./the_feed";

const mSTP = (state, ownProps) => {
	console.log("props", ownProps);
	return {
		stories: state.entities.stories,
		users: state.entities.users,
	};
};

const mDTP = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers()),
	fetchAllStories: () => dispatch(fetchAllStories()),
});

export default connect(mSTP, mDTP)(TheFeed);
