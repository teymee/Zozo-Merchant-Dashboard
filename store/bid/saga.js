import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../API/Api";
import {
	actionAdminFetchPendingSuccess,
	actionApproveEventSuccess,
	actionCreateBidEventSuccess,
	actionTypes,
} from "./action";

//POST CREAT BID EVENT
const sagaCreateBidEvent = async (event) => {
	console.log("saga func");
	const url = API.MERCHANT_BASE_URL + "/bidding";
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	const data = axios.post(url, event, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};

const sagaAdminFetchPendingBidEvent = async () => {
	const url = API.BASE_URL + "/bidding";
	const config = {
		headers: {
			Authorization: "Bearer" + API.TOKEN,
		},
	};

	const data = axios.get(url, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};

const sagaApproveBidEvent = async (event_id) => {
	console.log("saga func");
	const url = API.BASE_URL + "/bidding/approve/" + event_id;
	const config = {
		headers: {
			Authorization: "Bearer " + API.TOKEN,
		},
	};
	console.log(url)
	const data = axios.post(url, event_id, config).then((response) => {
		console.log(response.data);
		return response.data;
	});

	return data;
};

function* createBidEvent(payload) {
	try {
		const isEventAdded = yield call(sagaCreateBidEvent, payload.event);
		yield put(actionCreateBidEventSuccess(isEventAdded));
	} catch (err) {
		console.log(err);
	}
}

function* adminFetchBidEvent(payload) {
	try {
		const getAllBidEvent = yield call(
			sagaAdminFetchPendingBidEvent,
			payload.event
		);
		yield put(actionAdminFetchPendingSuccess(getAllBidEvent.bidding_event));
	} catch (err) {
		console.log(err);
	}
}

function* approveBidEvent(payload) {
	try {
		const isApproved = yield call(sagaApproveBidEvent, payload.event_id);
            console.log(isApproved)
		yield put(actionApproveEventSuccess(isApproved));
	} catch (err) {
		console.log(err);
	}
}

export default function* rootSaga() {
	yield all([takeEvery(actionTypes.CREATE_BID_EVENT, createBidEvent)]);
	yield all([
		takeEvery(actionTypes.ADMIN_FETCH_PENDING_BID_EVENT, adminFetchBidEvent),
	]);
	yield all([takeEvery(actionTypes.APPROVE_BID_EVENT, approveBidEvent)]);
}
