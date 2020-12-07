import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({
  session: { currentUser },
  entities: { users },
}) => ({ currentUser: users[currentUser.id] });

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
