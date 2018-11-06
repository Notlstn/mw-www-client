import React, { Component } from "react";
import layoutStyles from "../../../Layout/Layout.module.scss";
import { NavLink } from "react-router-dom";

class CategoryLeft extends Component {
	render() {
		return (
			<div className={layoutStyles.LeftColumn}>
				<NavLink to={this.props.url}>{this.props.title}</NavLink>
				<div />
			</div>
		);
	}
}

export default CategoryLeft;
