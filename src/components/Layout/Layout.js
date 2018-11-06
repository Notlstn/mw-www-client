import React, { Component, Fragment } from "react";
import styles from "./Layout.module.scss";

class Layout extends Component {
	render() {
		return (
			<div className={styles.LayoutWrapper_external}>
				<div className={styles.LayoutWrapper}>
					<Fragment>{this.props.left ? this.props.left : null}</Fragment>
					<Fragment>{this.props.middle ? this.props.middle : null}</Fragment>
					<Fragment>{this.props.right ? this.props.right : null}</Fragment>
				</div>
			</div>
		);
	}
}

export default Layout;
