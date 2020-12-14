import React from "react";
import Greeting from "./greeting/greeting_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../../util/route_utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroom } from "@fortawesome/free-solid-svg-icons";

export default () => (
	<div id="entrance-header">
		<Link to="/" className="logo">
			<h1>
				<span>
					<FontAwesomeIcon icon={faBroom} />
				</span>
				Storytopia
			</h1>
		</Link>

		<Greeting />
	</div>
);
