import React from "react";
import WrongLink from "../../../webpage/404";
import FollowingBtn from "../../../following_button/following_btn_container";
import { withRouter } from "react-router-dom";
import { icons } from "../../../../util/icon_util";
class UserShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: this.props.user,
			stories: Object.values(this.props.stories),
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		this.props.getUser(this.props.profileId).then((res) => {
			this.setState({ user: this.props.user });
			this.props.user.stories.forEach((storyId, i) => {
				this.props.fetchStory(storyId).then(() => {
					if (i === this.props.user.stories.length - 1) {
						this.setState({
							...this.state,
							stories: Object.values(this.props.stories),
						});
					}
				});
			});
		});
	}

	componentWillUnmount() {
		this.props.eraseUserErrors();
	}

	update(field) {
		return (e) =>
			this.setState({ user: { ...this.state.user, [field]: e.target.value } });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.update(this.state.user);
		this.props.history.push("/");
	}

	profile() {
		let totalWordCount = 0;
		let totalClapCount = 0;
		this.state.stories.forEach((story) => {
			totalWordCount += story.body.split(" ").length;
			totalClapCount += story.claps.length;
		});
		// console.log(totalWordCount);
		// console.log(totalClapCount);
		// console.log(this.state);
		const { user, currentUserId, profileId } = this.props;
		if (currentUserId == profileId && currentUserId !== 1) {
			return (
				<div className="profile-about">
					<form onSubmit={this.handleSubmit}>
						<label>
							Username:
							<br />
							<input
								type="text"
								value={this.state.user.username}
								onChange={this.update("username")}
							/>
						</label>
						<br />
						<label>
							Email:
							<br />
							<input
								type="text"
								value={this.state.user.email}
								onChange={this.update("email")}
							/>
						</label>
						<br />
						<label>
							About
							<br />
							<textarea
								value={this.state.user.about}
								onChange={this.update("about")}
							/>
						</label>
						<br />
						<button type="submit">Edit Profile</button>
					</form>
				</div>
			);
		} else {
			return (
				<div className="profile-about">
					{icons[Math.floor(Math.random() * icons.length)]}

					<h1>Username: {user.username}</h1>
					{profileId !== currentUserId && currentUserId !== null ? (
						<FollowingBtn userId={profileId} />
					) : null}
					<h3>Email: {user.email}</h3>
					<h4>About: {user.about}</h4>
					<div className="profile-about-header">
						<p>
							has{" "}
							<span className="about-num">
								{this.props.user.followers.length}
							</span>{" "}
							followers
						</p>
						<p>
							has been following{" "}
							<span className="about-num">
								{this.props.user.followees.length}
							</span>{" "}
							authors
						</p>
						<p>
							has given{" "}
							<span className="about-num">{this.props.user.claps.length}</span>{" "}
							claps
						</p>
						<p>
							has written <span className="about-num">{totalWordCount}</span>{" "}
							words in total
						</p>
						<p>
							has received <span className="about-num">{totalClapCount}</span>{" "}
							claps
						</p>
					</div>
				</div>
			);
		}
	}

	render() {
		// console.log(this.props);
		// console.log();
		if (this.props.profileId === undefined) {
			return <WrongLink />;
		} else {
			return this.props.user ? this.profile() : null;
		}
	}
}
export default withRouter(UserShow);
