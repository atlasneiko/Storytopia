import React from "react";
import { connect } from "react-redux";
import { signup, eraseSessionErrors } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { Link } from "react-router-dom";
const mSTP = (state, ownProps) => ({
	errors: state.errors.session,
	formTypes: "Sign Up",
	navLink: (
		<Link className="form-link" to="/login">
			Log in
		</Link>
	),
});

const mDTP = (dispatch) => ({
	action: (user) => dispatch(signup(user)),
	eraseSessionErrors: () => dispatch(eraseSessionErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
