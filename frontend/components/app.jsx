import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";
import UserProfileContainer from "./user/user_profile_container";
import Header from "./webpage/header";
import UserIndexContainer from "./user/user_index_container";
export default () => (
	<div>
		<Header />
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignUpFormContainer} />
			<Route exact path="/users/:userId" component={UserProfileContainer} />
			<Route path="/" component={UserIndexContainer} />
		</Switch>
	</div>
);
