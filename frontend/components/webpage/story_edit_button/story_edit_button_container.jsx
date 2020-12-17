import React from "react";
import StoryEditButton from "./story_edit_button";
import { connect } from "react-redux";
import { eraseStoryErrors, editStory } from "../../../actions/story_actions";

const mSTP = (state, ownProps) => ({
	currentUserId: state.session.currentUser.id,
	storyId: ownProps.storyId,
	userId: ownProps.userId	
});

const mDTP = (dispatch) => ({
});

export default connect(mSTP, mDTP)(StoryEditButton);
