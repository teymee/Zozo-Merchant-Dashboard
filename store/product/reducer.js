import { actionTypes } from "./action";

export const initialState = {
	product: null,
	singleProduct: null,
	productPostLoading: true,
	productGetLoading: true,
	getSingleProductLoading: true,
	productDeleteLoading: true,
	deletedMsg: null,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.PRODUCT_POST_SUCCESS:
			return {
				...state,
				...{ productPostLoading: false },
			};

		case actionTypes.MERCHANT_PRODUCT_GET_SUCCESS:
			return {
				...state,
				...{ product: action.merchantProducts, productGetLoading: false },
			};

		case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				...{ singleProduct: action.product, getSingleProductLoading: false },
			};

		case actionTypes.PRODUCT_DELETE_SUCCESS:
			return {
				...state,
				...{ deletedMsg: action.deletedMsg, productDeleteLoading: false },
			};

		default:
			return state;
	}
}

export default reducer;
