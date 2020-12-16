import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
  updateClap,
  fetchClap
} from "../../../actions/clap_actions";
import ClapButton from "./clap_button"

const mSTP = (state, ownProps) => ({
	clap: ownProps.clap,
	typeForm: "update"
});

const mDTP = (dispatch) => ({
	eraseClapErrors: () => dispatch(eraseClapErrors()),
  updateClap: (clap) => dispatch(updateClap(clap)),
});

export default connect(mSTP, mDTP)(ClapButton);
