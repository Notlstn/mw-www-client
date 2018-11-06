import React, { Component } from "react";
import styles from "./NavigationBar.module.css";

import CategoryList from "./CategoryList/CategoryList";
import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { getAppMenu } from "../../../api/wpApi";

import { withRouter } from "react-router-dom";

class NavigationBar extends Component {
	state = {
		categories: [],
		selectedCategory: 0
	};

	componentDidMount() {
		// Pobieranie zawartości menu głównego strony
		if (this.state.categories.length === 0) {
			(async () => {
				const response = await getAppMenu();
				const firstLink = response.items[0].id;
				this.setState({
					categories: response.items,
					selectedCategory: firstLink
				});
			})();
		}

		//Obsługa zmiany zawartości podmenu
		this.props.history.listen(location => {
			let category = this.state.categories.filter(item => {
				return item.url === location.pathname;
			});
			if (category.length) {
				category = category[0];
				if (category.post_parent === 0) {
					this.setState({
						selectedCategory: category.id
					});
				}
			}
		});
	}

	render() {
		return (
			<div className={styles.NavigationBar}>
				<div className={styles.TopBar}>
					<div className={styles.TopBarNavs}>
						<div>I poziom</div>
						<CategoryList links={this.state.categories} />
					</div>
					<div className={styles.TopBarLogotype}>Logotyp</div>
				</div>
				<SubcategoryList links={this.state.categories} selectedList={this.state.selectedCategory} />
			</div>
		);
	}
}

export default withRouter(NavigationBar);
