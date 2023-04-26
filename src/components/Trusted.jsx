import React from "react";
import image1 from "../assets/images/logo-coca-cola.png";
import image2 from "../assets/images/logo-godrej.png";
import image3 from "../assets/images/logo-oppo.png";
import image4 from "../assets/images/logo-paypal.png";
import image5 from "../assets/images/logo-philips.png";

const Trusted = () => {
	return (
		<>
			<div className="large-container">
				<div className="container">
					<div className="row">
						<span className="trusted-title">trusted by 1000+ companies</span>
						<div className="trusted-images-container">
							<img src={image1} alt="Coca Cola Company Logo" />
							<img src={image2} alt="Godrej Company Logo" />
							<img src={image3} alt="Oppo Company Logo" />
							<img src={image4} alt="Paypal Company Logo" />
							<img src={image5} alt="Philips Company Logo" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Trusted;
