import React from "react";
import { Link } from "react-router-dom";

import { closeIcon, removeIcon, icons } from "../../util/icon_util";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { comment: this.props.comment };
		this.currIcon = icons[Math.floor(Math.random() * icons.length)];

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentWillUnmount() {
		this.props.eraseCommentErrors();
	}

	handleSubmit(e) {
		e.preventDefault();

		const snakeComment = {
			body: this.state.comment.body,
			user_id: this.state.comment.userId,
			story_id: this.state.comment.storyId,
			id: this.state.comment.id,
		};
		// console.log("handleSubmit", this.props.comments);

		this.props.action(snakeComment).then((res) => {
			// console.log("res.comment", res.comment);
			let newComments = this.props.comments.filter(
				(currComment) => Object.values(currComment)[0].id !== res.comment.id
			);
			newComments.push({ [res.comment.id]: res.comment });
			// console.log("comments", this.props.comments);
			// console.log("newComments", newComments);
			this.props.comments.forEach((currComment) => {
				// console.log(Object.values(currComment)[0].id === res.comment.id);
			});
			this.props.setCurrComments(newComments);
		});
		this.props.toggleDisplay();
		// window.location.reload();
	}

	handleDelete() {
		this.props.removeComment(this.props.comment.id);
	}

	update(field) {
		return (e) =>
			this.setState({
				comment: { ...this.state.comment, [field]: e.target.value },
			});
	}

	renderErrors() {
		// console.log(this.props.componentDisplay);
		return (
			<ul id="session-errors">
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}
	render() {
		if (this.props.comment) {
			return (
				<div id="comment-form-page">
					{/* {console.log(this.props)} */}
					<div id="comment-form-header">
						<button onClick={() => this.props.toggleDisplay()}>
							{closeIcon}
						</button>
						<h1>{this.props.formTypes}</h1>
						{this.props.formType === "Edit a Comment" ? (
							<button onClick={this.handleDelete}>{removeIcon}</button>
						) : null}

						{this.props.formType !== "Edit a Comment" ? (
							<p>
								{this.currIcon}
								<span className="inline-space"></span>
								{this.props.username}
							</p>
						) : null}
						{/* <DeleteButtonContainer commentId={this.props.comment.id} /> */}
					</div>
					<form onSubmit={this.handleSubmit} id="comment-form">
						{/* story title */}

						<label id="story-body">
							<textarea
								value={this.state.comment.body}
								onChange={this.update("body")}
								id="story-body"
								autoComplete="off"
								// placeholder="What's in your beautiful mind?"
							/>

							{this.props.errors.includes("Body can't be blank") ? (
								<p className="session-error">Comment can't be blank</p>
							) : null}
						</label>
						<br />

						<div id="form-buttons">
							<button type="submit">Post</button>
							<button onClick={() => this.props.toggleDisplay()}>Cancel</button>
						</div>
					</form>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default SessionForm;
