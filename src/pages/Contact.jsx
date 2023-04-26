import React from "react";
import '../assets/styles/contact.css'

const Contact = () => {
	return (
		<>
			<h1 className="title">Feel free to contact us</h1>
			<div className="contact-conatiner">
				
				<div className="large-container map">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13285.18720039485!2d73.07594429999999!3d33.6494707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1682323644120!5m2!1sen!2s"
						width="100%"
						height="400"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>

				<div className="container">
					<div className="row">
						<div className="form-container">
							<form action="https://formspree.io/f/xayzapkd" method="POST" >
								<input type="text" name="Username" placeholder="Username" required />
								<input type="email" name="Email" placeholder="Email" required />
								<textarea name="Message" placeholder="Message" rows="7"></textarea>
								<input type="submit" className="submit-btn" />
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
