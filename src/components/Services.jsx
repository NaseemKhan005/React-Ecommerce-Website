import React from "react";
import "../assets/styles/services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="services">
						<div className="service service1">
							<span className="icon">
								<TbTruckDelivery />
							</span>
							<p>super fast and free delivery</p>
						</div>
						<div className="service service2">
							<div className="service service-top">
								<span className="icon">
									<BiShieldQuarter />
								</span>
								<p>Non-contact Shipping</p>
							</div>
							<div className="service service-bottom">
								<span className="icon">
									<GiReceiveMoney />
								</span>
								<p>money-back guarented</p>
							</div>
						</div>
						<div className="service service3">
							<span className="icon">
								<RiSecurePaymentLine />
							</span>
							<p>super secure payement system</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Services;
