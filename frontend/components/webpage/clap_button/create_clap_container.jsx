import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
	createClap,
	updateClap,
	fetchClap,
} from "../../../actions/clap_actions";
import ClapButton from "./clap_button";

const mSTP = (state, ownProps) => {
	const userId = state.session.currentUser.id;
	console.log("currUser", state.session.currentUser.id);
	return {
		clap: {
			user_id: userId,
			story_id: ownProps.storyId,
			clapCount: 1,
		},
		typeForm: "create",
	};
};

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
	createClap: (clap) => dispatch(createClap(clap)),
	updateClap: (clap) => dispatch(updateClap(clap)),
});

export default connect(mSTP, mDTP)(ClapButton);
