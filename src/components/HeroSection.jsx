import React from "react";
import "../assets/styles/hero-section.css";

const HeroSection = (props) => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="hero-section">
						<div className="left-hero-section-side">
							<span>WELCOME TO</span>
							<h1 className="store-name">{props.name} Store</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque
								temporibus veniam doloribus libero ad error omnis voluptates animit
								Suscipit sapiente.
							</p>
							<button>SHOP NOW</button>
						</div>
						<div className="right-hero-section-side">
							<div className="image-border"></div>
							<img src={props.imgSrc} alt={props.name} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroSection;
