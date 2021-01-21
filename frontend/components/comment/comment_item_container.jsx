import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/user_actions";
import { updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";
import { fetchClap, createClap, updateClap } from "../../actions/clap_actions";

const mSTP = (state, ownProps) => {
	// console.log("item container", ownProps.comment);
	return {
		comment: ownProps.comment,
		user: state.entities.users[ownProps.comment.userId],
		currentUserId: state.session.currentUser.id,
		commentUserId: ownProps.comment.userId,
	};
};

const mDTP = (dispatch) => ({
	getUser: (userId) => dispatch(getUser(userId)),
	updateComment: (comment) => dispatch(updateComment(comment)),
	fetchClap: (clapId) => dispatch(fetchClap(clapId)),
	createClap: (clap) => dispatch(createClap(clap)),
	updateClap: (clapId) => dispatch(updateClap(clapId)),
});

export default connect(mSTP, mDTP)(CommentItem);
