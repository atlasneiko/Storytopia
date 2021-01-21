import React, { useEffect, useState } from "react";
import { bookmarkIcon, commentIcon, clapIcon } from "../../../util/icon_util";
class SideProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			totalClapCount: 0,
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
			console.log("create!");
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
		console.log("update!!");
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

				{loggedIn ? (
					this.state.currClap.clapCount >= 50 ? (
						<h3 style={{ color: "red" }}>{this.state.totalClapCount}</h3>
					) : (
						<h3>{this.state.totalClapCount}</h3>
					)
				) : (
					<h3>{this.state.totalClapCount}</h3>
				)}
				<div>
					{loggedIn ? (
						<button onClick={() => this.handleUpdateClap()}>{clapIcon}</button>
					) : (
						<p>{clapIcon}</p>
					)}
					<button onClick={() => toggleCommentPage()}>{commentIcon}</button>
				</div>
			</aside>
		);
	}
}
export default SideProfile;
