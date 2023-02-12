export const createOrder = (order) => {
  return {
    type: "CREATE_ORDER",
    data: order,
  };
};

export const updateOrder = (order) => {
  return {
    type: "UPDATE_ORDER",
    data: order,
  };
};

export const deleteOrder = (order_number) => {
  return {
    type: "DELETE_ORDER",
    data: order_number,
  };
};
