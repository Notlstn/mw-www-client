import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";

// import * as serviceWorker from './serviceWorker';

const store = createStore(
	reducer /* preloadedState, */,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route component={App} />
			</Switch>
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();