import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
	createClap,
	updateClap,
} from "../../../actions/clap_actions";

const mSTP = (state, ownProps) => ({
	user: state.entities.users[state.session.currentUser.id],
	story: ownProps.story,
	claps: state.entities.claps,
});

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
	createClap: (clap) => dispatch(createClap(clap)),
	updateClap: (clap) => dispatch(updateClap(clap)),
});

export default connect(mSTP, mDTP)();
