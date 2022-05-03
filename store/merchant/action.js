export const actionTypes = {
	GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
	GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS",
      GET_SINGLE_MERCHANT: "GET_SINGLE_MERCHANT",
	GET_SINGLE_MERCHANT_SUCCESS: "GET_SINGLE_MERCHANT_SUCCESS",
	VERIFY_MERCHANT: "VERIFY_MERCHANT",
	VERIFY_MERCHANT_SUCCESS: "VERIFY_MERCHANT_SUCCESS",
	UPGRADE_MERCHANT: "UPGRADE_MERCHANT",
	UPGRADE_MERCHANT_SUCCESS: "UPGRADE_MERCHANT_SUCCESS",
};

export const actionGetAllMechants = () => {
	return { type: actionTypes.GET_ALL_MERCHANTS };
};

export const actionSuccessGetAllMechants = (merchants) => {
	console.log(merchants);
	return { type: actionTypes.GET_ALL_MERCHANTS_SUCCESS, merchants };
};

//GET SINGLE MERCHANT
export const actionGetSingleMechant = (merchant_id) => {
      console.log(merchant_id)
	return { type: actionTypes.GET_SINGLE_MERCHANT, merchant_id};
};

export const actionSuccessGetSingleMechant = (merchants_details) => {
	console.log(merchants_details);
	return { type: actionTypes.GET_SINGLE_MERCHANT_SUCCESS, merchants_details };
};

//VERIFY ACCOUNT
export const actionVerifyMechant = (id) => {
	return { type: actionTypes.VERIFY_MERCHANT, id };
};

export const actionSuccessVerifyMechant = (isVerifed) => {
	console.log(isVerifed);
	return { type: actionTypes.VERIFY_MERCHANT_SUCCESS, isVerifed };
};

export const actionUpgradeMerchant = (merchant_id) => {
	console.log(merchant_id);
	return { type: actionTypes.UPGRADE_MERCHANT, merchant_id };
};

export const actionUpgradeMerchantSuccess = (isUpgraded) => {
	console.log(isUpgraded);
	return { type: actionTypes.UPGRADE_MERCHANT_SUCCESS, isUpgraded };
};
