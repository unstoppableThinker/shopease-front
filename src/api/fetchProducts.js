import axios from "axios";
import { API_BASE_URL, API_URLS } from "./constants"


export const getAllProducts = async(id, typeId) => {
	let url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?categoryId=${id}`;
	if(typeId) {
		url += `&typeId=${typeId}`
	}

	try {
		const result = await axios.get(url);

		return result?.data;
	} catch (e) {
		console.log(e);
	}
}

export const getProductBySlug = async(slug) => {
	const url = API_BASE_URL + API_URLS.GET_PRODUCTS + `?slug=${slug}`;

	try {
		const result = await axios.get(url);

		return result?.data?.[0];
	} catch (e) {
		console.log(e);
	}
}