import React from "react";
import { useProductContext } from "../context/ProductContext";
import "../assets/styles/featured-products.css";
import PriceFormate from "../helpers/PriceFormate";
import SingleProduct from "../pages/SingleProduct";
import { NavLink } from "react-router-dom";

const FeatureProducts = () => {
	const { isLoading, featuredProducts } = useProductContext();

	if (isLoading) {
		return (
			<>
				<div className="large-container">
					<div className="container">
						<div className="row">
							<div className="loading">.....Loading</div>
						</div>
					</div>
				</div>
			</>
		);
	}
	return (
		<>
			<div className="large-container">
				<div className="container">
					<div className="row">
						<div className="featured-title">
							<span>check now!</span>
							<h1>our feature services</h1>
						</div>
						<div className="featured-products">
							{featuredProducts.map((curElem) => {
								const { id, image, name, category, price } = curElem;
								return (
									<>
										<div className="featured-col-3">
											<NavLink to={`/singleproduct/${id}`}>
												<div className="featured-img">
													<img src={image} alt={name} />
													<span className="title">{category}</span>
													<div className="overlay"></div>
												</div>
												<div className="flex">
													<p>{name}</p>
													<p>{<PriceFormate price={price} />}</p>
												</div>
											</NavLink>
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FeatureProducts;
