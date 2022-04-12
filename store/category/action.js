export const actionTypes = {
	CATEGORY_POST: "CATEGORY_POST",
      CATEGORY_POST_SUCCESS: "CATEGORY_POST_SUCCESS",
	CATEGORY_GET: "CATEGORY_GET",
	CATEGORY_GET_SUCCESS: "CATEGORY_GET_SUCCESS",
};

export function addCategory(category) {
	return { type: actionTypes.CATEGORY_POST, category };
}

export function addCategorySuccess() {
	return { type: actionTypes.CATEGORY_POST_SUCCESS };
}

export function fetchCategory() {
	return { type: actionTypes.CATEGORY_GET };
}

export function fetchCategorySuccess(categories) {
      console.log(categories)
	return { type: actionTypes.CATEGORY_GET_SUCCESS, categories };
}
