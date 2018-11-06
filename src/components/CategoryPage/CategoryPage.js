import React, { Component } from "react";
import { withRouter } from "react-router-dom";
class CategoryPage extends Component {
	render() {
		console.log(this.props);
		return <div>Category</div>;
	}
}

export default withRouter(CategoryPage);
