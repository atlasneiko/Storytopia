import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCat,
	faKiwiBird,
	faPen,
	faRainbow,
	faFeatherAlt,
	faSnowflake,
	faBookmark,
	faSearch,
	faBell,
	faEllipsisH,
	far,
	faTimes,
	faGlobeAmericas,
	faRandom,
	faSignLanguage,
	faComment,
} from "@fortawesome/free-solid-svg-icons";
export const searchIcon = (
	<FontAwesomeIcon icon={faSearch} className="search-icon" />
);
export const bookmarkIcon = (
	<FontAwesomeIcon icon={faBookmark} className="bookmark-icon" />
);
export const bellIcon = <FontAwesomeIcon icon={faBell} className="bell-icon" />;
export const dotsIcon = (
	<FontAwesomeIcon icon={faEllipsisH} className="dots-icon" />
);

export const closeIcon = (
	<FontAwesomeIcon icon={faTimes} className="close-icon" />
);
export const globeIcon = (
	<FontAwesomeIcon icon={faGlobeAmericas} className="globe-icon" />
);
export const shuffleIcon = (
	<FontAwesomeIcon icon={faRandom} className="shuffle-icon" />
);

export const clapIcon = (
	<FontAwesomeIcon icon={faSignLanguage} className="clap-icon" />
);

export const commentIcon = (
	<FontAwesomeIcon icon={faComment} className="comment-icon" />
);

//random icons start
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
//random icons end
