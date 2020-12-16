import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
	createClap,
  updateClap,
  fetchClap
} from "../../../actions/clap_actions";
import ClapButton from "./clap_button"


const mSTP = (state, ownProps) => ({
	clap: {
		userId: state.session.CurrentUser.id,
		story_id: ownProps.storyId,
		clapCount: 1
	},
	typeForm: "create"
});

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
	createClap: (clap) => dispatch(createClap(clap)),
  updateClap: (clap) => dispatch(updateClap(clap)),
});

export default connect(mSTP, mDTP)(ClapButton);
