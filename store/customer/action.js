export const actionTypes ={
      GET_ALL_CUSTOMERS: "GET_ALL_CUSTOMERS",
      GET_ALL_CUSTOMERS_SUCCESS: "GET_ALL_CUSTOMERS_SUCCESS",
}

export const actionGetAllCustomers = ()=>{
      return {type: actionTypes.GET_ALL_CUSTOMERS}
}

export const actionSuccessGetAllCustomers = (customers)=>{
      console.log(customers)
      return {type: actionTypes.GET_ALL_CUSTOMERS_SUCCESS,customers}
}
