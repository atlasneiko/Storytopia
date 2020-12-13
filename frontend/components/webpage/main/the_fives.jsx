import TheFiveItem from "./the_five_item";
import React from "react";
export default ({ stories, users }) => {
	if (stories !== {} && Object.keys(users).length > 1) {
		const theFives = [];
		for (let i = 0; i < 5; i++) {
			theFives.push(
				stories[Math.floor(Math.random() * Object.keys(stories).length)]
			);
		}
		return (
			<ul>
				{theFives.map((story, i) => (
					<TheFiveItem
						story={story}
						user={users[story.userId]}
						key={`the-fives-${i}`}
					/>
				))}
			</ul>
		);
	} else {
		return null;
	}
};
