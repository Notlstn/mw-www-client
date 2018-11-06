import React, { Component } from "react";
import layoutStyles from "../../../Layout/Layout.module.scss";
import styles from "./CategoryMiddle.module.scss";

import BigNewsCard from "../../../NewsCard/BigNewsCard/BigNewsCard";
import HorizontalNewsCard from "../../../NewsCard/HorizontalNewsCard/HorizontalNewsCard";
import VerticalNewsCard from "../../../NewsCard/VerticalNewsCard/VerticalNewsCard";

import { getFrontNewsCategoryId } from "../../../../api/wpApi";
class CategoryMiddle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};
	}

	componentDidMount() {
		if (this.state.posts.length === 0) {
			(async () => {
				const response = await getFrontNewsCategoryId(this.props.category.id);

				this.setState({
					posts: response
				});
			})();
		}
	}
	render() {
		let bigCardPosts = [];
		let horizontalCardPosts = [];
		let verticalCardPosts = [];

		let bigCardComponents = null;
		let horizontalCardComponents = null;
		let verticalCardComponents = null;

		if (this.state.posts.length) {
			const postPool = this.state.posts;

			bigCardPosts = [...bigCardPosts, postPool.shift()];
			horizontalCardPosts = [...horizontalCardPosts, postPool.shift()];
			verticalCardPosts = [
				...verticalCardPosts,
				postPool.shift(),
				postPool.shift(),
				postPool.shift(),
				postPool.shift()
			];
			horizontalCardPosts = [...horizontalCardPosts, postPool.shift(), postPool.shift()];

			bigCardComponents = bigCardPosts.map(item => {
				return <BigNewsCard key={item.id} {...item} />;
			});

			horizontalCardComponents = horizontalCardPosts.map(item => {
				return <HorizontalNewsCard key={item.id} {...item} />;
			});

			verticalCardComponents = verticalCardPosts.map(item => {
				return <VerticalNewsCard key={item.id} {...item} />;
			});
		}

		return (
			<div className={layoutStyles.MiddleColumn}>
				<div className={styles.newsWrapper}>
					<div className={[styles.columnWrapper, styles.columnWrapper__pad].join(" ")}>
						<div className={styles.columnLeft}>{bigCardComponents}</div>
						<div className={styles.columnRight}>
							{horizontalCardComponents !== null ? horizontalCardComponents.shift() : null}
						</div>
					</div>
					<div className={[styles.columnWrapper, styles.columnWrapper__pad].join(" ")}>
						<div className={styles.columnLeft}>
							<div className={styles.columnWrapper}>
								<div className={[styles.columnLeft, styles.itemSpace].join(" ")}>
									{verticalCardComponents}
								</div>
								<div className={styles.columnRight}>
									{horizontalCardComponents !== null ? horizontalCardComponents.shift() : null}
								</div>
							</div>
						</div>
						<div className={styles.columnRight}>
							{horizontalCardComponents !== null ? horizontalCardComponents.shift() : null}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CategoryMiddle;
