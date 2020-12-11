import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_utils";

import UserProfileContainer from "./user/user_profile_container";
import WrongLink from "./webpage/404";
import Entrance from "./webpage/entrance";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignUpFormContainer from "./session_form/signup_form_container";
// import Header from "./webpage/header/header";
// import UserIndexContainer from "./user/user_index_container";

export default () => (
	<div className="container">
		{/* <Header /> */}
		{/* <UserIndexContainer /> */}
		<Switch>
			<Route exact path="/users/:userId" component={UserProfileContainer} />
			<Route path="/" component={Entrance} />
			{/* <Route path="/users/" component={WrongLink} /> */}
			{/* need to build a main component for all the contents */}
			{/* <Route path="/" exact component={UserIndexContainer} /> */}
		</Switch>
	</div>
);
