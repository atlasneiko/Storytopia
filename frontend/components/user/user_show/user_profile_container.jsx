import React from "react";
import UserProfile from "./user_profile";
import { connect } from "react-redux";
import {
	update,
	getUser,
	eraseUserErrors,
} from "../../../actions/user_actions";

const mSTP = (state, ownProps) => {
	return {
		currentUserId: state.session.currentUser.id,
		profileId: ownProps.user ? ownProps.user.id : "redirect",
		user: ownProps.user,
	};
};

const mDTP = (dispatch) => ({
	update: (user) => dispatch(update(user)),
	getUser: (userId) => dispatch(getUser(userId)),
	eraseUserErrors: () => dispatch(eraseUserErrors()),
});

export default connect(mSTP, mDTP)(UserProfile);
