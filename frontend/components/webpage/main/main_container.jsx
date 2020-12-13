import { connect } from "react-redux";
import { fetchAllStories } from "../../../actions/story_actions";
import { getAllUsers } from "../../../actions/user_actions";
import Main from "./Main";
const mSTP = (state, ownProps) => ({
	stories: state.entities.stories,
	users: state.entities.users,
});

const mDTP = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers()),
	fetchAllStories: () => dispatch(fetchAllStories()),
});

export default connect(mSTP, mDTP)(Main);
