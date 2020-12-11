import React from "react";
import { Link } from "react-router-dom";
class UserHeader extends React.Component {
	constructor(props) {
		super(props);
		// this.state = this.props.user;
	}
	render() {
		return (
			// this.props.user === undefined ?
			<header>
				{/* <h2>{this.props.user.username}</h2>
				<h4>{this.props.user.stories.length}</h4> */}
				<nav>
					<Link to="/">home</Link>
				</nav>
			</header>
		);
	}
}

export default UserHeader;
