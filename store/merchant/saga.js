import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	actionGetAllMechants,
	actionSuccessGetAllMechants,
	actionSuccessVerifyMechant,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

// NEW

const config = {
	headers: {
		Authorization: "Bearer" + API.TOKEN,
	},
};
//FETCH ALL MERCHANTS
const sagaFetchMerchants = async () => {
	const url = API.BASE_URL + "/merchant";

	const data = await axios
		.get(url, config)
		.then((response) => {
			return response.data.merchant;
		})
		.catch((err) => {
			console.log(err + "fetching merchants");
		});

	return data;
};

//FETCH CATEGORIES
const sagaVerifyMerchant = async (merchant_id) => {
	const url = API.BASE_URL + "/account/verify";

	
	const merchant = {
		account_id: merchant_id.toString()
	}
	console.log(merchant)
	const data = await axios
		.post(url, merchant, config)
		.then((response) => {
			console.log(response.data)
			return response.data;
		})
		.catch((err) => {
			console.log(err + "Verify Merchant");
		});

	return data;
};

// function* postCategory(payload) {
// 	try {
// 		const isCateAdded = yield call(sagaAddCategory, payload.category);
// 		yield put(addCategorySuccess(isCateAdded));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

function* getAllMechants() {
	try {
		const merchants = yield call(sagaFetchMerchants);
		yield put(actionSuccessGetAllMechants(merchants));
	} catch (err) {
		console.log(err);
	}
}

function* verifyMerchant(payload) {
	try {
		const merchants = yield call(sagaVerifyMerchant, payload.merchant_id);
		yield put(actionSuccessVerifyMechant(merchants));
	} catch (err) {
		console.log(err);
	}
}

// function* deleteCategory(payload) {
// 	try {
// 		const isDeleted = yield call(sagaDeleteCategories, payload.id);
// 		yield put(deleteCategorySuccess(isDeleted));
// 	} catch (err) {
// 		console.log(err);
// 	}
// }

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.GET_ALL_MERCHANTS, getAllMechants)]);
	yield all([takeEvery(actionTypes.VERIFY_MERCHANT, verifyMerchant)]);
}
