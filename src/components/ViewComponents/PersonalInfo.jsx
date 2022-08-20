import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Stack from "@mui/material/Stack";
import StyledRow from "./StyledRow";

import QrCode2Icon from "@mui/icons-material/QrCode2";
import CodeIcon from "@mui/icons-material/Code";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CakeIcon from "@mui/icons-material/Cake";
import StarsIcon from "@mui/icons-material/Stars";

const sx = { bgcolor: "#1a76d2" };

export default function PersonalInfo({ employee }) {
  return (
    <>
      <Divider>
        <Typography color="primary" variant="h3" gutterBottom align="center">
          {employee?.name}
        </Typography>
      </Divider>

      <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: "40px auto" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell sx={sx} align="center" colSpan={2}>
                <Stack>
                  <AvatarGroup sx={{ bgcolor: "#1a76d2", margin: "0 auto" }}>
                    <Avatar sx={sx}>i</Avatar>
                    <Avatar sx={sx}>n</Avatar>
                    <Avatar sx={sx}>f</Avatar>
                    <Avatar sx={sx}>o</Avatar>
                  </AvatarGroup>
                </Stack>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow icon={<QrCode2Icon />} label="JMBG" text={employee?.jmbg} />
            <StyledRow icon={<CodeIcon />} label="Job Role" text={employee?.jobRole} />
            <StyledRow icon={<CodeOffIcon />} label="Skills" text={employee && employee.skills.join(", ")} />
            <StyledRow icon={<CakeIcon />} label="Birthday" date={employee?.birthday} />
            <StyledRow icon={<StarsIcon />} label="Contract" date={employee?.contract} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
