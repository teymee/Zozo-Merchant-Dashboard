import { all } from "redux-saga/effects";
import AppSaga from "./app/saga";
import AuthSaga from "./auth/saga";
import CategorySaga from "./category/saga";
import ProductSaga from "./product/saga";
import BidSaga from "./bid/saga";
import MerchantSaga from "./merchant/saga";
import CustomerSaga from "./customer/saga";

export default function* rootSaga() {
	yield all([
		AppSaga(),
		AuthSaga(),
		CategorySaga(),
		ProductSaga(),
		BidSaga(),
		MerchantSaga(),
		CustomerSaga(),
	]);
}
