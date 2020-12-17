import React from "react";
import { Link } from "react-router-dom";

import { closeIcon, shuffleIcon } from "../../util/icon_util";
import { imgArr } from "../../util/img_utils";
import DeleteButtonContainer from "./story_delete_button/delete_button_container";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.story;
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		if (this.props.formTypes === "Edit this Story") {
			this.props.fetchStory(this.props.storyId);
			if (this.props.story) {
				this.setState({ img_id: this.props.story.imgId });
			}
		}
	}

	componentDidUpdate() {
		if (
			this.props.formTypes === "Edit this Story" &&
			this.state.title === "" &&
			this.props.story.title !== ""
		) {
			this.setState({ ...this.props.story, img_id: this.props.story.imgId });
		}
	}

	componentWillUnmount() {
		this.props.eraseStoryErrors();
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.action(this.state).then((res) => this.props.history.push("/"));
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
		if (this.props.story) {
			return (
				<div id="story-form-page">
					<div id="story-form-header">
						<Link to="/">{closeIcon}</Link>
						<h1>{this.props.formTypes}</h1>
						<DeleteButtonContainer storyId={this.props.story.id} />
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
							<p>word count: {this.state.body.split(" ").length}</p>

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
		} else {
			return null;
		}
	}
}

export default SessionForm;
