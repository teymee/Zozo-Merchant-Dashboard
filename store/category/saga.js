import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	addCategorySuccess,
	fetchCategorySuccess,
	deleteCategorySuccess,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

// NEW
// ADD CATEGORY
const sagaAddCategory = async (cate) => {
	const url = API.BASE_URL + "/category/create";
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios
		.post(url, cate, config)
		.then((response) => {
			return response.data;
		})
		.catch((err) => {
			console.log(err + "adding to category");
		});

	return data;
};

//FETCH CATEGORIES
const sagaFetchCategories = async () => {
	const url = API.BASE_URL + "/category";
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios
		.get(url, config)
		.then((response) => {
			return response.data.category;
		})
		.catch((err) => {
			console.log(err + "fetching categories");
		});

	return data;
};

//DELETECATEGORIES
const sagaDeleteCategories = async (id) => {
	const url = API.BASE_URL + "/category/id/" + id;
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = await axios
		.delete(url, config)
		.then((response) => {
			return response.data.message;
		})
		.catch((err) => {
			console.log(err + "deleting categories");
		});

	return data;
};

function* postCategory(payload) {
	try {
		const isCateAdded = yield call(sagaAddCategory, payload.category);
		yield put(addCategorySuccess(isCateAdded));
	} catch (err) {
		console.log(err);
	}
}

function* getCategory() {
	try {
		const categories = yield call(sagaFetchCategories);
		yield put(fetchCategorySuccess(categories));
	} catch (err) {
		console.log(err);
	}
}

function* deleteCategory(payload) {
	try {
		const isDeleted = yield call(sagaDeleteCategories, payload.id);
		yield put(deleteCategorySuccess(isDeleted));
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.CATEGORY_POST, postCategory)]);
	yield all([takeEvery(actionTypes.CATEGORY_GET, getCategory)]);
	yield all([takeEvery(actionTypes.CATEGORY_DELETE, deleteCategory)]);
	// yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
