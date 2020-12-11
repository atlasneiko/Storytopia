import React from "react";
import DemoButton from "../webpage/demo/demo_button_container";
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
			<div id="session-form">
				{this.renderErrors()}
				<h1>{this.props.formTypes}</h1>
				{/* {this.props.navLink} */}
				<form onSubmit={this.handleSubmit}>
					<label>
						Username
						<br />
						<input
							type="text"
							value={this.state.username}
							onChange={this.update("username")}
							autoComplete="username"
						/>
					</label>
					<br />
					<label>
						Password
						<br />
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							autoComplete="current-password"
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
							<label>
								About
								<br />
								<textarea
									value={this.state.about}
									onChange={this.update("about")}
								/>
							</label>
						</>
					) : null}

					<button type="submit">{this.props.formTypes}</button>
					<DemoButton />
				</form>
			</div>
		);
	}
}

export default SessionForm;
