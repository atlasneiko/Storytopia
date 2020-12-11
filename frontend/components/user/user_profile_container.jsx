import React from "react";
import UserProfile from "./user_profile";
import { connect } from "react-redux";
import { update, getUser, eraseUserErrors } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
	return {
		profileId: ownProps.match.params.userId,
		currentUserId: state.session.currentUser.id,
		user: state.entities.users[ownProps.match.params.userId],
		errors: state.errors.user,
		// missing: Number.isInteger()
	};
};

const mDTP = (dispatch) => ({
	update: (user) => dispatch(update(user)),
	getUser: (userId) => dispatch(getUser(userId)),
	eraseUserErrors: () => dispatch(eraseUserErrors()),
});

export default connect(mSTP, mDTP)(UserProfile);
