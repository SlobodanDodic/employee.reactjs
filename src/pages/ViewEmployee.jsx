import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEmployees } from "../Redux/features/employees/employeesSlice";

import PersonalInfo from "../components/ViewComponents/PersonalInfo";
import Buttons from "../components/ViewComponents/Buttons";
import BankInfo from "../components/ViewComponents/BankInfo";
import TestsView from "../components/ViewComponents/TestsView";
import BenefitView from "../components/ViewComponents/BenefitView";

export default function ViewEmployee() {
  const { employeeId } = useParams();
  const { employees } = useSelector((state) => state.employees);
  const allEmployees = employees.employees;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const employee = allEmployees?.find((employee) => employee._id === employeeId);

  return (
    <>
      <PersonalInfo employee={employee} />

      <BankInfo employee={employee} />

      <TestsView employee={employee} />

      <BenefitView employee={employee} />

      <Buttons employeeId={employeeId} employee={employee} />
    </>
  );
}
