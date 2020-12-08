import React from "react";
import Greeting from "../greeting/greeting_container";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_utils";
export default () => (
	<div id="header">
		<Link to="/" className="logo">
			<h1>Storytopia</h1>
		</Link>

		<Greeting />
	</div>
);
