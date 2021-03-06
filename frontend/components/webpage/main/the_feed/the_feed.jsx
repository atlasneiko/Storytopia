import React, { useState, useRef, useCallback, useEffect } from "react";
import FeedItem from "./the_feed_item";

export default function TheFeed({
	stories,
	users,
	getAllUsers,
	fetchAllStories,
}) {
	const [pageNumber, setPageNumber] = useState(0);
	const [currFeedArr, setCurrFeed] = useState([0, 1, 2, 3, 4]);
	const storyArr = Object.values(stories);
	const maxPage = storyArr.length / 5;
	const observer = useRef();
	const loadMore = useCallback(
		(loader) => {
			if (observer.current) observer.current.disconnect();
			let options = {
				root: null,
				rootMargin: "0px",
				threshold: 1,
			};
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting) {
					if (maxPage * pageNumber === 0 || maxPage > pageNumber)
						setPageNumber((pre) => pre + 1);
					let newFeed = currFeedArr
						.slice(currFeedArr.length - 5, currFeedArr.length)
						.map((idx) => idx + 5);
					setCurrFeed(currFeedArr.concat(newFeed));
				}
			}, options);
			if (loader) observer.current.observe(loader);
		},
		[pageNumber]
	);

	if (storyArr.length >= 50 && Object.keys(users).length >= 20) {
		return (
			<div id="feed">
				{currFeedArr.map((storyIdx) => (
					<FeedItem
						key={`feed-${storyIdx}`}
						story={storyArr[storyIdx]}
						user={users[storyArr[storyIdx].userId]}
					/>
				))}
				{pageNumber < maxPage ? (
					<div ref={loadMore} id="loading">
						<h1>Loading...</h1>
					</div>
				) : (
					<div id="feed-bottom">
						<h1>Welcome to the pit bottom</h1>
					</div>
				)}
			</div>
		);
	} else {
		return null;
	}
}
