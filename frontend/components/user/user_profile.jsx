import React from "react";

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
				<form onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
						/>
					</label>
					<br />
					{/* <label>
						Password:
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
						/>
					</label>
					<br /> */}
					<label>
						Email:
						<input
							type="text"
							value={this.state.email}
							onChange={this.update("email")}
						/>
					</label>
					<br />
					<label>
						About
						<textarea
							value={this.state.about}
							onChange={this.update("about")}
						/>
					</label>
					<br />
					<button type="submit">Edit Profile</button>
				</form>
			);
		} else {
			return (
				<div>
					<h1>Username: {user.username}</h1>
					<h3>Email: {user.email}</h3>
					<h4>About: {user.about}</h4>
				</div>
			);
		}
	}

	render() {
		console.log(this.state);
		return !this.props.user ? null : this.profile();
	}
}
export default UserProfile;
