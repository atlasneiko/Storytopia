import React from "react";
import { connect } from "react-redux";
import {
	eraseClapErrors,
	updateClap,
	fetchClap,
} from "../../../actions/clap_actions";
import ClapButton from "./clap_button";
// console.log("update");

const mSTP = (state, ownProps) => {

};

const mDTP = (dispatch) => ({

});

export default connect(mSTP, mDTP)(ClapButton);
