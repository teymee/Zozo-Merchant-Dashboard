export const actionTypes = {
	CATEGORY_POST: "CATEGORY_POST",
      CATEGORY_POST_SUCCESS: "CATEGORY_POST_SUCCESS",
	CATEGORY_GET: "CATEGORY_GET",
	CATEGORY_GET_SUCCESS: "CATEGORY_GET_SUCCESS",
	CATEGORY_DELETE: "CATEGORY_DELETE",
	CATEGORY_DELETE_SUCCESS: "CATEGORY_DELETE_SUCCESS",
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

export function deleteActionCategory(id){
	console.log(id)
	return { type: actionTypes.CATEGORY_DELETE, id };
}

export function deleteCategorySuccess(deletedMsg) {
      console.log(deletedMsg)
	return { type: actionTypes.CATEGORY_DELETE_SUCCESS, deletedMsg };
}