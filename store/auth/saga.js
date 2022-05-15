import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { notification } from "antd";

import { actionTypes, loginSuccess, logOutSuccess, registerSuccess } from "./action";
import { API } from "../API/Api";


const modalSuccess = (type) => {
	notification[type]({
		message: "Welcome back",
		description: "You are login successful!",
	});
};

const modalWarning = (type) => {
	notification[type]({
		message: "Good bye!",
		description: "Your account has been logged out!",
	});
};

const modalLoginFailed = (type) => {
	notification[type]({
		message: "Login Failed",
		description: "Invalid Email or Password",
	});
};


const modalRegistrationSuccess = (type) => {
	notification[type]({
		message: "Welcome =",
		description: "Registered Successfully",
	});
};


const loginAdmin = async (loginCred) => {
	console.log(loginCred);
	const url = API.BASE_URL + "/login";

	console.log(url)
	const data = axios
		.post(url, loginCred)
		.then((response) => {
			console.log(response.data);
			localStorage.setItem("token", response.data.token);
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
	return data;
};

const registerAdmin = async (registerCred) => {
	console.log(registerCred);
	// const url = "https://zozo-auction.herokuapp.com/api/v1/merchant/create"
	const url = API.MERCHANT_BASE_URL + "/create";
	console.log(url)

	const data = axios
		.post(url, registerCred)
		.then((response) => {
			console.log(response.data.token);
			localStorage.setItem("token", response.data.account.token);
			return response.data;
		})
		.catch((err) => {
			console.log(err);
		});
	return data;
};



function* loginSaga({payload}) {
	try {
		const isLogin = yield call(loginAdmin, payload.loginCred);
		if (isLogin) {
			yield put(loginSuccess(isLogin));
			modalSuccess("success");
			payload.router.push('/')
			// setTimeout(()=>{
			
			// },2000)
		}else{
			modalLoginFailed("warning");
		}
	} catch (err) {
		console.log(err);
	}
}

function* registerSaga({payload}) {
	try {
        console.log(payload.registerCred)
		const isRegistered = yield call(registerAdmin, payload.registerCred);
		if (isRegistered) {
			yield put(registerSuccess(isRegistered));
			modalRegistrationSuccess("success");
	setTimeout(()=>{
		payload.router.push('/')
	},2000)
		}
	} catch (err) {
		console.log(err);
	}
}

function* logOutSaga() {
	try {
		yield put(logOutSuccess());
		modalWarning("warning");
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_REQUEST, registerSaga)]);
	yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
