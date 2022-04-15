import axios from "axios";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../API/Api";
import { actionTypes } from "./action";

//POST CREAT BID EVENT 
const sagaCreateBidEvent = async(event)=>{
      console.log('saga func')
      const url= API.MERCHANT_BASE_URL + '/bidding'
      const config = {
            headers:{
                  'Authorization' : 'Bearer' + API.TOKEN
            }
      }
     const data =  axios.post(url, event,config).then((response)=>{
           console.log(response.data)
           return response.data
     })

     return data
}

function* createBidEvent (payload){
      try{
            const isEventAdded = yield call(sagaCreateBidEvent, payload.event)
      }catch (err){
            console.log(err)
      }
}

export default function* rootSaga(){
      yield all([takeEvery(actionTypes.CREATE_BID_EVENT, createBidEvent)]);
}