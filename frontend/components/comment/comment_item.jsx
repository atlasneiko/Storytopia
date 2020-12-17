import React, { useEffect } from "react";
import { clapIcon, commentIcon, icons } from "../../util/icon_util";
export default ({ comment, user, getUser }) => {
	const currIcon = icons[Math.floor(Math.random() * icons.length)];
	let date = comment.updatedAt.slice(0, 10).split("-");
	[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
	date = date.join("/");

	useEffect(() => {
		console.log("useEffect");
		getUser(comment.userId);
	}, []);
	if (user) {
		console.log("user", user);
		console.log("comment", comment);
		return (
			<div className="comment-item">
				<header></header>
				{currIcon}
				{user.username}
				{date}
				<section>{comment.body}</section>
				<aside>
					{clapIcon}
					<br />
					{commentIcon}
				</aside>
			</div>
		);
	} else {
		return null;
	}
};
