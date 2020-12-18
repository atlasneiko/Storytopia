import React from "react";
import { connect } from "react-redux";
import {
	createComment,
	eraseCommentErrors,
} from "../../actions/comment_actions";
import { toggleCommentPage } from "../../actions/session_actions";
import CommentForm from "./comment_form";
import { withRouter } from "react-router-dom";

const mSTP = (state, ownProps) => {
	return {
		errors: state.errors.comment,
		formTypes: "Post a Comment",
		history: ownProps.history,
		username: ownProps.username,
		componentDisplay: state.session.commentPageDisplay,
		currUserId: state.session.currentUser.id,
		storyId: ownProps.storyId,
		comment: {
			storyId: ownProps.storyId,
			body: "",
			userId: state.session.currentUser.id,
		},
	};
};

const mDTP = (dispatch) => ({
	action: (comment) => dispatch(createComment(comment)),
	eraseCommentErrors: () => dispatch(eraseCommentErrors()),
	toggleAction: () => dispatch(toggleCommentPage()),
});

export default withRouter(connect(mSTP, mDTP)(CommentForm));
