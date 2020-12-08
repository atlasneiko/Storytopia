import React from "react";

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.user;
		console.log(this.state);
		console.log(this.props.currentUserId);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.update(this.state);
	}
	render() {
		let profile;
		if (
			this.state.id === this.props.currentUserId &&
			this.props.currentUserId !== 10
		) {
			profile = (
				<div>
					<form id="profile" onSubmit={this.handleSubmit}>
						<label>
							Username:
							<input
								type="text"
								value={this.state.username}
								onChange={this.update("username")}
							/>
						</label>
						<br />
						<label>
							Email:
							<input
								type="text"
								value={this.state.email}
								onChange={this.update("email")}
							/>
						</label>
						<br />
						<button type="submit">Edit Profile</button>
					</form>
				</div>
			);
		} else {
			profile = (
				<div className="profile">
					<h1>Username: {this.state.username}</h1>
					<p>Email: {this.state.email}</p>
				</div>
			);
		}

		return profile;
	}
}
export default UserProfile;
