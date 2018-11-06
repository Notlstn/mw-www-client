import React, { Component } from "react";
import styles from "./BigNewsCard.module.scss";
class BigNewsCard extends Component {
	render() {
		return (
			<div className={styles.bigCard}>
				<div className={styles.CardHeadline}>
					<h1>
						<span>Kicker</span>
						{this.props.title}
					</h1>
					<p>{this.props.excerpt}</p>
				</div>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/495x278.png" alt="as" className="responsive-image" />
				</div>
			</div>
		);
	}
}

export default BigNewsCard;
