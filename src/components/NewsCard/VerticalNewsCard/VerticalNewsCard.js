import React, { Component } from "react";
import styles from "./VerticalNewsCard.module.scss";
import { NavLink } from "react-router-dom";

class VerticalNewsCard extends Component {
	render() {
		return (
			<div className={styles.VerticalCard}>
				<div className={styles.CardImage}>
					<img src="http://placehold.jp/125x70.png" alt="as" className="responsive-image" />
				</div>
				<div className={styles.CardHeadline}>
					<h2>
						<span className="kicker wiadomosci">{this.props.category.cat_name}</span>
						{this.props.title}
					</h2>
				</div>
				<NavLink to={this.props.slug} className={styles.cardAnchor}>
					{this.props.title}
				</NavLink>
			</div>
		);
	}
}

export default VerticalNewsCard;
