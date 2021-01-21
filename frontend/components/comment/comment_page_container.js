import CommentPage from "./comment_page.jsx"
import { fetchStory } from "../../actions/story_actions"
const mSTP = (state, ownProps) => ({
  user: state.session.currentUser,
  stories: state.enetities.stories,
  storyId: ownProps.storyId
});

const mDTP = (dispatch) => ({
  fetchStory: (storyId) => dispatch(fetchStory(storyId)),
});

export default connect(mSTP, mDTP)()