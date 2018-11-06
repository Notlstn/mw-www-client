import React, { Component } from "react";

import SingleCategoryLink from "./SingleCategoryLink/SingleCategoryLink";

class CategoryList extends Component {
	render() {
		let menu = this.props.links.map(item => {
			if (item.post_parent === 0) return <SingleCategoryLink key={item.id} {...item} />;
			return null;
		});
		return <div>{menu}</div>;
	}
}

export default CategoryList;
