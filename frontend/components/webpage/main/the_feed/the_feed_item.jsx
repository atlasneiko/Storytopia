import React from "react";
import { Link } from "react-router-dom";
import { icons, bookmarkIcon, dotsIcon } from "../../../../util/icon_util";
import { RandomImg, imgArr } from "../../../../util/img_utils";

export default ({ story, user }) => {
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
	const icon = icons[Math.floor(Math.random() * icons.length)];
	// console.log("story", story);
	// console.log("user", user);
	let date = story.updatedAt.slice(0, 10).split("-");
	[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
	date = date.join("/");
	return (
		<li className="feed-item">
			<Link to={`/stories/${story.id}`}>
				{/* need to hold everyting in a Link tag */}
				<div className="feed-item-info">
					<p>
						{icon}
						<span className="inline-space"></span>
						{user.username}
					</p>
					<h2>{story.title}</h2>
					<h3>{story.subtitle}</h3>
					{/* need to be a link tag too */}
					<div className="feed-item-footer">
						<div className="feed-footer-info">
							<p>{date}</p>
							<p>{readTime}</p>
						</div>
						<div className="feed-footer-icon">
							<p>{bookmarkIcon}</p>
							<p>{dotsIcon}</p>
						</div>
					</div>
				</div>
			</Link>
			<div className="feed-item-img">
				<img src={imgArr[story.imgId]} alt="ghibli img" />
			</div>
		</li>
	);
};
