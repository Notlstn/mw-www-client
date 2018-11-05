import React, { Component } from "react";

import styles from "./SubcategoryList.module.css";

import SingleSubcategoryLink from "./SingleSubcategoryLink/SingleSubcategoryLink";

class SubcategoryList extends Component {
	constructor(props) {
		super(props);
		this.state = { ...props, subcategories: [] };
	}

	componentWillReceiveProps(nextProps) {
		let subcategories = [];

		nextProps.links.forEach(element => {
			if (element.post_parent === 0) {
				subcategories[element.id] = [];
				return true;
			}
			subcategories[element.post_parent].push(element);
		});
		this.setState({ ...nextProps, subcategories: subcategories });
	}

	render() {
		let subcategories = null;

		if (this.state.selectedList in this.state.subcategories) {
			subcategories = this.state.subcategories[this.state.selectedList].map(item => {
				return <SingleSubcategoryLink key={item.id} {...item} />;
			});
		}

		return <ul className={styles.ListParent}>{subcategories}</ul>;
	}
}

export default SubcategoryList;
