import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";

import FrontPage from "./components/FrontPage/FrontPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import NoMatch from "./components/NoMatch/NoMatch";
import { Route, Switch } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path="/" component={FrontPage} />
					<Route path="/s/:slug" component={CategoryPage} />
					<Route path="/:year(\d+)/:month(\d+)/:slug+" component={CategoryPage} />
					<Route path="/:rootCategory(\[a-zA-Z]+)/:subCategory(\[a-zA-Z]+)?" component={CategoryPage} />
					<Route path="*" component={NoMatch} status={404} />
				</Switch>
				<div>Footer</div>
			</Fragment>
		);
	}
}

export default App;
