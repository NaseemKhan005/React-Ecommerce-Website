import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import "../assets/styles/navbar.css";

const Header = () => {
	return (
		<>
			<nav className="navbar">
				<div className="row flex">
					<NavLink to="/">
						<h2 className="logo">NaseemKhan</h2>
					</NavLink>
					<Navbar />
				</div>
			</nav>
		</>
	);
};

export default Header;
