import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../../../actions/user_actions";
import UserHeader from "./user_header";
const mSTP = (state, ownProps) => {
	// console.log(state);
	// console.log(ownProps);
	return {
		user: ownProps.user,
	};
};

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(UserHeader);
