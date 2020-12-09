import React from "react";
import { connect } from "react-redux";
import { login } from "../../../actions/session_actions";
import DemoButton from "./demo_button";

const mSTP = (state, ownProps) => ({
	user: { username: "demo", password: "demoOne2" },
});

const mDTP = (dispatch) => ({
	login: (user) => dispatch(login(user)),
});

export default connect(mSTP, mDTP)(DemoButton);
