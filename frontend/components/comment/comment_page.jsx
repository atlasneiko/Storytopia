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
		<button onClick={() => togglePost()}>Fake Post Form</button>
	);
	return (
		<div className="comment-page">
			{postForm}
			<CommentIndex comments={comments} />
		</div>
	);
};
