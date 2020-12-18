import React from "react";
import { connect } from "react-redux";
import sideProfile from "./side_profile";
import { toggleCommentPage } from "../../../actions/session_actions";
const mSTP = (state, ownProps) => ({
	commentDisplay: state.session.commentDisplay,
});

const mDTP = (dispatch) => ({
	toggleCommentPage: () => dispatch(toggleCommentPage()),
});

export default connect(mSTP, mDTP)(sideProfile);
