import CommentIndex from "./comment_index";
import PostCommentContainer from "./comment_post_container";
import React, { useState } from "react";

export default ({ username, storyId, comments, loggedIn }) => {
	const [postFormDisplay, togglePostDisplay] = useState(false);
	const togglePost = () =>
		togglePostDisplay((postFormDisplay) => !postFormDisplay);

	let postForm =
		postFormDisplay && loggedIn ? (
			<PostCommentContainer
				storyId={storyId}
				username={username}
				toggleDisplay={togglePostDisplay}
			/>
		) : username !== "" ? (
			<button onClick={() => togglePost()} id="post-form-toggle">
				<h3>Post a comment?</h3>
			</button>
		) : null;
	return (
		<div className="comment-page">
			{console.log("comment_page")}
			{postForm}
			<h1>hi</h1>
			<CommentIndex comments={comments} />
		</div>
	);
};
