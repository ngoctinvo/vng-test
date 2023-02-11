import { combineReducers } from "redux";
import ordersReducer from "./ordersReducer";

const rootReducer = combineReducers({
    // employees: employeesReducer,
    orders: ordersReducer,
    // customers: customersReducers,
});

export default rootReducer;