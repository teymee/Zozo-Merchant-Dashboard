export const actionTypes = {
      CREATE_BID_EVENT: "CREATE_BID_EVENT",
      CREATE_BID_EVENT_SUCCESS: "CREATE_BID_EVENT_SUCCESS",
      ADMIN_FETCH_PENDING_BID_EVENT: "ADMIN_FETCH_PENDING_BID_EVENT",
      ADMIN_FETCH_PENDING_BID_EVENT_SUCCESS: "ADMIN_FETCH_PENDING_BID_EVENT_SUCCESS",
      APPROVE_BID_EVENT: "APPROVE_BID_EVENT",
      APPROVE_BID_EVENT_SUCCESS: "APPROVE_BID_EVENT_SUCCESS",
}

export function actionCreateBidEvent (event){
      return{type:actionTypes.CREATE_BID_EVENT, event}
}

export function actionCreateBidEventSuccess (isCreated){
      console.log('created bid' + isCreated)
      return{type:actionTypes.CREATE_BID_EVENT_SUCCESS}
}

//ADMIN
export function actionAdminFetchPending (){
      return {type:actionTypes.ADMIN_FETCH_PENDING_BID_EVENT}
}

export function actionAdminFetchPendingSuccess (pendingBids){
      console.log(pendingBids)
      return {type:actionTypes.ADMIN_FETCH_PENDING_BID_EVENT_SUCCESS, pendingBids}
}

export function actionApproveEvent (event_id){
      console.log(event_id)
      return {type:actionTypes.APPROVE_BID_EVENT, event_id}
}

export function actionApproveEventSuccess (isApproved){
      console.log(isApproved)
      return {type:actionTypes.APPROVE_BID_EVENT_SUCCESS, isApproved}
}