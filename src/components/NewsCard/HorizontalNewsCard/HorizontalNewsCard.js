import React, { Component } from "react";
import styles from "./HorizontalNewsCard.module.scss";
import { NavLink } from "react-router-dom";

class HorizontalNewsCard extends Component {
	render() {
		return (
			<div className={styles.HorizontalCard}>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/238x134.png" alt="as" className="responsive-image" />
				</div>
				<div className={styles.CardHeadline}>
					<h4>
						<span className="kicker wiadomosci">{this.props.category.cat_name}</span>
						{this.props.title}
					</h4>
					<p className={styles.CardExcerpt}>{this.props.excerpt}</p>
				</div>
				<NavLink to={this.props.slug} className={styles.cardAnchor}>
					{this.props.title}
				</NavLink>
			</div>
		);
	}
}

export default HorizontalNewsCard;
