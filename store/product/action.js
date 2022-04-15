export const actionTypes = {
	PRODUCT_POST: "PRODUCT_POST",
	PRODUCT_POST_SUCCESS: "PRODUCT_POST_SUCCESS",
	MERCHANT_PRODUCT_GET: "MERCHANT_PRODUCT_GET",
	MERCHANT_PRODUCT_GET_SUCCESS: "MERCHANT_PRODUCT_GET_SUCCESS",
	PRODUCT_DELETE: "PRODUCT_DELETE",
	PRODUCT_DELETE_SUCCESS: "PRODUCT_DELETE_SUCCESS",
};

export function addProduct(product) {
	console.log("add product action");
	// console.log(product);
	return { type: actionTypes.PRODUCT_POST, product };
}

export function addProductSuccess(productMsg) {
	const isAddedMsg = " Product added successfully";
	console.log(isAddedMsg)

	return { type: actionTypes.PRODUCT_POST_SUCCESS, isAddedMsg };
}

export function getMerchantProduct(id) {
	console.log("get specific merchant product action");

	return { type: actionTypes.MERCHANT_PRODUCT_GET, id };
}

export function getMerchantProductSuccess(merchantProducts) {
      console.log(merchantProducts)
	return { type: actionTypes.MERCHANT_PRODUCT_GET_SUCCESS, merchantProducts };
}
