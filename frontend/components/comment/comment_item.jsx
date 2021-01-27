import React, { useEffect, useState } from "react";
import { clapIcon, commentIcon, icons } from "../../util/icon_util";
import CommentEditContainer from "./comment_edit_container";
class CommentItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { editDisplay: false };
		this.toggleDisplay = this.toggleDisplay.bind(this);
		this.state = { totalClapCount: 0 };
	}
	componentDidMount() {
		// console.log("didmount");
		const {
			comment,
			commentUserId,
			currentUserId,
			getUser,
			updateComment,
			user,
			fetchClap,
			createClap,
			updateClap,
		} = this.props;
		comment.claps.forEach((clapId, i) => {
			fetchClap(clapId)
				.then((res) => {
					if (
						res.clap.userId === currentUserId &&
						res.clap.clapableId === comment.id
					) {
						this.setState({ ...this.state, currClap: res.clap });
					}
					this.setState({
						...this.state,
						totalClapCount: this.state.totalClapCount + res.clap.clapCount,
					});
				})
				.then(() => {
					if (
						i === comment.claps.length - 1 &&
						!this.state.hasOwnProperty("currClap")
					) {
						// console.log("create!");
						const newClap = {
							user_id: currentUserId,
							clapable_id: comment.id,
							clap_count: 0,
							clapable_type: "Comment",
						};
						createClap(newClap).then((res) => {
							this.setState({ ...this.state, currClap: res.clap });
						});
					}
				});
		});
		if (comment.claps.length === 0) {
			console.log("create!");
			const newClap = {
				user_id: currentUserId,
				clapable_id: comment.id,
				clap_count: 0,
				clapable_type: "Comment",
			};
			createClap(newClap).then((res) => {
				this.setState({ ...this.state, currClap: res.clap });
			});
		}
	}
	handleUpdateClap() {
		console.log("update");
		const newClap = {
			...this.state.currClap,
			clapCount: this.state.currClap.clapCount + 1,
		};
		if (this.state.currClap.clapCount < 50) {
			this.setState({
				...this.state,
				totalClapCount: this.state.totalClapCount + 1,
				currClap: newClap,
			});
			this.props.updateClap({
				...this.state.currClap,
				clap_count: this.state.currClap.clapCount + 1,
			});
		}
	}
	toggleDisplay() {
		this.setState({ editDisplay: !this.state.editDisplay });
	}
	render() {
		console.log(this.props);
		const { comment, user, getUser, currentUserId, commentUserId } = this.props;
		const currIcon = icons[Math.floor(Math.random() * icons.length)];
		let date = comment.updatedAt.slice(0, 10).split("-");
		[date[0], date[1], date[2]] = [date[1], date[2], date[0]];
		date = date.join("/");
		if (user && this.state.hasOwnProperty("currClap")) {
			if (!this.state.editDisplay) {
				return (
					<div className="comment-item">
						<header>
							{/* {currIcon} */}
							<span className="inline-space" />
							{user.username}
							<br />
							<span className="inline-space" />
							{date}
						</header>
						<div>
							<section>{comment.body}</section>
							<aside>
								{this.state.currClap.clapCount >= 50 ? (
									<h3 style={{ color: "red" }} className="comment-clap-count">
										{this.state.totalClapCount}
									</h3>
								) : (
									<h3 className="comment-clap-count">
										{this.state.totalClapCount}
									</h3>
								)}
								<button
									onClick={() => this.handleUpdateClap()}
									className="clap-btn"
								>
									<div className="clap-count">
										{this.state.currClap.clapCount}
									</div>
									{clapIcon}
								</button>
								<br />
							</aside>
						</div>
						{currentUserId === commentUserId ? (
							<button onClick={() => this.toggleDisplay()}>
								Edit this post
							</button>
						) : null}
					</div>
				);
			} else {
				return (
					<CommentEditContainer
						comment={comment}
						toggleDisplay={this.toggleDisplay}
					/>
				);
			}
		} else {
			return null;
		}
	}
}
export default CommentItem;
