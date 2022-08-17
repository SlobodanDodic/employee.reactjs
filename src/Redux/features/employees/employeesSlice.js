import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import employeesService from "./employeesService";

const initialState = {
  employees: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Add new employee
export const createEmployee = createAsyncThunk("employees/createEmployee", async (employeeData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await employeesService.createEmployee(employeeData, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Get employee
export const getEmployees = createAsyncThunk("employees/getAll", async (_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await employeesService.getEmployees(token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Delete employee
export const deleteEmployee = createAsyncThunk("employees/delete", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await employeesService.deleteEmployee(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        Array.from(state.employees).push([action.payload]);
      })
      .addCase(createEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = action.payload;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = Array.from(state.employees).filter((employee) => employee._id !== action.payload.id);
      })
      .addCase(deleteEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = employeesSlice.actions;
export default employeesSlice.reducer;
