import React from "react";

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.user;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action(this.state);
	}
	render() {
		const profile = () => {
			if (this.state.id === this.props.currentUserId) {
				<form id="profile" onSubmit={this.handleSubmit}>
					<label>
						Username:
						<input
							type="text"
							value={this.state.username}
							onChange={this.update(user.username)}
						/>
					</label>
					<label>
						Password:
						<input
							type="password"
							value={this.state.username}
							onChange={this.update(user.username)}
						/>
					</label>
				</form>;
			} else {
				<div className="profile">
					<h1>{this.state.username}</h1>
					<p>{this.state.email}</p>
				</div>;
			}
		};
	}
}
export default UserProfile;
