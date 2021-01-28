import React from "react";
import IndexItemContainer from "./index_item_container";

class StoryIndex extends React.Component {
	render() {
		if (this.props.user) {
			// console.log(this.props.user.stories);
			return (
				<div className="profile-index">
					<ul>
						{this.props.user.stories.map((storyId, i) => (
							<IndexItemContainer
								storyId={
									this.props.user.stories[
										this.props.user.stories.length - (1 + i)
									]
								}
								key={`story-index-${storyId}`}
							/>
						))}
					</ul>
				</div>
			);
		} else {
			return null;
		}
	}
}
export default StoryIndex;
