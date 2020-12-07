import React from "react";
import Greeting from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignUpFormContainer from "./session_form/signup_form_container";

export default () => (
	<div>
		<h1>BenchBnB</h1>
		<Greeting />
		<LoginFormContainer />
		<SignUpFormContainer />
		{/* <Switch></Switch> */}
		{/* <Route exact path="/login" component={LoginFormContainer} />
		<Route exact path="/signup" component={SignUpFormContainer} /> */}
	</div>
);
