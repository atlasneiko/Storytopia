import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faCloudRain } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";
export default () => {
	let history = useHistory();

	return (
		<div id="wrong-link">
			<FontAwesomeIcon icon={faCloudRain} id="cloud-rain" />
			<br />
			<FontAwesomeIcon icon={faBan} id="ban" />
			<h1>404</h1>
			<h2>Something went wrong...</h2>
			<button onClick={() => history.push("/")}>Go Back</button>
		</div>
	);
};
