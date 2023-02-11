import orders from "../../mock-data/orders.json";
console.log("or", orders, typeof orders);
const INITIAL_STATE = {
    ordersList: JSON.parse(localStorage.getItem("orders")) || orders,
};

const reducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case "CREATE":
            const newList = [...state.ordersList, action.data];
            console.log("create", newList);
            return {
                ...state,
                ordersList: newList,
            };
        case "UPDATE":
            {
                console.log(action);
                const newList = state.ordersList.map((item) => {
                    if (item.order_number === action.data.order_number) {
                        return action.data;
                    }
                    return item;
                });
                localStorage.setItem("orders", JSON.stringify(newList));
                return {
                    ...state,
                    ordersList: newList,
                };
            }

        case "DELETE":
            {
                console.log("he");
                const order_num = action.data;
                const newList = state.ordersList.filter(
                    (item) => item.order_number !== order_num
                );
                console.log({
                    ...state,
                    ordersList: newList,
                });
                localStorage.setItem("orders", JSON.stringify(newList));

                return {
                    ...state,
                    ordersList: newList,
                };
            }

        default:
            return {
                ...state,
            };
    }
    return state;
};

export default reducer;