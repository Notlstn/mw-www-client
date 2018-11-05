import React, { Component } from "react";
import styles from "./SingleCategoryLink.module.css";
import { NavLink } from "react-router-dom";

class SingleCategoryLink extends Component {
	render() {
		return (
			<div className={styles.SingleLink}>
				<NavLink
					to={this.props.url}
					onClick={e => this.props.clickAction(this.props.id)}
					className={[...this.props.classes].join(" ")}
					activeClassName={styles.is_active}
				>
					{this.props.title}
				</NavLink>
			</div>
		);
	}
}

export default SingleCategoryLink;
