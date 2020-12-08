import React from "react";
import { connect } from "react-redux";
import { getAllUsers } from "../../actions/user_actions";
import UserIndex from "./user_index";

const mSTP = (state, ownProps) => ({
	users: Object.values(state.entities.users)
});

const mDTP = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers()),
});

export default connect(mSTP, mDTP)(UserIndex);
