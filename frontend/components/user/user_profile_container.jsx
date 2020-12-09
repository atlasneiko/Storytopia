import React from "react";
import UserProfile from "./user_profile";
import { connect } from "react-redux";
import { update, getUser, getAllUsers } from "../../actions/user_actions";

const mSTP = (state, ownProps) => {
	return {
		// user: state.entities.users[ownProps.match.params.userId],
		profileId: parseInt(ownProps.match.params.userId),
		currentUserId: state.session.currentUser.id,
		user: state.entities.users[ownProps.match.params.userId],
	};
};

const mDTP = (dispatch) => ({
	update: (user) => dispatch(update(user)),
	getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(UserProfile);
