import React from "react";
import { connect } from "react-redux";
import StoryIndex from "./story_index";
import { fetchStory } from "../../../../actions/story_actions";

const mSTP = (state, ownProps) => {
	return {
		user: ownProps.user,
		stories: state.entities.stories,
	};
};

const mDTP = (dispatch) => ({
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
});

export default connect(mSTP, mDTP)(StoryIndex);
