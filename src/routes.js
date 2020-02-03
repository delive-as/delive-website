import React from "react";

// Import all components
const Landing = React.lazy(() => import("./pages/LandingPage/index"));

const routes = [
	// public Routes
	{ path: "/", component: Landing }
];

export default routes;
