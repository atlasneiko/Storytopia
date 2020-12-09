import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndx extends React.Component {
	componentDidMount() {
		this.props.getAllUsers();
	}
	render() {
		const { users } = this.props;
		// console.log(users[0]);
		return (
			<ul id="users-index">
				{users.map((user) => (
					<UserIndexItem user={user} key={`user-index-${user.id}`} />
				))}
			</ul>
		);
	}
}

export default UserIndx;
