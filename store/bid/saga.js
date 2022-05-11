import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API, whoami } from "../API/Api";
import {
	actionAdminFetchAuctionsSuccess,
	actionApproveEventSuccess,
	actionCreateBidEventSuccess,
	actionTypes,
} from "./action";
import { notification } from "antd";

const config = {
	headers: {
		Authorization: "Bearer " + API.TOKEN,
	},
};

const modalSuccess = (type) => {
	notification[type]({
		message: "Successful",
		description: "Auction Created successful!y",
	});
};

const modalWarning = (type) => {
	notification[type]({
		message: "Error",
		description: "Error while creating an Auction!",
	});
};

//POST CREAT BID EVENT
const sagaCreateBidEvent = async (event) => {
	console.log("saga func");
	const url = API.MERCHANT_MERCHANT_BASE_URL + "/bidding";
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	const data = axios
		.post(url, event, config)
		.then((response) => {
			console.log(response.data);
			return response.data;
		})
		.catch((err) => {
			console.log(err);
			return false;
		});

	return data;
};

//GET MERCHANT BIDDING EVENT
const sagaAdminFetchBidEvent = async (status) => {
	let data;

	const merchant = await whoami(API.TOKEN);
	const user = merchant.merchant.id;
	if (status === "pending") {
		const url = API.MERCHANT_BASE_URL + "/bidding/" + user;

		console.log(status);
		data = axios.get(url, config).then((response) => {
			const pendingBids = response.data.bidding_event.filter((bid) => {
				return bid.approved === false;
			});
			return pendingBids;
		});
	} else if (status === "approved") {
		const url = API.MERCHANT_BASE_URL + "/bidding/" + user;

		console.log(status);
		data = axios.get(url, config).then((response) => {
			console.log(response.data.bidding_event);
			const approvedBids = response.data.bidding_event.filter((bid) => {
				return bid.approved === true;
			});
			return approvedBids;
		});
	} else {
		const url = API.MERCHANT_BASE_URL + "/bidding/status";

		const eventStatus = {
			status,
			merchant_id: user.toString()
		};

		console.log(eventStatus);
		data = axios.post(url, eventStatus, config).then((response) => {
			console.log(response.data);
			return response.data.bidding_event;
		});
	}

	return data;
};

//SAGA FUNCTIONS

//CREATE AUCTION
function* createBidEvent(payload) {
	try {
		const isEventAdded = yield call(sagaCreateBidEvent, payload.event);
		yield put(actionCreateBidEventSuccess(isEventAdded));
		console.log(isEventAdded)
		if (!isEventAdded) {
			modalWarning("warning");
		} else {
			modalSuccess("success");
		}
	} catch (err) {
		console.log(err);
	}
}

function* adminFetchBidEvent(payload) {
	try {
		const getAllBidEvent = yield call(sagaAdminFetchBidEvent, payload.status);
		console.log(getAllBidEvent);
		yield put(actionAdminFetchAuctionsSuccess(getAllBidEvent));
	} catch (err) {
		console.log(err);
	}
}

function* approveBidEvent(payload) {
	try {
		const isApproved = yield call(sagaApproveBidEvent, payload.event_id);
		console.log(isApproved);
		yield put(actionApproveEventSuccess(isApproved));
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.CREATE_BID_EVENT, createBidEvent)]);
	yield all([
		takeEvery(actionTypes.ADMIN_FETCH_BID_EVENTS, adminFetchBidEvent),
	]);
	yield all([takeEvery(actionTypes.APPROVE_BID_EVENT, approveBidEvent)]);
}
