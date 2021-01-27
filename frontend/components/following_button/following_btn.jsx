import React from "react";

class FollowingBtn extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { currUser: this.props.currUser, user: this.props.user };
	}

	handleClick() {
		console.log(this.state.currUser.id, this.state.user.followers);
		console.log(this.state.user.id, this.state.currUser.followees);
		console.log(
			this.props.currUser.followees.includes(this.state.user.id) &&
				this.props.user.followers.includes(this.state.currUser.id)
		);
		if (
			this.props.currUser.followees.includes(this.state.user.id) &&
			this.props.user.followers.includes(this.state.currUser.id)
		) {
			this.props
				.deleteFollowing({
					follower_id: this.state.currUser.id,
					followee_id: this.state.user.id,
				})
				.then((res) => {
					this.props.getUser(this.state.currUser.id).then(() => {
						this.setState({ currUser: this.props.currUser });
						this.props.getUser(this.state.user.id).then(() => {
							this.setState({ user: this.props.user });
							console.log(this.state);
						});
					});
				});
		} else {
			this.props
				.createFollowing({
					follower_id: this.state.currUser.id,
					followee_id: this.state.user.id,
				})
				.then((res) => {
					this.props.getUser(this.state.currUser.id).then(() => {
						this.setState({ currUser: this.props.currUser });
						this.props.getUser(this.state.user.id).then(() => {
							this.setState({ user: this.props.user });
							console.log(this.state);
						});
					});
				});
		}
	}

	render() {
		console.log("following", this.props);
		return this.state.currUser.followees.includes(this.props.user.id) ||
			this.state.user.followers.includes(this.props.currUser.id) ? (
			<button className="following-btn" onClick={this.handleClick}>
				Unfollow me
			</button>
		) : (
			<button className="following-btn" onClick={this.handleClick}>
				Follow me
			</button>
		);
	}
}

export default FollowingBtn;
