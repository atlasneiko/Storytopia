import React from "react";
import UserIndexItem from "./user_index_item";

class UserIndx extends React.Component {
	// componentDidMount() {
	// 	this.props.getAllUsers();
	// }
	render() {
		const { users } = this.props;
		// console.log(users[0]);
		return (
			<div id="users-index">
				<h3 id="users-index-title">LATEST FROM FOLLOWING</h3>
				<div id="user-index-list">
					{users.map((user, i) => (
						<div id={`user-item-${i}`} key={`user-index-${user.id}`}>
							<UserIndexItem user={user} />
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default UserIndx;
