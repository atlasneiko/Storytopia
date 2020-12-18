import React from "react";
import { connect } from "react-redux";
import {
	updateComment,
	eraseCommentErrors,
} from "../../actions/comment_actions";
import { toggleCommentEidt } from "../../actions/session_actions";
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
	currUser: state.entities.users[state.session.currentUser.id],
	errors: state.errors.comment,
	formTypes: "Edit a Comment",
	history: ownProps.history,
	comment: ownProps.comment,
	currUserId: state.session.currentUser.id,
	storyId: ownProps.comment.storyId,
	componentDisplay: state.session.commentEditDisplay,
});

const mDTP = (dispatch) => ({
	action: (comment) => dispatch(updateComment(comment)),
	eraseCommentErrors: () => dispatch(eraseCommentErrors()),
	removeComment: (commentId) => dispatch(removeComment(commentId)),
	toggleAction: () => dispatch(toggleCommentEidt()),
});

export default withRouter(connect(mSTP, mDTP)(CommentForm));
