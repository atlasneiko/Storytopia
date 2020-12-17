import React from "react";
import StoryShow from "./story_show";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/user_actions";
import { fetchStory } from "../../actions/story_actions";
import { fetchClap } from "../../actions/clap_actions";

const mSTP = (state, ownProps) => ({
	storyId: ownProps.match.params.storyId,
	story: state.entities.stories[ownProps.match.params.storyId],
	users: state.entities.users,
	currUser: state.entities.users[state.session.currentUser.id],
	errors: state.errors.clap,
});

const mDTP = (dispatch) => ({
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
	getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mSTP, mDTP)(StoryShow);
