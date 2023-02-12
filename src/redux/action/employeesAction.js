export const createEmployee = (employee) => {
  return {
    type: "CREATE_EMPLOYEE",
    data: employee,
  };
};

export const updateEmployee = (employee) => {
  return {
    type: "UPDATE_EMPLOYEE",
    data: employee,
  };
};

export const deleteEmployee = (employee_number) => {
  return {
    type: "DELETE_EMPLOYEE",
    data: employee_number,
  };
};
