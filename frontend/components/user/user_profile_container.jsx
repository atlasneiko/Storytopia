import React from "react";
import UserProfile from "./user_profile";
import { connect } from "react-redux";
const mSTP = (state, ownProps) => ({
	user: state.entities.users[ownProps.match.params.userId],
	currentUserId: state.session.currentUser.id,
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(UserProfile);
