import React, { useEffect, useState } from "react";
import { fetchClap } from "../../actions/clap_actions";
import {
	icons,
	bookmarkIcon,
	dotsIcon,
	commentIcon,
} from "../../util/icon_util";
import { imgArr } from "../../util/img_utils";
import CreateClapContainer from "../webpage/clap_button/create_clap_container";
import UpdateClapContainer from "../webpage/clap_button/update_clap_container";
import SideProfile from "./side_profile/side_profile_container";
import CommentPage from "../comment/comment_page";

export default ({
	storyId,
	story,
	users,
	fetchStory,
	getAllUsers,
	currUser,
	errors,
	toggleCommentPage,
	commentPageDisplay,
	loggedIn,
}) => {
	useEffect(() => {
		fetchStory(storyId);
		getAllUsers();
	}, []);
	const handleToggle = () => toggleCommentPage();
	// const [comments, setComments] = useState(story.comments);
	const icon = icons[Math.floor(Math.random() * icons.length)];
	if (Object.keys(users).length > 1 && !!story) {
		const user = users[story.userId];
		let date = story.updatedAt.slice(0, 10).split("-");
		[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
		date = date.join("/");

		let body = story.body.split("\n").map((paragraph, i) => (
			<p key={`${story.id}-${i}`}>
				{paragraph}
				<br />
			</p>
		));
		let readTime = story.body.split(" ").length / 100;

		if (readTime < 2) {
			readTime = "2 mins";
		} else if (readTime >= 3 && readTime <= 5) {
			readTime = "5 mins";
		} else if (readTime >= 6 && readTime <= 10) {
			readTime = "8 mins";
		} else if (readTime >= 11 && readTime <= 15) {
			readTime = "14 mins";
		} else {
			readTime = "15+ mins";
		}
		const renderErrors = () => {
			return (
				<ul id="session-errors">
					{errors.map((error, i) => (
						<li key={`error-${i}`}>{error}</li>
					))}
				</ul>
			);
		};
		// const currClap = currUser
		// 	? currUser.claps.filter((clapId) => story.claps.includes(clapId))[0]
		// 	: undefined;
		// // console.log(story);
		const image = <img src={imgArr[story.imgId]} alt="ghibli image" />;
		return (
			<div id="user-show">
				{/* {renderErrors()} */}
				<SideProfile
					user={user}
					story={story}
					currUser={currUser ? currUser : { id: undefined }}
				/>
				{commentPageDisplay ? (
					<CommentPage
						username={currUser ? currUser.username : ""}
						storyId={storyId}
						comments={story.comments}
						loggedIn={loggedIn}
					/>
				) : null}
				<div className="story-show">
					<h1>{story.title}</h1>
					<div className="story-show-header">
						<div id="story-header-info">
							<span>{icon}</span>
							<div>
								<h5>{user.username}</h5>
								<p> {date}</p>
							</div>
						</div>
						<div id="story-header-nav">
							{bookmarkIcon}
							{dotsIcon}
						</div>
					</div>
					{image}
					<article className="story-show-body">{body}</article>
					<footer>
						<button onClick={() => handleToggle()}>{commentIcon}</button>
						{bookmarkIcon}
						{dotsIcon}
					</footer>
					{/* <section>
						<h2>{user.username}</h2>
						<p>{user.about}</p>
						<button>Follow</button>
					</section>
					{currClap ? (
						<div>
							<UpdateClapContainer clapId={currClap} />
						</div>
					) : (
						<div>
							<CreateClapContainer storyId={story.id} />
						</div>
					)} */}
				</div>
			</div>
		);
	} else {
		return null;
	}
};
