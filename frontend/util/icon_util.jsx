import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCat,
	faKiwiBird,
	faPen,
	faRainbow,
	faFeatherAlt,
	faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

export const colors = ["#131917", "#2d424a", "#5f6468", "#b4786b", "#612a11"];
export const icons = [
	<FontAwesomeIcon
		icon={faCat}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
	<FontAwesomeIcon
		icon={faKiwiBird}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
	<FontAwesomeIcon
		icon={faRainbow}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
	<FontAwesomeIcon
		icon={faFeatherAlt}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
	<FontAwesomeIcon
		icon={faSnowflake}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
	<FontAwesomeIcon
		icon={faPen}
		className="user-icon"
		style={{ color: colors[Math.floor(Math.random() * colors.length)] }}
	/>,
];
