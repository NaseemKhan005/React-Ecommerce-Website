import React from "react";
import "../assets/styles/footer.css";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram, IoMdCall } from "react-icons/io";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<>
			<div className="footer-large-container">
				<div className="container">
					<div className="row">
						<div className="footer-get-started">
							<div className="left-side">
								<p>ready to get started?</p>
								<p>talk to us today</p>
							</div>
							<div className="right-side">
								<button className="submit-btn btn">get started</button>
							</div>
						</div>
						<div className="footer">
							<div className="footer-col-4">
								<h2>Naseem Khan</h2>
								<p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
							</div>

							<div className="footer-col-4">
								<p>subscribe to get imortant updates</p>
								<input type="email" placeholder="Your email address" />
								<button className="submit-btn btn">subscribe</button>
							</div>

							<div className="footer-col-4 follow-us">
								<p>follow us on</p>
								<div className="social-media-icons-container">
									<FaDiscord className="social-icon" />
									<IoLogoInstagram className="social-icon" />
									<FaYoutube className="social-icon" />
								</div>
							</div>

							<div className="footer-col-4">
								<p>call us</p>
								<p>
									<IoMdCall className="phone-icon" />
									+92 1234567899
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="footer-privacy-policy"
					style={{ borderTop: "1px solid var(--white)" }}
				>
					<div className="container">
						<div className="row flex" style={{ gap: "20px" }}>
							<p>copyright © {year} Naseem Khan - All Right Reserved</p>
							<p>PRIVACY POLICY Terms And Conditions</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
