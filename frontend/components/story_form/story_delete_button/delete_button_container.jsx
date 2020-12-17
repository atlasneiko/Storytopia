import React from "react";
import StoryDeleteButon from "./delete_button";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { eraseStoryErrors, removeStory } from "../../../actions/story_actions";

const mSTP = (state, ownProps) => {
	return {
		storyId: ownProps.storyId,
		history: ownProps.history,
	};
};

const mDTP = (dispatch) => ({
	removeStory: (storyId) => dispatch(removeStory(storyId)),
});

export default withRouter(connect(mSTP, mDTP)(StoryDeleteButon));
