import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_utils";

import Header from "./header/header";
// import UserIndexContainer from "../user/user_index_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import WrongLink from "./404";
import Main from "./main/main_container";

export default () => (
	<div id="entrance">
		<Header />
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignUpFormContainer} />
			<Route path="/" exact component={Main} />
			<Route path="/" component={WrongLink} />
		</Switch>
	</div>
);

// const greeting = () => {
// 	let date = new Date();
// 	let hour = date.getHours();
// 	if (hour >= 5 && hour <= 12) {
// 		return "Good morning. ";
// 	} else if (hour > 12 && hour < 18) {
// 		return "Good afternoon. ";
// 	} else {
// 		return "Good evening. ";
// 	}
// };
