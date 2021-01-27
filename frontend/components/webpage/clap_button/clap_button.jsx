import React from "react";
import { clapIcon } from "../../../util/icon_util";

class ClapButton extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { clapCount: 0 };
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
			}
		}
	}
	render() {
		if (this.props.clap && this.props.userId) {
			if (this.props.clap.clap_count < 50) {
				return (
					<div className="clap-btn">
						<button onClick={() => this.handleClick()}>{clapIcon}</button>
					</div>
				);
			} else {
				return <p>You have clapped 50 times for this story. Thank you!</p>;
			}
		} else {
			return null;
		}
	}
}

export default ClapButton;
