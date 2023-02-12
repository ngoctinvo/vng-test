import customers from "../../mock-data/customers.json";
const INITIAL_STATE = {
  customersList: JSON.parse(localStorage.getItem("customers")) || customers,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_CUSTOMER":
      const newList = [...state.customersList, action.data];
      localStorage.setItem("customers", JSON.stringify(newList));

      return {
        ...state,
        customersList: newList,
      };
    case "UPDATE_CUSTOMER": {
      const newList = state.customersList.map((item) => {
        if (item.customer_id === action.data.customer_id) {
          return action.data;
        }
        return item;
      });
      localStorage.setItem("customers", JSON.stringify(newList));
      return {
        ...state,
        customersList: newList,
      };
    }

    case "DELETE_CUSTOMER": {
      const customer_id = action.data;
      const newList = state.customersList.filter(
        (item) => item.customer_id !== customer_id
      );

      localStorage.setItem("customers", JSON.stringify(newList));

      return {
        ...state,
        customersList: newList,
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
