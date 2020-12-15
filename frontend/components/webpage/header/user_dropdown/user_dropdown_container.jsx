import DropdownMenu from "./dropdown_menu";
import { connect } from "react-redux";
import { logout } from "../../../../actions/session_actions";
const mSTP = (state, ownProps) => ({
	user: state.entities.users[state.session.currentUser.id],
});

const mDTP = (dispatch) => ({
	logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(DropdownMenu);
