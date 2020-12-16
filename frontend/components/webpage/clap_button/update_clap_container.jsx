import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
	updateClap,
	fetchClap,
} from "../../../actions/clap_actions";
import ClapButton from "./clap_button";
console.log("update");

const mSTP = (state, ownProps) => {
	const clap = state.entities.claps[ownProps.clapId];
	if (clap) {
		const snakeClap = {
			id: clap.id,
			user_id: clap.userId,
			story_id: clap.storyId,
			clap_count: clap.clapCount,
		};
		return {
			clap: snakeClap,
			clapId: ownProps.clapId,
			typeForm: "update",
		};
	} else return {};
};

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
	updateClap: (clap) => dispatch(updateClap(clap)),
	fetchClap: (clapId) => dispatch(fetchClap(clapId)),
});

export default connect(mSTP, mDTP)(ClapButton);
