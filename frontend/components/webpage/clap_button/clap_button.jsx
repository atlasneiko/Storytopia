import React from "react";
import { clapIcon } from "../../../util/icon_util";

class ClapButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.fetchClap(this.props.clapId);
	}

	handleClick() {
		if (this.props.typeForm === "create") {
			this.props.createClap(this.props.clap);
		} else {
			console.log(this.props.clap.clap_count);
			if (this.props.clap.clap_count < 50) {
				const output = {
					...this.props.clap,
					clap_count: this.props.clap.clap_count + 1,
				};
				this.props.updateClap(output);
			} else {
				console.log("no more claps");
			}
		}
	}
	render() {
		return this.props.clap ? (
			<button onClick={() => this.handleClick()}>{clapIcon}</button>
		) : null;
	}
}

export default ClapButton;
