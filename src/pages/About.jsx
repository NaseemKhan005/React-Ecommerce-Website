import HeroSection from "../components/HeroSection";
import image from "../assets/images/about.jpg";
import { useProductContext } from "../context/ProductContext";

const About = () => {
	return (
		<>
			<HeroSection imgSrc={image} name="Ecommerce" />;
		</>
	);
};

export default About;
