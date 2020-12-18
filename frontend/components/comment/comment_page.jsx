import CommentIndex from "./comment_index";
import PostCommentContainer from "./comment_post_container";
import React, { useState } from "react";

export default ({ username, storyId, comments }) => {
	const [postFormDisplay, togglePostDisplay] = useState(false);
	const togglePost = () =>
		togglePostDisplay((postFormDisplay) => !postFormDisplay);
	let postForm = postFormDisplay ? (
		<PostCommentContainer storyId={storyId} username={username} />
	) : (
		// <h1>hi</h1>
		<button onClick={() => togglePost()} id="post-form-toggle">
			<h3>Post a comment?</h3>
		</button>
	);
	return (
		<div className="comment-page">
			{postForm}
			<CommentIndex comments={comments} />
		</div>
	);
};
