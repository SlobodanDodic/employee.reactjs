import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Topbar from "./components/TopLeftBars/Topbar";
import Leftbar from "./components/TopLeftBars/Leftbar";
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import Edit from "./pages/Edit";
import ViewEmployee from "./pages/ViewEmployee";
import EmployeesTable from "./pages/EmployeesTable";

import PrivateRoutes from "./components/PrivateRoutes";
import AdditionalRaports from "./components/ViewComponents/AdditionalRaports";
import PaycheckRaports from "./components/ViewComponents/PaycheckRaports";

export default function App() {
  const [openToggle, setOpenToggle] = useState(true);
  const { user } = useSelector((state) => state.auth);

  // const userTokken = user?.token;

  const toggleDrawer = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <>
      <BrowserRouter>
        <ToastContainer autoClose={1500} />

        <Box sx={{ display: "flex" }}>
          {user && user && (
            <>
              <Topbar openToggle={openToggle} onClick={toggleDrawer} />
              <Leftbar openToggle={openToggle} onClick={toggleDrawer} />
            </>
          )}

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />

            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route element={<PrivateRoutes />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/addedit" element={<AddEdit />} />
                  <Route path="/allemployees" element={<EmployeesTable />} />
                  <Route path="allemployees/:employeeId" element={<ViewEmployee />} />
                  <Route path="/edit/:employeeId" element={<Edit />} />

                  <Route path="/additinalRaports" element={<AdditionalRaports />} />
                  <Route path="/paycheckRaports" element={<PaycheckRaports />} />
                </Route>
              </Routes>
            </Container>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}
