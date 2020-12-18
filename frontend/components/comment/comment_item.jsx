import React, { useEffect, useState } from "react";
import { clapIcon, commentIcon, icons } from "../../util/icon_util";
import CommentEditContainer from "./comment_edit_container";
export default ({ comment, user, getUser }) => {
	const currIcon = icons[Math.floor(Math.random() * icons.length)];
	let date = comment.updatedAt.slice(0, 10).split("-");
	[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
	date = date.join("/");
	const [editDisplay, toggleEditDisplay] = useState(false);
	const toggleDisplay = () => toggleEditDisplay((editDisplay) => !editDisplay);
	useEffect(() => {
		// console.log("useEffect");
		getUser(comment.userId);
	}, []);
	if (user) {
		if (!editDisplay) {
			return (
				<div className="comment-item">
					<header>
						{currIcon}
						<span className="inline-space" />
						{user.username}
						<span className="inline-space" />
						{date}
					</header>
					<div>
						<section>{comment.body}</section>
						<aside>
							{clapIcon}
							<br />
							{commentIcon}
						</aside>
					</div>
					<button onClick={() => toggleDisplay()}>Edit this post</button>
				</div>
			);
		} else {
			return <CommentEditContainer comment={comment} />;
		}
	} else {
		console.log("null");
		return null;
	}
};
