import React from "react";
import { connect } from "react-redux";
import sideProfile from "./side_profile";
import { toggleCommentPage } from "../../../actions/session_actions";
import {
	fetchClap,
	createClap,
	updateClap,
} from "../../../actions/clap_actions";
const mSTP = (state, ownProps) => ({
	commentDisplay: state.session.commentDisplay,
	claps: Object.values(state.entities.claps),
	loggedIn: state.session.currentUser.id !== null,
});

const mDTP = (dispatch) => ({
	toggleCommentPage: () => dispatch(toggleCommentPage()),
	fetchClap: (clapId) => dispatch(fetchClap(clapId)),
	createClap: (clap) => dispatch(createClap(clap)),
	updateClap: (clapId) => dispatch(updateClap(clapId)),
});

export default connect(mSTP, mDTP)(sideProfile);
