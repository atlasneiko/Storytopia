import React from "react";
import CommentItemContainer from "./comment_item_container";
export default ({ comments }) => {
	const commentArr = comments.map((comment, i) => {
		return (
			<CommentItemContainer
				key={`comment-${i}`}
				comment={Object.values(comment)[0]}
			/>
		);
	});
	return <ul>{commentArr}</ul>;
};
