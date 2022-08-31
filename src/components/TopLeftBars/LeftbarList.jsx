import * as React from "react";
import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";

import VisibilityIcon from "@mui/icons-material/Visibility";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

export const mainListItems = (
  <>
    <ListSubheader component="div" inset color="primary">
      Essential
    </ListSubheader>

    <Link to={"/"} className="sideLinksStyles">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </Link>

    <Link to={"/allemployees"} className="sideLinksStyles">
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Employees Table" />
      </ListItemButton>
    </Link>

    <Link to={"/addedit"} className="sideLinksStyles">
      <ListItemButton>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Employee" />
      </ListItemButton>
    </Link>
  </>
);

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset color="primary">
      Individual reports
    </ListSubheader>

    <ListItemButton>
      <ListItemIcon>
        <VisibilityIcon />
      </ListItemIcon>
      <ListItemText primary="Ophthalmologist" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <SportsMotorsportsIcon />
      </ListItemIcon>
      <ListItemText primary="Safety at work" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <LocalFireDepartmentIcon />
      </ListItemIcon>
      <ListItemText primary="Fire regulations" />
    </ListItemButton>

    <ListItemButton>
      <ListItemIcon>
        <HealthAndSafetyIcon />
      </ListItemIcon>
      <ListItemText primary="First aid test" />
    </ListItemButton>
  </>
);

export const thirdListItems = (
  <>
    <ListSubheader component="div" inset color="primary">
      Company reports
    </ListSubheader>

    <Link to={"/additinalRaports"} className="sideLinksStyles">
      <ListItemButton>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Additional reports" />
      </ListItemButton>
    </Link>

    <Link to={"/paycheckRaports"} className="sideLinksStyles">
      <ListItemButton>
        <ListItemIcon>
          <AccountBalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Paycheck reports" />
      </ListItemButton>
    </Link>
  </>
);
