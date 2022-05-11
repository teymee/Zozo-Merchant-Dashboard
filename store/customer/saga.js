

import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	actionGetAllCustomers,
	actionSuccessGetAllCustomers,
	actionSuccessGetSingleCustomer,
} from "./action";
import axios from "axios";
import { API } from "../API/Api";

// NEW

const config = {
	headers: {
		Authorization: "Bearer" + API.TOKEN,
	},
};

//FETCH ALL CUSTOMERS
const sagaFetchCustomers = async () => {
	const url = API.MERCHANT_BASE_URL + "/customer";

	const data = await axios
		.get(url, config)
		.then((response) => {
			return response.data.customer;
		})
		.catch((err) => {
			console.log(err + "fetching Customers");
		});

	return data;
};

//FETCH SINGLE CUSTOMER
const sagaFetchSingleCustomer = async (customer_id) => {
	const url = API.MERCHANT_BASE_URL + "/customer/"+customer_id;

	console.log(url)
	const data = await axios
		.get(url, config)
		.then((response) => {

			return response.data.customer;
		})
		.catch((err) => {
			console.log(err + "fetching single customer");
		});

	return data;
};

//UPGRADE CUSTOMER
const sagaUpgradeCustomer = async (customer_id)=>{
	const url = API.BASE_URL + "/customer/upgrade"
	const customer = {
		account_id: customer_id.toString()
	  }
	const data = await axios.post(url, customer, config).then((response)=>{
			console.log(response.data)
			return response.data
	})

	return data
}

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

function* getSingleCustomer({customer_id}) {
	try {
		const customer = yield call(sagaFetchSingleCustomer, customer_id);
		yield put(actionSuccessGetSingleCustomer (customer));
	} catch (err) {
		console.log(err);
	}
}

function* upgradeCustomer(payload) {
	try {
		const isUpgraded = yield call(sagaUpgradeCustomer, payload.customer_id);
		yield put(actionUpgradeCustomerSuccess(isUpgraded));
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
	yield all([takeEvery(actionTypes.GET_SINGLE_CUSTOMER, getSingleCustomer)]);
	yield all([takeEvery(actionTypes.UPGRADE_CUSTOMER, upgradeCustomer)]);
}
