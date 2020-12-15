import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";

class UserHeader extends React.Component {
	constructor(props) {
		super(props);
		// this.state = this.props.user;
	}
	header() {
		const { user } = this.props;
		return (
			<header id="user-header">
				<div className="user-h-info">
					<h1>{user.username}</h1>
					<h4>{user.stories.length} stories</h4>
					<h4># of followers</h4>
					<Link to={`/users/${user.id}/about`}>About</Link>
				</div>
				<nav>
					<Link to="/">
						<FontAwesomeIcon icon={faBroom} />
					</Link>
				</nav>
			</header>
		);
	}
	render() {
		return this.props.user === undefined ? null : this.header();
	}
}

export default UserHeader;
