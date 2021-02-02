import React from "react";
import CommentItemContainer from "./comment_item_container";
export default ({ comments, setCurrComments }) => {
	const commentArr = comments.map((comment, i) => {
		// console.log("comment_index", comment);
		return (
			<CommentItemContainer
				key={`comment-${i}`}
				// comment={Object.values(comment)[0]}
				// comment={Object.values(comment)[0]}
				comment={Object.values(comments[comments.length - (i + 1)])[0]}
				setCurrComments={setCurrComments}
				comments={comments}
			/>
		);
	});
	return <ul id="comment-index">{commentArr}</ul>;
};
