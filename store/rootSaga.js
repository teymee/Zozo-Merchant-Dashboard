import { all } from "redux-saga/effects";
import AppSaga from "./app/saga";
import AuthSaga from "./auth/saga";
import CategorySaga from "./category/saga";
import ProductSaga from "./product/saga";
import BidSaga from "./bid/saga";

export default function* rootSaga() {
	yield all([AppSaga(), AuthSaga(), CategorySaga(), ProductSaga(), BidSaga()]);
}
