export const createOrder = (order) => {
    return {
        type: "CREATE",
        data: order,
    };
};

export const updateOrder = (order) => {
    return {
        type: "UPDATE",
        data: order,
    };
};

export const deleteOrder = (order_number) => {
    console.log(order_number);
    return {
        type: "DELETE",
        data: order_number,
    };
};