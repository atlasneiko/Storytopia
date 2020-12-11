import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../../../actions/user_actions";
import UserHeader from "./user_header";
const mSTP = (state, ownProps) => ({
	// user: state.entities.users[ownProps.match.params.userId],
});

const mDTP = (dispatch) => ({
	getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(UserHeader);
