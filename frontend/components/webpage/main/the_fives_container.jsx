import { connect } from "react-redux";
import { fetchAllStories } from "../../../actions/story_actions";
import FeedOfFive from "./the_fives";

const mSTP = (state, ownProps) => ({
  stories: ownProps.stories,
  users: ownProps.users
});

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(FeedOfFive);
