import React, { Component } from "react";
import styles from "./BigNewsCard.module.scss";
import { NavLink } from "react-router-dom";

class BigNewsCard extends Component {
	render() {
		console.log(this.props);
		return (
			<div className={styles.bigCard}>
				<div className={styles.CardHeadline}>
					<h1>
						<span className="kicker wiadomosci">{this.props.category.cat_name}</span>
						{this.props.title}
					</h1>
					<p className={styles.CardExcerpt}>{this.props.excerpt}</p>
				</div>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/562x316.png" alt="as" className="responsive-image" />
				</div>
				<NavLink to={this.props.slug} className={styles.cardAnchor}>
					{this.props.title}
				</NavLink>
			</div>
		);
	}
}

export default BigNewsCard;
