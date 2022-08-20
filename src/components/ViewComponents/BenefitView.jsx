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

import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import CommentIcon from "@mui/icons-material/Comment";

const sx = { bgcolor: "#1a76d2" };

export default function BenefitView({ employee }) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: "40px auto" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={sx} align="center" colSpan={2}>
              <Stack>
                <AvatarGroup sx={{ bgcolor: "#1a76d2", margin: "0 auto" }}>
                  <Avatar sx={sx}>c</Avatar>
                  <Avatar sx={sx}>a</Avatar>
                  <Avatar sx={sx}>r</Avatar>
                  <Avatar sx={sx}>e</Avatar>
                </AvatarGroup>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledRow icon={<SupervisedUserCircleIcon />} label="Benefit User" text={employee?.benefitUser} />
          <StyledRow icon={<MedicalInformationIcon />} label="Health" date={employee?.healthDate} />
          <StyledRow icon={<DirectionsRunIcon />} label="Fitpass" date={employee?.fitpassDate} />
          <StyledRow icon={<CommentIcon />} label="Comment" text={employee?.comment} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
