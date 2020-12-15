import React from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/user_actions";
import UserIndex from "./user_index";

const mSTP = (state, ownProps) => {
	// const users = Object.values(state.entities.users);
	const users = Object.values(ownProps.users);

	return {
		users: users.slice(users.length - 10, users.length - 1),
	};
};

const mDTP = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mSTP, mDTP)(UserIndex);
