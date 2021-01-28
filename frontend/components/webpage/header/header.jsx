import React from "react";
import Nav from "./greeting/nav_container";

import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../../util/route_utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";

export default () => {
	return (
		<div id="entrance-header">
			<Link to="/" className="logo">
				<h1>
					{/* <span> */}
					<FontAwesomeIcon icon={faBroom} />
					{/* </span> */}
					Storytopia
				</h1>
			</Link>
			<div className="header-about">
				<div className="tooltip">
					<a href="https://github.com/atlasneiko" target="_blank">
						<img
							src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
							alt=""
							className="about-link"
						/>
						<p className="tooltip-text">GitHub</p>
					</a>
				</div>
				<div className="tooltip">
					<a
						href="https://www.linkedin.com/in/michael-chen-a41770115/"
						target="_blank"
					>
						<img
							src="data:image/png;base64,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"
							className="about-link"
						></img>
						<p className="tooltip-text">LinkedIn</p>
					</a>
				</div>
				<div className="tooltip">
					<a href="https://angel.co/u/michael-shin-chen" target="_blank">
						<img
							src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/angellist-512.png"
							className="about-link"
						></img>
						<p className="tooltip-text">Angelist</p>
					</a>
				</div>
			</div>
			<Nav />
		</div>
	);
};
