import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default ({ history }) => {
	console.log(history);
	// console.log(history.go(-1));
	return (
		<div id="wrong-link">
			<FontAwesomeIcon icon={faCloudRain} id="cloud-rain" />
			<br />
			<FontAwesomeIcon icon={faBan} id="ban" />
			<h1>404</h1>
			<h2>Something went wrong...</h2>
			<button onClick={() => history.goBack()}>Go Back</button>
		</div>
	);
};
