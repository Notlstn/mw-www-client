import React, { Component, Fragment } from "react";

import Layout from "../Layout/Layout";
import CategoryLeft from "./CategorySection/CategoryLeft/CategoryLeft";
import CategoryMiddle from "./CategorySection/CategoryMiddle/CategoryMiddle";
import { getCategoryBySlug } from "../../api/wpApi";
import { withRouter } from "react-router-dom";

class FrontPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			realCategories: [],
			posts: []
		};
	}

	componentDidMount() {
		if (this.state.realCategories.length === 0) {
			(async () => {
				const response = await getCategoryBySlug("wiadomosci,kultura,sport,nasze-myki,nasz-fyrtel");

				this.setState({
					realCategories: response
				});
			})();
		}
	}

	_handlePreviewFetch = () => {};

	render() {
		let content = null;
		if (this.state.realCategories.length) {
			content = this.state.realCategories.map(item => {
				return (
					<Layout
						key={item.id}
						left={<CategoryLeft category={item} />}
						middle={<CategoryMiddle category={item} />}
					/>
				);
			});
		}

		return <Fragment>{content}</Fragment>;
	}
}

export default withRouter(FrontPage);
