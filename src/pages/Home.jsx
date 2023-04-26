import React from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/images/home.jpg";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const Home = () => {
	return (
		<>
			<HeroSection imgSrc={image} name="Khan" />
			<Services />
			<Trusted />
		</>
	);
};

export default Home;
