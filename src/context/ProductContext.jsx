import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/productReducer";

const AppContext = createContext();

const initialState = {
	isLoading: false,
	isError: false,
	products: [],
	featuredProducts: [],
	isSingleLoading: false,
	singleProduct: {},
};

const Api = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// getting all products
	const getProducts = async (url) => {
		dispatch({ type: "IS_LOADING" });
		try {
			const response = await axios.get(url);
			const products = await response.data;
			dispatch({ type: "SET_API_DATA", payload: products });
		} catch (error) {
			dispatch({ type: "IS_ERROR" });
		}
	};

	// getting single product
	const getSingleProduct = async (url) => {
		dispatch({ type: "SET_SINGLE_LOADING" });
		try {
			const res = await axios.get(url);
			const singleProduct = await res.data;
			dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
		} catch (error) {
			dispatch({ type: "SET_SINGLE_ERROR" });
		}
	};

	useEffect(() => {
		getProducts(Api);
	}, []);

	return (
		<>
			<AppContext.Provider value={{ ...state, getSingleProduct }}>
				{children}
			</AppContext.Provider>
		</>
	);
};

const useProductContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useProductContext };
