import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../../actions/user_actions";
import UserPage from "./user_page";

const mSTP = (state, ownProps) =>
	// console.log(state.entities.users);
	// console.log(ownProps.match.params.userId);
	({
		// user: state.entites.users[ownProps.match.params.userId],
		users: state.entities.users,
		pageUserId: ownProps.match.params.userId,
		errors: state.errors.user,
	});

const mDTP = (dispatch) => ({
	getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(UserPage);
