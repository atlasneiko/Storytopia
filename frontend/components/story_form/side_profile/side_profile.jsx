import React from "react";
import { bookmarkIcon, commentIcon } from "../../../util/icon_util";
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
			<h3>{user.username}</h3>
			<p>{user.about}</p>
			<div>
				{currClapId ? (
					<UpdateClapContainer clapId={currClapId} />
				) : (
					<CreateClapContainer storyId={story.id} />
				)}
				{bookmarkIcon}
				<button onClick={() => handleToggle()}>{commentIcon}</button>
			</div>
		</aside>
	);
};
