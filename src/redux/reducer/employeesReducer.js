import employees from "../../mock-data/employee.json";
const INITIAL_STATE = {
  employeesList: JSON.parse(localStorage.getItem("employees")) || employees,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_EMPLOYEE":
      const newList = [...state.employeesList, action.data];
      localStorage.setItem("customers", JSON.stringify(newList));

      return {
        ...state,
        employeesList: newList,
      };
    case "UPDATE_EMPLOYEE": {
      const newList = state.employeesList.map((item) => {
        if (item.employee_number === action.data.employee_number) {
          return action.data;
        }
        return item;
      });
      localStorage.setItem("employees", JSON.stringify(newList));
      return {
        ...state,
        employeesList: newList,
      };
    }

    case "DELETE_EMPLOYEE": {
      const employee_num = action.data;
      const newList = state.employeesList.filter(
        (item) => item.employee_number !== employee_num
      );

      localStorage.setItem("employees", JSON.stringify(newList));
      return {
        ...state,
        employeesList: newList,
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
