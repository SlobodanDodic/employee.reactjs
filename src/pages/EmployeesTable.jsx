import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees, deleteEmployee } from "../Redux/features/employees/employeesSlice";
import { DataGrid, GridToolbar, gridClasses } from "@mui/x-data-grid";
import Spinner from "../components/Spinner";
import { grey } from "@mui/material/colors";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
import moment from "moment";

export default function EmployeesTable() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { employees, isLoading } = useSelector((state) => state.employees);
  const rows = employees.employees;

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch, user]);

  const columns = [
    { field: "_id", headerName: "ID", width: 50, hide: true },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "jmbg", headerName: "Jmbg", flex: 1 },
    {
      field: "contract",
      headerName: "Contract expires",
      flex: 1,
      valueFormatter: (params) => moment(params?.value).format("DD.MMM YYYY"),
    },
    {
      field: "eyes",
      headerName: "Ophthalmologist",
      flex: 1,
      valueFormatter: (params) => moment(params?.value).format("DD.MMM YYYY"),
    },
    {
      field: "safety",
      headerName: "Safety test",
      flex: 1,
      valueFormatter: (params) => moment(params?.value).format("DD.MMM YYYY"),
    },
    {
      field: "fire",
      headerName: "Fire test",
      flex: 1,
      valueFormatter: (params) => moment(params?.value).format("DD.MMM YYYY"),
    },
    {
      field: "firstAid",
      headerName: "First aid test",
      flex: 1,
      valueFormatter: (params) => moment(params?.value).format("DD.MMM YYYY"),
    },
    {
      field: "edit",
      headerName: "Edit / Delete",
      width: 170,
      disableExport: true,
      renderCell: (employees) => (
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="outlined" size="small" color="primary" startIcon={<EditIcon />}>
            Edit
          </Button>
          <Button
            onClick={() => {
              dispatch(deleteEmployee(employees.id));
              window.location.reload();
            }}
            variant="outlined"
            size="small"
            color="error"
            endIcon={<DeleteIcon />}
          >
            Del
          </Button>
        </Stack>
      ),
    },
  ];

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {rows && (
        <DataGrid
          columns={columns}
          rows={rows}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5, 10, 20, 100]}
          components={{
            Toolbar: GridToolbar,
          }}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          sx={{
            height: "85vh",
            boxShadow: 2,
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) => (theme.palette.mode === "light" ? grey[200] : grey[900]),
            },
          }}
        />
      )}
    </>
  );
}
