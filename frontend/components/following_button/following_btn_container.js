import { connect } from 'react-redux'
import followingBtn from './following_btn'
import {
  createFollowing,
  deleteFollowing,
  eraseFollowingErrors
} from '../../actions/following_actions'
import { getUser } from '../../actions/user_actions'

const mSTP = (state, ownProps) => ({
  currUser: state.entities.users[state.session.currentUser.id],
  user: state.entities.users[ownProps.userId]
});

const mDTP = (dispatch) => ({
  createFollowing: (following) => dispatch(createFollowing(following)),
  deleteFollowing: (following) => dispatch(deleteFollowing(following)),
  eraseFollowingErrors: () => dispatch(eraseFollowingErrors()),
  getUser: userId => dispatch(getUser(userId)),
});

export default connect(mSTP, mDTP)(followingBtn)