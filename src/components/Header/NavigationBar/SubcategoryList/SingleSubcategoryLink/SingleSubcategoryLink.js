import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SingleSubcategoryLink.module.css";
class SingleSubcategoryLink extends Component {
	render() {
		return (
			<li className={styles.subcategoryLinkParent}>
				<NavLink
					to={this.props.url}
					className={[...this.props.classes].join(" ")}
					activeClassName={styles.is_active}
				>
					{this.props.title}
				</NavLink>
			</li>
		);
	}
}

export default SingleSubcategoryLink;
