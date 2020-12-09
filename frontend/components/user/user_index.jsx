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
			<div id="users-index">
				<h3 id="users-index-title">LATEST FROM FOLLOWING</h3>
					<ul >
					{users.map((user) => (
						<UserIndexItem user={user} key={`user-index-${user.id}`} />
					))}
				</ul>
			</div>
		);
	}
}

export default UserIndx;
