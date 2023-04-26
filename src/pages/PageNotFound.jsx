import React from "react";
import "../assets/styles/page-not-found.css";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="error-page">
						<h1>404</h1>
						<h2>oh! You're lost</h2>
						<p>
							The page you are looking for does not exist. How you got here is a
							mystery. But you can click the button below to go back to the homepage.
						</p>
						<NavLink to="/">
							<button className="goto-home-btn btn">Go to Home</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default PageNotFound;
