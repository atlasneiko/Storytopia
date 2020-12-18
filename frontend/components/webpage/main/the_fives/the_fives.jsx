import TheFiveItem from "./the_five_item";
import React, { useEffect } from "react";
import { imgArr } from "../../../../util/img_utils";
import { Link } from "react-router-dom";
export default ({ stories, users, getAllUsers, fetchAllStories }) => {
	if (Object.keys(stories).length >= 100 && Object.keys(users).length >= 20) {
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
