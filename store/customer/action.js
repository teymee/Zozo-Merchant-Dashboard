export const actionTypes ={
      GET_ALL_CUSTOMERS: "GET_ALL_CUSTOMERS",
      GET_ALL_CUSTOMERS_SUCCESS: "GET_ALL_CUSTOMERS_SUCCESS",
      GET_SINGLE_CUSTOMER_SUCCESS: "GET_SINGLE_CUSTOMER_SUCCESS",
      GET_SINGLE_CUSTOMER: "GET_SINGLE_CUSTOMER",
      UPGRADE_CUSTOMER: "UPGRADE_CUSTOMER",
      UPGRADE_CUSTOMER_SUCCESS: "UPGRADE_CUSTOMER_SUCCESS",
}

export const actionGetAllCustomers = ()=>{
      return {type: actionTypes.GET_ALL_CUSTOMERS}
}

export const actionSuccessGetAllCustomers = (customers)=>{
      console.log(customers)
      return {type: actionTypes.GET_ALL_CUSTOMERS_SUCCESS,customers}
}
export const actionUpgradeCustomer = (customer_id)=>{
      console.log(customer_id)
      return {type: actionTypes.UPGRADE_CUSTOMER, customer_id}
}

export const actionUpgradeCustomerSuccess = (isUpgraded)=>{
      console.log(isUpgraded)
      return {type: actionTypes.UPGRADE_CUSTOMER_SUCCESS,isUpgraded}
}

//GET SINGLE CUSTOMER
export const actionGetSingleCustomer = (customer_id) => {
      console.log(customer_id)
	return { type: actionTypes.GET_SINGLE_CUSTOMER, customer_id};
};

export const actionSuccessGetSingleCustomer =  (customer_details) => {
	console.log (customer_details);
	return { type: actionTypes.GET_SINGLE_CUSTOMER_SUCCESS, customer_details };
};