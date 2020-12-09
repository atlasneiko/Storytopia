import React from "react";
import { connect } from "react-redux";
import { login, receiveDemo } from "../../../actions/session_actions";
import DemoButton from "./demo_button";

const mSTP = (state, ownProps) => ({
	user: { username: "demo", password: "demoOne2" },
});

const mDTP = (dispatch) => ({
	login: (user) => dispatch(login(user)),
	receiveDemo: () => dispatch(receiveDemo()),
});

export default connect(mSTP, mDTP)(DemoButton);
