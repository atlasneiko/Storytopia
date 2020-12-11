import React from "react";

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

		return <UserShowContainer user={user} />;
	}
}

export default UserPage;
