export const actionTypes ={
      GET_ALL_MERCHANTS: "GET_ALL_MERCHANTS",
      GET_ALL_MERCHANTS_SUCCESS: "GET_ALL_MERCHANTS_SUCCESS",
}

export const actionGetAllMechants = ()=>{
      return {type: actionTypes.GET_ALL_MERCHANTS}
}

export const actionSuccessGetAllMechants = (merchants)=>{
      console.log(merchants)
      return {type: actionTypes.GET_ALL_MERCHANTS_SUCCESS, merchants}
}
