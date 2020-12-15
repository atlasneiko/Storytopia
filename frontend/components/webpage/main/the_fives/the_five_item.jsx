import React from "react";
import { Link } from "react-router-dom";
import { icons } from "../../../../util/icon_util";
export default ({ story, user, key }) => {
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

	return (
		<li>
			{/* need to hold everyting in a Link tag */}
			<Link to={`/stories/${story.id}`}>
				<p>
					{user.username} {icon}
				</p>
				<h2>{story.title}</h2>
				<h3>{story.subtitle}</h3>
				{/* need to be a link tag too */}
				<h4>Read More</h4>
				<p>{readTime}</p>
			</Link>
		</li>
	);
};
