import axios from "axios";

const API_URL = process.env.REACT_APP_BASEURL;

// Add new employee
const createEmployee = async (employeeData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL + "employees", employeeData, config);

  return response.data;
};

// Get employees
const getEmployees = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "employees", config);

  return response.data;
};

// Delete user goal
const deleteEmployee = async (employeeId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + "employees/" + employeeId, config);

  return response.data;
};

const employeesService = {
  createEmployee,
  getEmployees,
  deleteEmployee,
};

export default employeesService;
