import React, { useEffect, useState } from "react";
import { bookmarkIcon, commentIcon, clapIcon } from "../../../util/icon_util";
import FollowingBtn from "../../following_button/following_btn_container";
class SideProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalClapCount: 0,
			currClap: {},
		};
		this.handleUpdateClap = this.handleUpdateClap.bind(this);
	}
	componentDidMount() {
		const {
			user,
			claps,
			currUser,
			story,
			fetchClap,
			createClap,
			loggedIn,
		} = this.props;
		story.claps.forEach((clapId, i) => {
			fetchClap(clapId)
				.then((res) => {
					if (
						res.clap.userId === currUser.id &&
						res.clap.clapableId === story.id
					) {
						this.setState({ ...this.state, currClap: res.clap });
					}
					this.setState({
						...this.state,
						totalClapCount: this.state.totalClapCount + res.clap.clapCount,
					});
				})
				.then(() => {
					// console.log(i);
					if (
						i === story.claps.length - 1 &&
						!this.state.hasOwnProperty("currClap") &&
						loggedIn
					) {
						const newClap = {
							user_id: currUser.id,
							clapable_id: story.id,
							clap_count: 0,
							clapable_type: "Story",
						};
						createClap(newClap).then((res) => {
							this.setState({ ...this.state, currClap: res.clap });
							// console.log("hi", this.state);
						});
					}
				});
		});
		if (story.claps.length === 0 && loggedIn) {
			// console.log("create!");
			const newClap = {
				user_id: currUser.id,
				clapable_id: story.id,
				clap_count: 0,
				clapable_type: "Story",
			};
			createClap(newClap).then((res) => {
				this.setState({ ...this.state, currClap: res.clap });
			});
		}
	}
	handleUpdateClap() {
		// console.log("update!!");
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
	render() {
		const {
			user,
			claps,
			currUser,
			story,
			toggleCommentPage,
			loggedIn,
		} = this.props;
		// console.log(this.props);
		// console.log(this.state);
		return (
			<aside className="story-sidebar">
				{/* {console.log("clapCount", this.state.currClap.clapCount)} */}
				<h3>{user.username}</h3>
				<p>{user.about}</p>

				<div>
					{loggedIn && this.state.currClap.hasOwnProperty("clapCount") ? (
						this.state.currClap.clapCount >= 50 ? (
							<div>
								<FollowingBtn userId={user.id} />
								<h3 className="total-clap-count">
									claps received: <br />
									<span style={{ color: "red" }}>
										{this.state.totalClapCount}
									</span>
								</h3>
							</div>
						) : (
							<h3 className="total-clap-count">
								claps received: <br />
								{this.state.totalClapCount}
							</h3>
						)
					) : (
						<h3 className="total-clap-count">
							claps received: {this.state.totalClapCount}
						</h3>
					)}
					{loggedIn ? (
						<div>
							{this.state.currClap.clapCount < 50 ? (
								<button
									onClick={() => this.handleUpdateClap()}
									className="clap-btn"
								>
									<div className="clap-count">
										{this.state.currClap.clapCount}
									</div>
									{clapIcon}
								</button>
							) : (
								<p>max clap reached</p>
							)}
						</div>
					) : null}
					{loggedIn || story.comments.length > 0 ? (
						<button onClick={() => toggleCommentPage()} className="comment-btn">
							{commentIcon}
							<p className="comment-text">comments!</p>
						</button>
					) : null}
				</div>
			</aside>
		);
	}
}
export default SideProfile;
