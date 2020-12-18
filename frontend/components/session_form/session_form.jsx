import React from "react";
import { Link } from "react-router-dom";

import DemoButton from "../webpage/demo/demo_button_container";
import { closeIcon } from "../../util/icon_util";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
			about: "",
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUnmount() {
		console.log("unmount");
		this.props.eraseSessionErrors();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action(this.state);
		// this.props.history.push("/");
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
			<div id="session-form-page">
				<div id="session-form-header">
					<Link to="/">{closeIcon}</Link>
					<h1>{this.props.formTypes}</h1>
				</div>
				<form onSubmit={this.handleSubmit} id="session-form">
					<label id="session-username">
						Username
						<br />
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
							autoComplete="username"
							placeholder="Username"
						/>
						{this.props.errors.includes("Username can't be blank") ? (
							<p className="session-error">Username can't be blank</p>
						) : null}
					</label>
					<br />
					<label id="session-password">
						Password
						<br />
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							autoComplete="current-password"
							placeholder="Password"
						/>
						{this.props.errors.includes(
							"Password is too short (minimum is 6 characters)"
						) ? (
							<p className="session-error">
								Password is too short (minimum is 6 characters)
							</p>
						) : null}
					</label>
					<br />
					{this.props.formTypes === "Sign Up" ? (
						<>
							<label id="session-email">
								Email
								<br />
								<input
									type="text"
									value={this.state.email}
									onChange={this.update("email")}
									placeholder="Email"
								/>
								{this.props.errors.includes("Email can't be blank") ? (
									<p className="session-error">Email can't be blank</p>
								) : null}
							</label>
							<br />
							<label>
								About
								<br />
								<textarea
									value={this.state.about}
									onChange={this.update("about")}
									placeholder="Tell people about you!"
								/>
							</label>
						</>
					) : null}
					<div id="session-buttons">
						<button type="submit">
							<p>{this.props.formTypes}</p>
						</button>
						<DemoButton />
					</div>

					{this.props.errors.includes("invalid credentials") ? (
						<p className="session-error" className="session-error">
							invalid credentials
						</p>
					) : null}
				</form>
			</div>
		);
	}
}

export default SessionForm;
