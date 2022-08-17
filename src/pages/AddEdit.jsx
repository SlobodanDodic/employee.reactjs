import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createEmployee } from "../Redux/features/employees/employeesSlice";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

import BasicInfo from "../components/InputComponents/BasicInfo";
import BenefitsInfo from "../components/InputComponents/BenefitsInfo";
import TestDates from "../components/InputComponents/TestDates";

import { initialState } from "../components/initialState";

export default function AddEdit() {
  const [employee, setEmployee] = useState(initialState);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createEmployee(employee));
    navigate("/allemployees");
  };

  const validateInputs =
    employee.jmbg.length === 13 && employee.bankAccountOne.length === 18 && employee.bankAccountTwo.length === 18;
  const validateDates =
    !!employee.birthday &&
    !!employee.contract &&
    !!employee.eyes &&
    !!employee.safety &&
    !!employee.fire &&
    !!employee.firstAid &&
    !!employee.healthDate &&
    !!employee.fitpassDate;

  return (
    <Container>
      <Typography component="h1" align="center" variant="h6" mb={6} sx={{ color: "#626262" }}>
        Please enter the values:
      </Typography>

      <Grid component="form" onSubmit={onSubmit}>
        <BasicInfo employee={employee} setEmployee={setEmployee} />
        <hr />
        <TestDates employee={employee} setEmployee={setEmployee} />
        <hr />
        <BenefitsInfo employee={employee} setEmployee={setEmployee} />
        <hr />

        <Box sx={{ textAlign: "center" }}>
          {validateInputs && validateDates ? (
            <Button
              size="large"
              variant="outlined"
              endIcon={<PersonAddIcon />}
              sx={{ marginTop: "20px" }}
              type="submit"
            >
              Add an employee
            </Button>
          ) : (
            <Button
              size="large"
              variant="outlined"
              endIcon={<PersonAddIcon />}
              sx={{ marginTop: "20px" }}
              type="submit"
              disabled
            >
              Add an employee
            </Button>
          )}
        </Box>
      </Grid>
    </Container>
  );
}
