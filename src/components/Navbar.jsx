import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgMenu, CgClose } from "react-icons/cg";

const Navbar = () => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<div className="nav-links">
				<ul className={openMenu ? "nav-list toggle-menu flex" : "nav-list flex"}>
					<li>
						<NavLink to="/" className="line-hover">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" className="line-hover">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="/products" className="line-hover">
							Products
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" className="line-hover">
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to="/login">
							<button className="login-btn">Login</button>
						</NavLink>
					</li>
					{/* cart icon */}
					<li>
						<NavLink to="/cart">
							<span className="cart-icon">
								<AiOutlineShoppingCart />
								<span className="cart-items-number">10</span>
							</span>
						</NavLink>
					</li>
					{/* close the menu button icon */}
					<CgClose
						className="close-menu-icon menu-icon icon"
						onClick={() => setOpenMenu(false)}
					/>
				</ul>

				{/* open menu button icon */}
				<CgMenu
					className="open-menu-icon menu-icon icon"
					onClick={() => setOpenMenu(true)}
				/>
			</div>
		</>
	);
};

export default Navbar;
