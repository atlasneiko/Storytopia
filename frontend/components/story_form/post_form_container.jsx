import React from "react";
import { connect } from "react-redux";
import { postStory, eraseStoryErrors } from "../../actions/story_actions";
import StoryForm from "./story_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => ({
	errors: state.errors.story,
	formTypes: "Post a Story",
	history: ownProps.history,
	story: {
		title: "",
		subtitle: "",
		body: "",
		img_id: 1,
		user_id: state.session.currentUser.id,
	},
});

const mDTP = (dispatch) => ({
	action: (story) => dispatch(postStory(story)),
	eraseStoryErrors: () => dispatch(eraseStoryErrors()),
});

export default connect(mSTP, mDTP)(StoryForm);
