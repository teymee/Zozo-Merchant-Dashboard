import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	addProduct,
	addProductSuccess,
	fetchPRODUCTSuccess,
	deletePRODUCTSuccess,
      getMerchantProductSuccess,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

// POST PRODUCT
const sagaAddProduct = async (product) => {
	const url = API.MERCHANT_BASE_URL + "/product/add";
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios
		.post(url, product, config)
		.then((response) => {
			console.log("saga add product" + response);
			return response.data.product.name;
		})
	return data;
};

//GET SPECIFIC MERCHANT'S PRODUCT
const sagaGetMerchantProducts = async (id) => {
	const url = API.MERCHANT_BASE_URL + "/product/all/" + id;
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data =  await axios.get(url, config).then((response)=>{
           
            return response.data.products
      });

      return data
};

function* postProduct(payload) {
	try {
		const isProductAdded = yield call(sagaAddProduct, payload.product);
		yield put(addProductSuccess(isProductAdded));
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

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.PRODUCT_POST, postProduct)]);
	yield all([takeEvery(actionTypes.MERCHANT_PRODUCT_GET, getMerchantProduct)]);
	// yield all([takeEvery(actionTypes.PRODUCT_DELETE, deletePRODUCT)]);
	// yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
