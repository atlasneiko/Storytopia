import React from "react";
import { clapIcon } from "../../../util/icon_util";

class ClapButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		if (this.props.typeForm !== "create") {
			this.props.fetchClap(this.props.clapId);
		}
	}

	handleClick() {
		if (this.props.typeForm === "create") {
			this.props.createClap(this.props.clap);
			window.location.reload();
		} else {
			if (this.props.clap.clap_count < 50) {
				const output = {
					...this.props.clap,
					clap_count: this.props.clap.clap_count + 1,
				};
				this.props.updateClap(output);
				console.log("adding claps");
			} else {
				console.log("no more claps");
			}
		}
	}
	render() {
		return this.props.clap && this.props.userId ? (
			<button onClick={() => this.handleClick()}>{clapIcon}</button>
		) : null;
	}
}

export default ClapButton;
