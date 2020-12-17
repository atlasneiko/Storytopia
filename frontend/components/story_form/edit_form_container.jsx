import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
	editStory,
	eraseStoryErrors,
	fetchStory,
} from "../../actions/story_actions";

import StoryForm from "./story_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => {
	// console.log(parseInt(ownProps.match.params.storyId));
	// console.log("edit");
	const storyId = ownProps.match.params.storyId;
	const story = state.entities.stories[storyId]
		? state.entities.stories[storyId]
		: {
				title: "",
				subtitle: "",
				body: "",
				img_id: 1,
				user_id: state.session.currentUser.id,
		  };
	return {
		storyId: storyId,
		errors: state.errors.story,
		formTypes: "Edit this Story",
		story: story,
		hitstory: ownProps.hitstory,
	};
};

const mDTP = (dispatch) => ({
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
	action: (story) => dispatch(editStory(story)),
	eraseStoryErrors: () => dispatch(eraseStoryErrors()),
});

export default withRouter(connect(mSTP, mDTP)(StoryForm));
