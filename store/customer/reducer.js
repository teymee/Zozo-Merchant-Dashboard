import { actionTypes } from "./action";

export const initialState = {
	customers: null,
	customerPostLoading: true,
	customerGetLoading: true,
	customerDeleteLoading: true,
	deletedMsg: null,
	customerDetails:null,
	singleCustomerGetLoading: true,
};
export const initState = {
	isLoggedIn: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		// case actionTypes.customers_POST_SUCCESS:
		// 	return {
		// 		...state,
		// 		...{ customerPostLoading: false },
		// 	};
			
		case actionTypes.GET_ALL_CUSTOMERS_SUCCESS:
			return {
				...state,
				...{ customers: action.customers, customerGetLoading: false },
			};

			case actionTypes.GET_SINGLE_CUSTOMER_SUCCESS:
				return {
					...state,
					...{ customerDetails: action.customer_details, singleCustomerGetLoading: false },
				};
			
		// case actionTypes.customers_DELETE_SUCCESS:
		// 	return {
		// 		...state,
		// 		...{ deletedMsg: action.deletedMsg, customerDeleteLoading: false },
		// 	};

		default:
			return state;
	}
}

export default reducer;
