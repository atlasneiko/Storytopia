import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/user_actions";
import { updateComment } from "../../actions/comment_actions";
import CommentItem from "./comment_item";

const mSTP = (state, ownProps) => {
	// console.log("item container", ownProps.comment);
	return {
		comment: ownProps.comment,
		user: state.entities.users[ownProps.comment.userId],
	};
};

const mDTP = (dispatch) => ({
	getUser: (userId) => dispatch(getUser(userId)),
	updateComment: (comment) => dispatch(updateComment(comment)),
});

export default connect(mSTP, mDTP)(CommentItem);
