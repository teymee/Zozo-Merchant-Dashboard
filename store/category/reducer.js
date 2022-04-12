import { actionTypes } from "./action";

export const initialState = {
	category: null,
	catePostLoading: true,
	cateGetLoading: true,
};
export const initState = {
	isLoggedIn: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CATEGORY_POST_SUCCESS:
			return {
				...state,
				...{ catePostLoading: false },
			};
		case actionTypes.CATEGORY_GET_SUCCESS:
	
			return {
				...state,
				...{ category: action.categories, cateGetLoading: false },
			};
		default:
			return state;
	}
}

export default reducer;
