import React from "react";
import IndexItemContainer from "./index_item_container";

class StoryIndex extends React.Component {
	render() {
		if (this.props.user) {
			// console.log(this.props.user.stories);
			console.log(this.props.user);
			return (
				<div className="profile-index">
					<ul>
						{this.props.user.stories.map((storyId) => (
							<IndexItemContainer
								storyId={storyId}
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
