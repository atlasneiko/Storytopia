


import React from "react";
import { connect } from "react-redux";
import { editStory, eraseStoryErrors } from "../../actions/story_actions";
import StoryForm from "./story_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => ({
	errors: state.errors.story,
	formTypes: "Edit this Story",
	story: ownProps.story,
	hitstory: ownProps.hitstory,
});

const mDTP = (dispatch) => ({
	action: (story) => dispatch(editStory(story)),
	eraseStoryErrors: () => dispatch(eraseStoryErrors()),
});

export default connect(mSTP, mDTP)(StoryForm);
