import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import image from "../assets/images/home.jpg";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProducts from "../components/FeatureProducts";

const Home = () => {
	return (
		<>
			<HeroSection imgSrc={image} name="Khan" />
			<FeatureProducts />
			<Services />
			<Trusted />
		</>
	);
};

export default Home;
