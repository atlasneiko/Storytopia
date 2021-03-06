import { connect } from "react-redux";
import { fetchAllStories } from "../../../actions/story_actions";
import { getAllUsers } from "../../../actions/user_actions";
import Main from "./main";
const mSTP = (state, ownProps) => ({
	stories: state.entities.stories,
	users: state.entities.users,
	loggedIn: Boolean(state.session.currentUser.id),
});

const mDTP = (dispatch) => ({
	getAllUsers: () => dispatch(getAllUsers()),
	fetchAllStories: () => dispatch(fetchAllStories()),
});

export default connect(mSTP, mDTP)(Main);
