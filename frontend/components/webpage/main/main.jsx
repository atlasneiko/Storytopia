import React from "react";
import UserIndexContainer from "../../user/user_index_container";
import TheFives from "./the_fives/the_fives";
import TheSixes from "./the_hot_sixes/the_hot_sixes";
import TheFeed from "./the_feed/the_feed";
import Footer from "../footer/footer";
import Splash from "./splash";
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getAllUsers();
		this.props.fetchAllStories();
	}

	render() {
		const { users, stories, loggedIn } = this.props;
		if (Object.keys(stories).length >= 115 && Object.keys(users).length >= 40) {
			// if (stories !== {}) {
			return (
				<div id="main">
					{loggedIn ? (
						<div className="feed-header">
							<TheFives users={users} stories={stories} />
							<UserIndexContainer users={users} />
						</div>
					) : (
						<Splash />
					)}
					<TheSixes users={users} stories={stories} />
					<div id="feed-div">
						<TheFeed users={users} stories={stories} />
						<Footer />
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}

export default Main;
