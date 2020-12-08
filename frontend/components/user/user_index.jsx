import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndx extends React.Component {
	componentDidMount() {
		this.props.getAllUsers();
	}
	render() {
		const { users } = this.props;
		return (
			<ul id="users-index">
				{users.map((user) => (
					<UserIndexItem user={user} key={`user-${user.id}`} />
				))}
			</ul>
		);
	}
}

export default UserIndx;
