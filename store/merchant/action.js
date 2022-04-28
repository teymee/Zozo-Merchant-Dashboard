export const actionTypes ={
      GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
      GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS",
      VERIFY_MERCHANT: "VERIFY_MERCHANT",
      VERIFY_MERCHANT_SUCCESS: "VERIFY_MERCHANT_SUCCESS",
}

export const actionGetAllMechants = ()=>{
      return {type: actionTypes.GET_ALL_MERCHANTS}
}

export const actionSuccessGetAllMechants = (merchants)=>{
      console.log(merchants)
      return {type: actionTypes.GET_ALL_MERCHANTS_SUCCESS, merchants}
}

export const actionVerifyMechant = (merchant_id)=>{
      
      return {type: actionTypes.VERIFY_MERCHANT, merchant_id}
}

export const actionSuccessVerifyMechant = (isVerifed)=>{
      console.log(isVerifed)
      return {type: actionTypes.VERIFY_MERCHANT_SUCCESS, isVerifed}
}