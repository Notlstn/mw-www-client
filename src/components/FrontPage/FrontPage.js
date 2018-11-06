import React, { Component, Fragment } from "react";

import Layout from "../Layout/Layout";
import CategoryLeft from "./CategorySection/CategoryLeft/CategoryLeft";
import CategoryMiddle from "./CategorySection/CategoryMiddle/CategoryMiddle";
import { getCategoryBySlug } from "../../api/wpApi";

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

	render() {
		console.log(this.state.realCategories);
		return (
			<Fragment>
				<Layout left={<CategoryLeft url="/wiadomosci/" title="Wiadomości" />} middle={<CategoryMiddle />} />
				<Layout left={<CategoryLeft url="/kultura/" title="Kultura" />} middle={<CategoryMiddle />} />
				<Layout left={<CategoryLeft url="/sport/" title="Sport" />} middle={<CategoryMiddle />} />
				<Layout left={<CategoryLeft url="/nasze-myki/" title="Nasze Myki" />} middle={<CategoryMiddle />} />
				<Layout left={<CategoryLeft url="/nasz-fyrtel/" title="Nasz Fyrtel" />} middle={<CategoryMiddle />} />
			</Fragment>
		);
	}
}

export default FrontPage;
