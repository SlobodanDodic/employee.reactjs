import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import StyledRow from "./StyledRow";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";

const sx = { bgcolor: "#1a76d2" };

export default function TestsView({ employee }) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: "40px auto" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={sx} align="center" colSpan={2}>
              <Stack>
                <AvatarGroup sx={{ bgcolor: "#1a76d2", margin: "0 auto" }}>
                  <Avatar sx={sx}>t</Avatar>
                  <Avatar sx={sx}>e</Avatar>
                  <Avatar sx={sx}>s</Avatar>
                  <Avatar sx={sx}>t</Avatar>
                  <Avatar sx={sx}>s</Avatar>
                </AvatarGroup>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledRow icon={<VisibilityIcon />} label="Ophthalmologist" date={employee?.eyes} />
          <StyledRow icon={<SportsMotorsportsIcon />} label="Safety Test" date={employee?.safety} />
          <StyledRow icon={<LocalFireDepartmentIcon />} label="Fire Test" date={employee?.fire} />
          <StyledRow icon={<MonitorHeartIcon />} label="First Aid Test" date={employee?.firstAid} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
