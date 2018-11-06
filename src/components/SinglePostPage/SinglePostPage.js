import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import LeftColumn from "./LeftColumn/LeftColumn";
import MiddleColumn from "./MiddleColumn/MiddleColumn";
class SinglePostPage extends Component {
	render() {
		let content = <Layout left={<LeftColumn />} middle={<MiddleColumn />} />;
		return <Fragment>{content}</Fragment>;
	}
}

export default withRouter(SinglePostPage);
