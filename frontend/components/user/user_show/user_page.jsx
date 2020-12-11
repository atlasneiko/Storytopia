import React from "react";
import UserHeaderContainer from "./header/user_header_container";
import UserShowContainer from ".//user_profile_container";

class UserPage extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getUser(this.props.pageUserId);
	}
	render() {
		const user = this.props.users[this.props.pageUserId];
		return (
			<div>
				<UserHeaderContainer user={user} />
				<UserShowContainer user={user} />
			</div>
		);
	}
}

export default UserPage;
