import React from "react";
import UserProfileAbout from "./user_profile_about";
import { connect } from "react-redux";
import {
	update,
	getUser,
	eraseUserErrors,
} from "../../../../actions/user_actions";
import { fetchStory } from "../../../../actions/story_actions";
const mSTP = (state, ownProps) => {
	return {
		currentUserId: state.session.currentUser.id,
		profileId: ownProps.match.params.userId,
		user: state.entities.users[ownProps.match.params.userId],
		stories: state.entities.stories,
	};
};

const mDTP = (dispatch) => ({
	update: (user) => dispatch(update(user)),
	getUser: (userId) => dispatch(getUser(userId)),
	eraseUserErrors: () => dispatch(eraseUserErrors()),
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
});

export default connect(mSTP, mDTP)(UserProfileAbout);
