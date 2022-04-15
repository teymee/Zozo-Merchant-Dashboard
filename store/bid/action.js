export const actionTypes = {
      CREATE_BID_EVENT: "CREATE_BID_EVENT"
}

export function actionCreateBidEvent (event){
      return{type:actionTypes.CREATE_BID_EVENT, event}
}