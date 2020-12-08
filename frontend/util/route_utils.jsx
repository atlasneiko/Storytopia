import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";

const Auth = ({ component: Component, path, loggedin, exact }) => (
	<Route
		path={path}
		exact={exact}
		render={(props) =>
			!loggedin ? <Component {...props} /> : <Redirect to="/" />
		}
	/>
);

const Protected = ({ component: Component, path, loggedin, exact }) => (
	<Route
		path={path}
		exact={exact}
		render={(props) =>
			loggedin ? <Component {...props} /> : <Redirect to="/login" />
		}
	/>
);
const mSTP = (state) => ({ loggedin: Boolean(state.session.currentUser.id) });
export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
