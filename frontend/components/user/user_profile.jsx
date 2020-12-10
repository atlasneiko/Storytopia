import React from "react";
import WrongLink from "../webpage/404";
class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.user;
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		// console.log(this.props.user);
		this.props.getUser(this.props.profileId);
		// console.log(this.props.user);
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
		if (currentUserId == profileId && currentUserId !== 10) {
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
					<h1>Username: {user.username}</h1>
					<h3>Email: {user.email}</h3>
					<h4>About: {user.about}</h4>
				</div>
			);
		}
	}

	render() {
		return !this.props.user ? <WrongLink /> : this.profile();
	}
}
export default UserProfile;
