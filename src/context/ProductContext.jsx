import axios from "axios";
import { createContext, useContext, useEffect } from "react";

const AppContext = createContext();

const Api = "https://api.pujakaitem.com/api/products";
const AppProvider = ({ children }) => {
	// getting products
	const getProducts = async (url) => {
		const response = await axios.get(url);
	};

	useEffect(() => {
		getProducts(Api);
	}, []);

	return (
		<>
			<AppContext.Provider value="naseem">{children}</AppContext.Provider>
		</>
	);
};

const useProductContext = () => {
	return useContext(AppContext);
};

export { AppProvider, useProductContext };
