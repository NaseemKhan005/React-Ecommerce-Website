import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import "../assets/styles/single-product.css";
import SingleProductImage from "../components/SingleProductImage";

const Api = "https://api.pujakaitem.com/api/products";
const SingleProduct = () => {
	const { getSingleProduct, isSingleLoading, singleProduct } =
		useProductContext();

	const { id } = useParams();
	useEffect(() => {
		getSingleProduct(`${Api}?id=${id}`);
	}, []);

	const {
		id: alias,
		name,
		company,
		price,
		description,
		category,
		image,
	} = singleProduct;

	if (isSingleLoading) {
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
			<div className="container">
				<div className="row">
					<span className="page-navigation">
						<NavLink to="/">Home</NavLink> / {name}
					</span>

					<div className="single-product">
						<div className="single-product-col-2">
							<SingleProductImage image={image} />
						</div>

						<div className="single-product-col-2"></div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleProduct;
