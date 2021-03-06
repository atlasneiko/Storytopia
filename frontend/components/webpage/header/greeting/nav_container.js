import { connect } from "react-redux";
import { logout } from "../../../../actions/session_actions";
import Nav from "./nav";

const mapStateToProps = ({
  session: { currentUser },
  entities: { users },
}) => ({
  currentUser: users[currentUser.id],
  loggedIn: Boolean(currentUser.id)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
