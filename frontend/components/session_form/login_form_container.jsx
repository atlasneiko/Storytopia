import React from "react";
import { connect } from "react-redux";
import { login, eraseSessionErrors } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";

const mSTP = (state, ownProps) => ({
	errors: state.errors.session,
	formTypes: "Log in",
	navLink: (
		<Link className="form-link" to="/signup">
			Sign up
		</Link>
	),
});

const mDTP = (dispatch) => ({
	action: (user) => dispatch(login(user)),
	eraseSessionErrors: () => dispatch(eraseSessionErrors()),
});

export default connect(mSTP, mDTP)(SessionForm);
