import React from "react";
import { bookmarkIcon } from "../../../util/icon_util";
import CreateClapContainer from "../../webpage/clap_button/create_clap_container";
import UpdateClapContainer from "../../webpage/clap_button/update_clap_container";
export default ({
	user,
	story,
	currUser,
	toggleCommentPage,
	commentDisplay,
}) => {
	const currClapId = currUser
		? currUser.claps.filter((clapId) => story.claps.includes(clapId))[0]
		: undefined;

	const handleToggle = () => toggleCommentPage();
	return (
		<aside className="story-sidebar">
			<h2>{user.username}</h2>
			<p>{user.about}</p>
			{currClapId ? (
				<UpdateClapContainer clapId={currClapId} />
			) : (
				<CreateClapContainer storyId={story.id} />
			)}
			<p>comment button goes here</p>
			{bookmarkIcon}
			<button onClick={() => handleToggle()}>Comment</button>
		</aside>
	);
};
