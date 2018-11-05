import React, { Component } from "react";
import styles from "./Header.module.css";

import NavigationBar from "./NavigationBar/NavigationBar";

class Header extends Component {
	render() {
		return (
			<div className={styles.Header}>
				<div className={styles.HeaderExternal_isWhite}>
					<div className={styles.HeaderInner}>
						<div>Reklama</div>
					</div>
				</div>
				<div className={styles.HeaderExternal_isGray}>
					<div className={styles.HeaderInner}>
						<NavigationBar />
					</div>
				</div>
			</div>
		);
	}
}

export default Header;
