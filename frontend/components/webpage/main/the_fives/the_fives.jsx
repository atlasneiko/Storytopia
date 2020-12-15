import TheFiveItem from "./the_five_item";
import React from "react";
import { imgArr } from "../../../../util/img_utils";
export default ({ stories, users }) => {
	if (stories !== {} && Object.keys(users).length > 1) {
		const theFives = [];
		for (let i = 0; i < 5; i++) {
			theFives.push(
				stories[Math.floor(Math.random() * Object.keys(stories).length)]
			);
		}
		return (
			<div id="the-fives">
				{/* <h1>The fives</h1> */}
				{theFives.map((story, i) => (
					<div key={`the-five-${i}`} id={`the-fives-${i}`}>
						<TheFiveItem story={story} user={users[story.userId]} />
						<div>
							<img src={imgArr[story.imgId]} alt="ghibli img" />
						</div>
					</div>
				))}
			</div>
		);
	} else {
		return null;
	}
};
