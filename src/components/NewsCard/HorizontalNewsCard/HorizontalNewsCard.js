import React, { Component } from "react";
import styles from "./HorizontalNewsCard.module.scss";
class HorizontalNewsCard extends Component {
	render() {
		return (
			<div className={styles.HorizontalCard}>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/238x134.png" alt="as" className="responsive-image" />
				</div>
				<div className={styles.CardHeadline}>
					<h2>
						<span>Kicker</span>
						{this.props.title}
					</h2>
					<p>{this.props.excerpt}</p>
				</div>
			</div>
		);
	}
}

export default HorizontalNewsCard;
