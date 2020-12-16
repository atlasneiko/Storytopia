import React from "react";
import { clapIcon } from "../../../util/icon_util";

class ClapButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		if (this.props.typeForm === "create") {
			this.props.createClap(this.props.clap);
		} else {
			this.props.updateClap(this.props.clap);
		}
	}
	render() {
		return this.props.clap ? (
			<button onClick={() => this.handleClick()}>{clapIcon}</button>
		) : null;
	}
}

export default ClapButton;
