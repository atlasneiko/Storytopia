import React from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/user_actions";
import CommentItem from "./comment_item";

const mSTP = (state, ownProps) => {
	console.log("item container", ownProps.comment);
	return {
		comment: ownProps.comment,
		user: state.entities.users[ownProps.comment.userId],
	};
};

const mDTP = (dispatch) => ({
	getUser: (userId) => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(CommentItem);
