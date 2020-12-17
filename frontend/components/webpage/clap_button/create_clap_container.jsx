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
	return {
		userId: userId,
		clap: {
			user_id: userId,
			clapable_id: ownProps.storyId,
			clap_count: 1,
			clapable_type: "Story",
		},
		typeForm: "create",
		history: ownProps.history,
	};
};

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
	createClap: (clap) => dispatch(createClap(clap)),
	updateClap: (clap) => dispatch(updateClap(clap)),
	fetchClap: () => {},
});

export default connect(mSTP, mDTP)(ClapButton);
