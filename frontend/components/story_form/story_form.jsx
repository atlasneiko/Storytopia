import React from "react";
import { Link } from "react-router-dom";

import { closeIcon, shuffleIcon } from "../../util/icon_util";
import { imgArr } from "../../util/img_utils";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.story;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentWillUnmount() {
		console.log("unmount");
		this.props.eraseStoryErrors();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action(this.state);
		this.props.history.push("/");
	}
	randomImgUrl() {
		const newImgIdx = Math.floor(Math.random() * imgArr.length);
		this.setState({ img_id: newImgIdx });
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
		console.log(this.state);
		return (
			<div id="story-form-page">
				<div id="story-form-header">
					<Link to="/">{closeIcon}</Link>
					<h1>{this.props.formTypes}</h1>
				</div>
				<form onSubmit={this.handleSubmit} id="story-form">
					{/* story title */}

					<label id="story-title">
						<input
							type="text"
							value={this.state.title}
							onChange={this.update("title")}
							autoComplete="off"
							placeholder="Title"
						/>
						{this.props.errors.includes("Title can't be blank") ? (
							<p className="story-error">Title can't be blank</p>
						) : null}
					</label>
					<br />

					{/*  story subtitle */}

					<label id="story-subtitle">
						<br />
						<input
							type="text"
							value={this.state.subtitle}
							onChange={this.update("subtitle")}
							autoComplete="off"
							placeholder="Subtitle"
						/>
					</label>
					<br />

					{/* image random generator */}

					<label id="story-img">
						<img src={imgArr[this.state.img_id]} alt="ghibli img" />
						<div onClick={() => this.randomImgUrl()}>{shuffleIcon}</div>
					</label>

					{/* story body */}

					<label id="story-body">
						<br />
						<textarea
							value={this.state.body}
							onChange={this.update("body")}
							id="story-body"
							autoComplete="off"
							placeholder="This is where the magic begins"
						/>
						{this.props.errors.includes("Body can't be blank") ? (
							<p className="session-error">Body can't be blank</p>
						) : null}
					</label>
					<br />

					<div id="session-buttons">
						<button type="submit">{this.props.formTypes}</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SessionForm;

// {this.props.formTypes === "Sign Up" ? (
// 						<>
// 							<label id="session-email">
// 								Email
// 								<br />
// 								<input
// 									type="text"
// 									value={this.state.email}
// 									onChange={this.update("email")}
// 								/>
// 								{/* {this.props.errors.includes("Email can't be blank") ? (
// 									<p className="session-error">Email can't be blank</p>
// 								) : null} */}
// 							</label>
// 							<br />
// 							<label>
// 								About
// 								<br />
// 								<textarea
// 									value={this.state.about}
// 									onChange={this.update("about")}
// 								/>
// 							</label>
// 						</>
// 					) : null}
