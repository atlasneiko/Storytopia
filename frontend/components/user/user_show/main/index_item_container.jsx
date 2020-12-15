import React from "react";
import { connect } from "react-redux";
import { fetchStory } from "../../../../actions/story_actions";
import indexItem from "./index_item";

const mSTP = (state, ownProps) => ({
	storyId: ownProps.storyId,
	story: state.entities.stories[ownProps.storyId],
});

const mDTP = (dispatch) => ({
	fetchStory: (storyId) => dispatch(fetchStory(storyId)),
});

export default connect(mSTP, mDTP)(indexItem);
//update