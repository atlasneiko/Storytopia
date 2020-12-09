import React from "react";

export default (props) => {
	console.log(props);
	const { user, login, receiveDemo } = props;
	return (
		<div id="demo-button" onClick={() => login(user)}>
			Demo Login
		</div>
	);
};
