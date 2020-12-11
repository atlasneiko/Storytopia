import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_utils";

import Header from "./header/header";
import UserIndexContainer from "../user/user_index_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import WrongLink from "./404";

export default () => (
	<div className="container">
		<Header />
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignUpFormContainer} />
			<Route path="/" exact component={UserIndexContainer} />
			<Route path="/" component={WrongLink} />
		</Switch>
	</div>
);
