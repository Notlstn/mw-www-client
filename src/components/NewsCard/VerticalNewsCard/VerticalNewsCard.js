import React, { Component } from "react";
import styles from "./VerticalNewsCard.module.scss";
class VerticalNewsCard extends Component {
	render() {
		return (
			<div className={styles.VerticalCard}>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/160x90.png" alt="as" className="responsive-image" />
				</div>
				<div className={styles.CardHeadline}>
					<h3>
						<span>Kicker</span>
						{this.props.title}
					</h3>
				</div>
			</div>
		);
	}
}

export default VerticalNewsCard;
