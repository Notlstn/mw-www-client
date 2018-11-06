import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";

import FrontPage from "./components/FrontPage/FrontPage";

import { Route, Switch } from "react-router-dom";
class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={FrontPage} />
					{/* <Route component={App} /> */}
				</Switch>
				<div>Footer</div>
			</Fragment>
		);
	}
}

export default App;
