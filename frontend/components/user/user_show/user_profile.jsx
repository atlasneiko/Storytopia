import React from "react";
import WrongLink from "../../webpage/404";
import { Redirect } from "react-router-dom";
class UserShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
		};

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
		this.props.update(this.state.user);
		this.props.history.push("/");
	}

	profile() {
		const { user, currentUserId, profileId } = this.props;
		if (currentUserId == profileId && currentUserId !== 41) {
			return (
				<div className="profile-form">
					<form onSubmit={this.handleSubmit}>
						<label>
							Username:
							<br />
							<input
								type="text"
								value={this.state.user.username}
								onChange={this.update("username")}
							/>
						</label>
						<br />
						<label>
							Email:
							<br />
							<input
								type="text"
								value={this.state.user.email}
								onChange={this.update("email")}
							/>
						</label>
						<br />
						<label>
							About
							<br />
							<textarea
								value={this.state.user.about}
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
					<h1>Username: {user.username}</h1>
					<h3>Email: {user.email}</h3>
					<h4>About: {user.about}</h4>
				</div>
			);
		}
	}
	render() {
		console.log("profileId", this.props.profileId);
		console.log("user", this.props.user);
		if (this.props.profileId === "redirect") {
			return <WrongLink />;
		} else {
			return this.props.user ? this.profile() : null;
		}
	}
}
export default UserShow;
