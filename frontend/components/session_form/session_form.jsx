import React from "react";
import DemoButton from "../webpage/demo/demo_button_container";
class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
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
			<ul id="session-errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}
	render() {
		return (
			<div id="session-form">
				<h1>{this.props.formTypes}</h1>
				<form onSubmit={this.handleSubmit}>
					<label>
						Username
						<br />
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
						/>
					</label>
					<br />
					{this.props.formTypes === "Sign Up" ? (
						<>
							<label>
								Email
								<br />
								<input
									type="text"
									value={this.state.email}
									onChange={this.update("email")}
								/>
							</label>
							<br />
						</>
					) : null}

					<label>
						Password
						<br />
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
						/>
					</label>
					<br />
					{this.props.navLink}
					<button type="submit">{this.props.formTypes}</button>
				</form>
				<DemoButton />
				{this.renderErrors()}
			</div>
		);
	}
}

export default SessionForm;
