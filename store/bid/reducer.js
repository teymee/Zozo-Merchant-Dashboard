import { actionTypes } from "./action";

export const initialState = {
	bids: null,
      pendingBids:null,
      approvedBids:null,
	bidPostLoading: true,
	bidGetLoading: true,
	bidDeleteLoading: true,
	deletedMsg: null,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.CREATE_BID_EVENT_SUCCESS:
			return {
				...state,
				...{ bidPostLoading: false },
			};
			
		case actionTypes. ADMIN_FETCH_PENDING_BID_EVENT_SUCCESS:
			return {
				...state,
				...{ pendingBids: action.pendingBids, bidGetLoading: false },
			};
			
		// case actionTypes.bidGORY_DELETE_SUCCESS:
		// 	return {
		// 		...state,
		// 		...{ deletedMsg: action.deletedMsg, bidDeleteLoading: false },
		// 	};

		default:
			return state;
	}
}

export default reducer;