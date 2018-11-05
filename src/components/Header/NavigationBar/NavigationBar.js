import React, { Component } from "react";
import styles from "./NavigationBar.module.css";

import CategoryList from "./CategoryList/CategoryList";
import SubcategoryList from "./SubcategoryList/SubcategoryList";
import { getAppMenu } from "../../../api/wpApi";

class NavigationBar extends Component {
	state = {
		categories: [],
		selectedCategory: 0
	};
	componentDidMount() {
		//TODO: Warunek jeżeli pusta tablica
		(async () => {
			const response = await getAppMenu();
			const firstLink = response.items[0].id;
			this.setState({
				categories: response.items,
				selectedCategory: firstLink
			});
		})();
	}

	_onCategoryLink = selectedCategoryID => {
		this.setState({
			selectedCategory: selectedCategoryID
		});
	};

	render() {
		return (
			<div className={styles.NavigationBar}>
				<div className={styles.TopBar}>
					<div className={styles.TopBarNavs}>
						<div>I poziom</div>
						<CategoryList links={this.state.categories} onLinkClick={this._onCategoryLink} />
					</div>
					<div className={styles.TopBarLogotype}>Logotyp</div>
				</div>
				<SubcategoryList links={this.state.categories} selectedList={this.state.selectedCategory} />
			</div>
		);
	}
}

export default NavigationBar;
