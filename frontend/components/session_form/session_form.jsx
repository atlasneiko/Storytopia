import React from "react";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action(this.state);
	}

	update(field) {
		return (e) => this.setState({ [field]: e.target.value });
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}
	render() {
		return (
			<div>
				<h1>{this.props.formTypes}</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
						/>
					</label>
					<br />
					<label>
						Password
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
						/>
					</label>
					<button type="submit" value={this.props.formTypes} />
				</form>
			</div>
		);
	}
}

export default SessionForm;
