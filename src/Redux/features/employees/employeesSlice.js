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

// View employee
export const viewEmployee = createAsyncThunk("employees/viewEmployee", async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await employeesService.viewEmployee(id, token);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Edit employee
export const editEmployee = createAsyncThunk("employees/edit", async (employeeData, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token;
    return await employeesService.editEmployee(employeeData, token);
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
      })
      .addCase(viewEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(viewEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = Array.from(state.employees).find((employee) => employee._id === action.payload.id);
      })
      .addCase(viewEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.employees = Array.from(state.employees).map((employee) =>
          employee._id === action.payload.id ? action.payload : employee
        );
      })
      .addCase(editEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = employeesSlice.actions;
export default employeesSlice.reducer;
