import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/auth/authSlice";
import EmployeesReducer from "./features/employees/employeesSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    employees: EmployeesReducer,
  },
});
