import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import Entrance from "./webpage/entrance";
import App from "./app";
export default ({ store }) => (
	<Provider store={store}>
		<HashRouter>
			<Entrance />
		</HashRouter>
	</Provider>
);
