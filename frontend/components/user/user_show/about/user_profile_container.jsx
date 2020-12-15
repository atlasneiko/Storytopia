import React from "react";
import UserProfileAbout from "./user_profile_about";
import { connect } from "react-redux";
import {
	update,
	getUser,
	eraseUserErrors,
} from "../../../../actions/user_actions";

const mSTP = (state, ownProps) => {
	return {
		currentUserId: state.session.currentUser.id,
		profileId: ownProps.match.params.userId,
		user: state.entities.users[ownProps.match.params.userId],
	};
};

const mDTP = (dispatch) => ({
	update: (user) => dispatch(update(user)),
	getUser: (userId) => dispatch(getUser(userId)),
	eraseUserErrors: () => dispatch(eraseUserErrors()),
});

export default connect(mSTP, mDTP)(UserProfileAbout);
