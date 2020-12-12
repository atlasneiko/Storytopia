import React from "react";

class IndexItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.stories;
	}
	componentDidMount() {
		// console.log("index item mounted");
		this.props.fetchStory(this.props.storyId);
	}
	render() {
		const { story } = this.props;
		if (story !== undefined) {
			console.log(story);

			let date = story.updatedAt.slice(0, 10).split("-");
			[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
			date = date.join("/");

			let body = story.body.split("<br />").map((paragraph, i) => (
				<p key={`${story.id}-${i}`}>
					{paragraph}
					<br />
				</p>
			));

			console.log(body);
			return (
				<li>
					<h3>{story.title}</h3>
					<h4>{story.subtitle}</h4>
					<p>{date}</p>
					<div>{body}</div>
				</li>
			);
		} else {
			return null;
		}
	}
}
export default IndexItem;
