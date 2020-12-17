import React from "react";
import { Link } from "react-router-dom";

import { closeIcon, removeIcon, icons } from "../../util/icon_util";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { comment: this.props.comment, display: this.props.display };
		this.currIcon = icons[Math.floor(Math.random() * icons.length)];

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}

	componentWillUnmount() {
		this.props.eraseCommentErrors();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props
			.action(this.state.comment)
			.then((res) => this.props.history.push("/"));
	}

	handleDelete() {
		this.props.removeComment(this.props.comment.id);
	}

	toggleDisplay(e) {
		e.preventDefault();
		this.setState({ display: !this.state.display });
	}

	update(field) {
		return (e) =>
			this.setState({
				comment: { ...this.state.comment, [field]: e.target.value },
			});
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
		if (this.props.comment && this.state.display) {
			return (
				<div id="comment-form-page">
					<div id="comment-form-header">
						<Link to="/">{closeIcon}</Link>
						<h1>{this.props.formTypes}</h1>
						{this.props.formType === "Edit a Comment" ? (
							<button onClick={this.handleDelete}>{removeIcon}</button>
						) : null}
						<div className="comment-user-info">
							{this.currIcon}
							{this.props.username}
						</div>
						{/* <DeleteButtonContainer commentId={this.props.comment.id} /> */}
					</div>
					<form onSubmit={this.handleSubmit} id="comment-form">
						{/* story title */}

						<label id="story-body">
							<textarea
								value={this.state.body}
								onChange={this.update("body")}
								id="story-body"
								autoComplete="off"
								placeholder="What's in your beautiful mind?"
							/>

							{this.props.errors.includes("Body can't be blank") ? (
								<p className="session-error">Comment can't be blank</p>
							) : null}
						</label>
						<br />

						<div id="form-buttons">
							<button type="submit">{this.props.formTypes}</button>
						</div>
					</form>
					<button onClick={this.toggleDisplay}>Cancel</button>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default SessionForm;
