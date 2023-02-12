import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import customersReducers from "./customersReducer";
import employeesReducer from "./employeesReducer";

const rootReducer = combineReducers({
  employees: employeesReducer,
  orders: ordersReducer,
  customers: customersReducers,
});

export default rootReducer;
