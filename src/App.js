import React, { Component, Fragment } from "react";
import Header from "./components/Header/Header";
class App extends Component {
	render() {
		return (
			<Fragment>
				<Header />
				<div>
					<div>Menu</div>
					<div>Content</div>
				</div>
				<div>Footer</div>
			</Fragment>
		);
	}
}

export default App;
