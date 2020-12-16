import React, { useEffect, useState } from "react";
import { icons, bookmarkIcon, dotsIcon } from "../../util/icon_util";
import { imgArr } from "../../util/img_utils";
import CreateClapContainer from "../webpage/clap_button/create_clap_container";
import UpdateClapContainer from "../webpage/clap_button/update_clap_container";

export default ({ storyId, story, users, fetchStory, getAllUsers }) => {
	useEffect(() => {
		fetchStory(storyId);
		getAllUsers();
	}, []);

	console.log("story", story);
	// console.log("users", users);
	const icon = icons[Math.floor(Math.random() * icons.length)];
	if (Object.keys(users).length > 1 && !!story) {
		const user = users[story.userId];

		let date = story.updatedAt.slice(0, 10).split("-");
		[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
		date = date.join("/");

		let body = story.body.split("<br />").map((paragraph, i) => (
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
		const image = <img src={imgArr[story.imgId]} alt="ghibli image" />;

		const currClap = user.claps.map((clapId) => {
			if (story.claps.includes(clapId)) {
				return clapId;
			}
		})[0];

		return (
			<div>
				<h1>{story.title}</h1>
				<div className="story-show-header">
					{icon}
					<p>{user.username}</p>
					<p>{date}</p>
					{bookmarkIcon}
					{dotsIcon}
				</div>
				{image}
				<article className="story-show-body">{body}</article>
				<footer>
					<p>like!</p>
					<p>comment</p>
					{bookmarkIcon}
					{dotsIcon}
				</footer>
				<section>
					<h2>{user.username}</h2>
					<p>{user.about}</p>
					<button>Follow</button>
				</section>
				{currClap ? (
					<UpdateClapContainer clap={currClap} />
				) : (
					<CreateClapContainer storyId={story.id} />
				)}
			</div>
		);
	} else {
		return null;
	}
};
