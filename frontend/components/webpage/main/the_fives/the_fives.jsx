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
			<div>
				<h1>The fives</h1>
				<ul>
					{theFives.map((story, i) => {
						if (i === 0) {
							return (
								<div key={`the-five-${i}`}>
									<TheFiveItem story={story} user={users[story.userId]} />
								</div>
							);
						} else {
							return (
								<TheFiveItem
									story={story}
									user={users[story.userId]}
									key={`the-five-${i}`}
								/>
							);
						}
					})}
				</ul>
			</div>
		);
	} else {
		return null;
	}
};
