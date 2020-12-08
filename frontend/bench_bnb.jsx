import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login } from "./actions/session_actions";
document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root");
	let store;
	if (window.currentUser) {
		const preloadedState = {
			entities: {
				users: {
					[window.currentUser.id]: window.currentUser,
				},
			},
			session: {
				currentUser: {
					id: window.currentUser.id,
				},
			},
		};
		store = configureStore(preloadedState);
	} else {
		store = configureStore();
	}
	//test start
	window.store = store;
	window.getState = store.getState;
	window.dispatch = store.dispatch;
	window.login = login;
	//test end

	ReactDOM.render(<Root store={store} />, root);
});
