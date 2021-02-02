import CommentIndex from "./comment_index";
import PostCommentContainer from "./comment_post_container";
import React, { useState } from "react";

export default ({ username, storyId, comments, loggedIn, setComments }) => {
	const [postFormDisplay, togglePostDisplay] = useState(false);
	// const [currComments, setCurrComments] = useState(comments);
	const togglePost = () =>
		togglePostDisplay((postFormDisplay) => !postFormDisplay);
	let postForm =
		postFormDisplay && loggedIn ? (
			<PostCommentContainer
				storyId={storyId}
				username={username}
				toggleDisplay={togglePostDisplay}
				comments={comments}
				setCurrComments={setComments}
			/>
		) : username !== "" ? (
			<button onClick={() => togglePost()} id="post-form-toggle">
				<h3>Post a comment?</h3>
			</button>
		) : null;
	return (
		<div className="comment-page">
			{/* {console.log("comment_page", currComments)} */}
			{postForm}
			<CommentIndex comments={comments} setCurrComments={setComments} />
		</div>
	);
};
