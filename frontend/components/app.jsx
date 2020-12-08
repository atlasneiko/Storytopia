import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

import Header from "./webpage/header";

export default () => (
	<div>
		<Header />
		<Switch>
			<AuthRoute
				exact
				path="/login"
				component={LoginFormContainer}
				id="login-form"
			/>
			<AuthRoute
				exact
				path="/signup"
				component={SignUpFormContainer}
				id="signup-form"
			/>
		</Switch>
	</div>
);
