import { actionTypes } from "./action";

export const initialState = {
	merchants: null,
	merchantPostLoading: true,
	merchantGetLoading: true,
	merchantDeleteLoading: true,
	deletedMsg: null,
};
export const initState = {
	isLoggedIn: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		// case actionTypes.merchants_POST_SUCCESS:
		// 	return {
		// 		...state,
		// 		...{ merchantPostLoading: false },
		// 	};
			
		case actionTypes.GET_ALL_MERCHANTS_SUCCESS:
			return {
				...state,
				...{ merchants: action.merchants, merchantGetLoading: false },
			};
			
		// case actionTypes.merchants_DELETE_SUCCESS:
		// 	return {
		// 		...state,
		// 		...{ deletedMsg: action.deletedMsg, merchantDeleteLoading: false },
		// 	};

		default:
			return state;
	}
}

export default reducer;
