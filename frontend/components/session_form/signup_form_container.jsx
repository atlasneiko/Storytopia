import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => ({
	errors: state.errors.session,
	formTypes: "Sign Up",
	navLink: <Link to="/signup">Sign Up </Link>,
});

const mDTP = (dispatch) => ({
	action: (user) => dispatch(signup(user)),
});

export default connect(mSTP, mDTP)(SessionForm);
