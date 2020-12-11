import React from "react";

class UserHeader extends React.Component {
	constructor(props) {
		super(props);
		// this.state = this.props.user;
	}
	componentDidMount() {
		this.props.getUser(1);
	}
	render() {
		return <p>h1</p>;
	}
}

export default UserHeader;
