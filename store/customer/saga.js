

import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	actionGetAllCustomers,
	actionSuccessGetAllCustomers,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

// NEW

const config = {
	headers: {
		Authorization: "Bearer" + API.TOKEN,
	},
};
//FETCH CATEGORIES
const sagaFetchCustomers = async () => {
	const url = API.BASE_URL + "/customers";

	const data = await axios
		.get(url, config)
		.then((response) => {
			return response.data.merchant;
		})
		.catch((err) => {
			console.log(err + "fetching Customers");
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

function* getAllCustomers() {
	try {
		const Customers = yield call(sagaFetchCustomers);
		yield put(actionSuccessGetAllCustomers(Customers));
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
	yield all([takeEvery(actionTypes.GET_ALL_CUSTOMERS, getAllCustomers)]);
}
