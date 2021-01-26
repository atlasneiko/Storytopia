import React from "react";
import { withRouter } from "react-router-dom";
import { icons } from "../../../util/icon_util";
import FollowingBtn from "../../following_button/following_btn_container";
import WrongLink from "../../webpage/404";

class UserShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.user;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUnmount() {
		this.props.eraseUserErrors();
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.update(this.state);
		this.props.history.push("/");
	}

	profile() {
		const { user, currentUserId, profileId } = this.props;

		return (
			<div className="profile">
				{icons[Math.floor(Math.random() * icons.length)]}
				{console.log(user.id)}
				<FollowingBtn userId={user.id} />
				<p>About</p>
				<h3>{user.username}</h3>
				<p>{user.about}</p>
			</div>
		);
	}
	render() {
		if (this.props.profileId === "redirect") {
			return <WrongLink />;
		} else {
			return this.props.user ? this.profile() : null;
		}
	}
}
export default withRouter(UserShow);
