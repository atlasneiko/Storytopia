import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../util/route_utils";

import Header from "./header/header";
import UserHeaderContainer from "../user/user_show/header/user_header_container";
import UserProfileAbout from "../user/user_show/about/user_profile_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignUpFormContainer from "../session_form/signup_form_container";
import WrongLink from "./404";
import Main from "./main/main_container";
import UserPageContainer from "../user/user_show/user_page_container";

export default () => (
	<div id="entrance">
		<Switch>
			<Route path="/users/:userId" component={UserHeaderContainer} />
			<Route path="/" component={Header} />
		</Switch>
		{/* <Header /> */}
		<Switch>
			<AuthRoute exact path="/login" component={LoginFormContainer} />
			<AuthRoute exact path="/signup" component={SignUpFormContainer} />
			<Route exact path="/users/:userId" component={UserPageContainer} />
			<Route exact path="/users/:userId/about" component={UserProfileAbout} />
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
