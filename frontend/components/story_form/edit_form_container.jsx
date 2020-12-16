import React from "react";
import { connect } from "react-redux";
import {
	editStory,
	eraseStoryErrors,
	fetchStory,
} from "../../actions/story_actions";
import StoryForm from "./story_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => {
	// console.log(parseInt(ownProps.match.params.storyId));
	console.log("con story", state.entities.stories);
	return {
		storyId: parseInt(ownProps.match.params.storyId),
		errors: state.errors.story,
		formTypes: "Edit this Story",
		story: state.entities.stories[parseInt(ownProps.match.params.storyId)]
			? state.entities.stories[parseInt(ownProps.match.params.storyId)]
			: {
					title: "",
					subtitle: "",
					body: "",
					img_id: 1,
					user_id: state.session.currentUser.id,
			  },
		hitstory: ownProps.hitstory,
	};
};

const mDTP = (dispatch) => ({
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
	action: (story) => dispatch(editStory(story)),
	eraseStoryErrors: () => dispatch(eraseStoryErrors()),
});

export default connect(mSTP, mDTP)(StoryForm);
