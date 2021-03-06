import React, { Component } from "react";
import {
	Route,
	Switch,
	BrowserRouter as Router,
	withRouter,
} from "react-router-dom";

import Layout from "./components/Layout/";

import "./Apps.scss";
import "./css/materialdesignicons.min.css";

import routes from "./routes";

import ReactGA from "react-ga";
ReactGA.initialize("UA-150731209-6");
ReactGA.pageview("/");

function withLayout(WrappedComponent) {
	return class extends React.Component {
		render() {
			return (
				<Layout>
					<WrappedComponent></WrappedComponent>
				</Layout>
			);
		}
	};
}

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<React.Suspense fallback={<div></div>}>
						<Switch>
							{routes.map((route, idx) => (
								<Route
									path={route.path}
									component={withLayout(route.component)}
									key={idx}
								/>
							))}
						</Switch>
					</React.Suspense>
				</Router>
			</React.Fragment>
		);
	}
}

export default withRouter(App);
