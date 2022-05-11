import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	addProduct,
	addProductSuccess,
	fetchPRODUCTSuccess,
	deletePRODUCTSuccess,
	getMerchantProductSuccess,
	getProductDetailsSuccess,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

const config = {
	headers: {
		Authorization: "Bearer" + API.TOKEN,
	},
};
const modalSuccess = (type) => {
	notification[type]({
		message: "Successful",
		description: "Product Added successful!",
	});
};

const modalWarning = (type) => {
	notification[type]({
		message: "Error",
		description: "Error while creating a Product!",
	});
};

const whoami = async () => {
	const url = API.BASE_URL + "/whoami";
	console.log(API.TOKEN);
	console.log("API.TOKEN");
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	const data = await axios.get(url, config).then((res) => {
		return res.data;
	});

	return data;
};

// POST PRODUCT
const sagaAddProduct = async (product) => {
	const user = await whoami(API.TOKEN);

	const url = API.MERCHANT_BASE_URL + "/product/add";

	product.merchant_id = user.merchant.id.toString();
	console.log(product)
	const data = await axios.post(url, product, config).then((response) => {
		console.log("saga add product" + response);
		return response.data.product.name;
	});
	return data;
};

//GET SPECIFIC MERCHANT'S PRODUCT
const sagaGetMerchantProducts = async (id) => {
	const user = await whoami(API.TOKEN);
	const url =
		API.MERCHANT_MERCHANT_BASE_URL + "/product/all/" + user.merchant.id;
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios.get(url, config).then((response) => {
		return response.data.products;
	});

	return data;
};

//GET  PRODUCT DETAILS
const sagaGetProductDetails = async (id) => {
	const url = API.BASE_URL + "/customer/product/" + id;
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios.get(url, config).then((response) => {
		console.log(response.data);
		return response.data.product;
	});

	return data;
};



//SAGA FUNCTIONS
function* postProduct(payload) {
	try {
		const isProductAdded = yield call(sagaAddProduct, payload.product);
		yield put(addProductSuccess(isProductAdded));
		modalSuccess("success");
	} catch (err) {
		console.log(err + "adding product saga");
	}
}

function* getMerchantProduct(payload) {
	try {
		const merchantProducts = yield call(sagaGetMerchantProducts, payload.id);
		yield put(getMerchantProductSuccess(merchantProducts));
	} catch (err) {
		console.log(err + "getting merchant product saga");
		// alert(err + "getting merchant product saga");
	}
}

function* getProductDetails(payload) {
	try {
		console.log(" saga product details");
		const product = yield call(sagaGetProductDetails, payload.id);
		yield put(getProductDetailsSuccess(product));
	} catch (err) {
		console.log(err + "product details saga");
		// alert(err + "getting merchant product saga");
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.PRODUCT_POST, postProduct)]);
	yield all([takeEvery(actionTypes.MERCHANT_PRODUCT_GET, getMerchantProduct)]);
	yield all([takeEvery(actionTypes.GET_PRODUCT_DETAILS, getProductDetails)]);
	// yield all([takeEvery(actionTypes.PRODUCT_DELETE, deletePRODUCT)]);
	// yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
