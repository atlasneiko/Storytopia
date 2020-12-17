import React from "react";
import { connect } from "react-redux";
import {
	createComment,
	eraseCommentErrors,
} from "../../actions/comment_actions";
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => ({
	errors: state.errors.comment,
	formTypes: "Post a Comment",
	history: ownProps.history,
	username: ownProps.username,
	display: true,
	comment: {
		story_id: ownProps.storyId,
		body: "",
		user_id: state.session.currentUser.id,
	},
});

const mDTP = (dispatch) => ({
	action: (comment) => dispatch(createComment(comment)),
	eraseCommentErrors: () => dispatch(eraseCommentErrors()),
});

export default withRouter(connect(mSTP, mDTP)(CommentForm));
