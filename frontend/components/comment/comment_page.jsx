import CommentIndex from "./comment_index";
import PostCommentContainer from "./comment_post_container";
import React, { useState } from "react";

export default ({ username, storyId, comments, loggedIn }) => {
	const [postFormDisplay, togglePostDisplay] = useState(false);
	const togglePost = () =>
		togglePostDisplay((postFormDisplay) => !postFormDisplay);

	let postForm = postFormDisplay ? (
		<PostCommentContainer
			storyId={storyId}
			username={username}
			toggleDisplay={togglePostDisplay}
		/>
	) : // <h1>hi</h1>
	username !== "" ? (
		<button onClick={() => togglePost()} id="post-form-toggle">
			<h3>Post a comment?</h3>
		</button>
	) : null;
	return (
		<div className="comment-page">
			{postForm}
			<CommentIndex comments={comments} />
		</div>
	);
};
