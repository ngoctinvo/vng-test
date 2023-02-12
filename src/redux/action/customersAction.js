export const createCustomer = (customer) => {
  return {
    type: "CREATE_CUSTOMER",
    data: customer,
  };
};

export const updateCustomer = (customer) => {
  return {
    type: "UPDATE_CUSTOMER",
    data: customer,
  };
};

export const deleteCustomer = (customer_id) => {
  return {
    type: "DELETE_CUSTOMER",
    data: customer_id,
  };
};
