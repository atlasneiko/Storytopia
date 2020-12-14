import TheSixItem from "./the_six_items";
import React from "react";
export default ({ stories, users }) => {
	if (stories !== {} && Object.keys(users).length > 1) {
		let theSixes = Object.values(stories);
		theSixes = theSixes.slice(theSixes.length - 6, theSixes.length);
		return (
			<div id="the-sixes">
				<h1>The sixes</h1>
				<ul>
					{theSixes.map((story, i) => (
						<div id="six-{i}" key={`the-six-${i}`}>
							<TheSixItem story={story} user={users[story.userId]} />
						</div>
					))}
				</ul>
			</div>
		);
	} else {
		return null;
	}
};
