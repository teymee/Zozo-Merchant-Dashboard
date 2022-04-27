// import { all, call, put, takeEvery } from "redux-saga/effects";
// import { notification } from "antd";
// import axios from "axios";
// import { API } from "../API/Api";
// import rootSaga from "../rootSaga";
// import {
// 	actionTypes,
//       actionGetAllMechants,
//       actionSuccessGetAllMechants
// } from "./action";

// const config = {
//       headers: {
//             Authorization: "Bearer" + API.TOKEN,
//       },
// };

// const sagaFetchAllMerchant = async()=>{

//       const url = API.BASE_URL + "/merchant";

// 	const data = await axios
// 		.get(url, config)
// 		.then((response) => {
// 			return response.data.merchant;
// 		})
// 		.catch((err) => {
// 			console.log(err + "fetching  merchants");
// 		});

// 	return data;
// }

// function* getAllMerchant(){
//       try{

//             const merchants = yield call(sagaFetchAllMerchant)
//             yield put(actionSuccessGetAllMechants(merchants))
//       }catch(err){
//             console.log(err)
//       }

// }

// export default function* rootSaga() {
//       yield all([takeEvery(actionTypes.GET_ALL_MERCHANTS, getAllMerchant)]);

// }

import { all, call, put, takeEvery } from "redux-saga/effects";
import { notification } from "antd";

import {
	actionTypes,
	actionGetAllMechants,
	actionSuccessGetAllMechants,
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
}
