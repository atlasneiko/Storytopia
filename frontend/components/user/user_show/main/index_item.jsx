import React from "react";
import { Link } from "react-router-dom";
import { imgArr } from "../../../../util/img_utils";

class IndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.stories;
	}
	componentDidMount() {
		this.props.fetchStory(this.props.storyId);
	}
	render() {
		const { story } = this.props;
		if (story !== undefined) {
			let date = story.updatedAt.slice(0, 10).split("-");
			[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
			date = date.join("/");

			let body = story.body.split("<br />").map((paragraph, i) => {
				if (i === 0) {
					return (
						<p key={`${story.id}-${i}`}>
							{paragraph}
							<br />
						</p>
					);
				}
			});

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

			const currImg = (
				<img className="story-img" src={imgArr[story.imgId]} alt="ghibli img" />
			);

			return (
				<li>
					<p>{date}</p>
					<h3>{story.title}</h3>
					<h4>{story.subtitle}</h4>
					{currImg}
					<div>{body}</div>
					<footer>
						<Link to={`/stories/${story.id}`}>
							<button>Read More</button>
						</Link>

						<p>{readTime}</p>
					</footer>
				</li>
			);
		} else {
			return null;
		}
	}
}
export default IndexItem;
