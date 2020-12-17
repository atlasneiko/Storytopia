import React from "react";
import { connect } from "react-redux";
import {
	updateComment,
	eraseCommentErrors,
} from "../../actions/comment_actions";
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
	currUser: state.entities.users[state.session.currentUser.id],
	errors: state.errors.comment,
	formTypes: "Edit a Comment",
	history: ownProps.history,
	comment: ownProps.comment,
	display: true,
});

const mDTP = (dispatch) => ({
	action: (comment) => dispatch(updateComment(comment)),
	eraseCommentErrors: () => dispatch(eraseCommentErrors()),
	removeComment: (commentId) => dispatch(removeComment(commentId)),
});

export default withRouter(connect(mSTP, mDTP)(CommentForm));
