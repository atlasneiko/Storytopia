import React from "react";
import UserIndexContainer from "../../user/user_index_container";
import TheFives from "./the_fives";

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getAllUsers();
		this.props.fetchAllStories();
	}

	render() {
		const { users, stories } = this.props;
		return (
			<div>
				<UserIndexContainer users={users} />
				<TheFives users={users} stories={stories} />
			</div>
		);
	}
}

export default Main;
