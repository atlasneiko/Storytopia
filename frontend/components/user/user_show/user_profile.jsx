import React from "react";
import WrongLink from "../../webpage/404";
import { withRouter } from "react-router-dom";
import { icons } from "../../../util/icon_util";
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
		if (currentUserId == profileId && currentUserId !== 1) {
			return (
				<div className="profile-form">
					<form onSubmit={this.handleSubmit}>
						<label>
							Username:
							<br />
							<input
								type="text"
								value={this.state.username}
								onChange={this.update("username")}
							/>
						</label>
						<br />
						<label>
							Email:
							<br />
							<input
								type="text"
								value={this.state.email}
								onChange={this.update("email")}
							/>
						</label>
						<br />
						<label>
							About
							<br />
							<textarea
								value={this.state.about}
								onChange={this.update("about")}
							/>
						</label>
						<br />
						<button type="submit">Edit Profile</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className="profile">
					{icons[Math.floor(Math.random() * icons.length)]}
					<h1>Username: {user.username}</h1>
					<h3>Email: {user.email}</h3>
					<h4>About: {user.about}</h4>
				</div>
			);
		}
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
