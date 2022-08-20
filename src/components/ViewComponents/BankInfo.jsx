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
import StyledRowBank from "./StyledRowBank";
import PaymentsIcon from "@mui/icons-material/Payments";
import EuroIcon from "@mui/icons-material/Euro";
import PlusOneIcon from "@mui/icons-material/PlusOne";

const sx = { bgcolor: "#1a76d2" };

export default function BankInfo({ employee }) {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "800px", margin: "40px auto" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={sx} align="center" colSpan={2}>
              <Stack>
                <AvatarGroup sx={{ bgcolor: "#1a76d2", margin: "0 auto" }}>
                  <Avatar sx={sx}>b</Avatar>
                  <Avatar sx={sx}>a</Avatar>
                  <Avatar sx={sx}>n</Avatar>
                  <Avatar sx={sx}>k</Avatar>
                </AvatarGroup>
              </Stack>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledRowBank icon={<PaymentsIcon />} label="Primary Account" account={employee?.bankAccountOne} />
          <StyledRowBank icon={<PaymentsIcon />} label="Secondy Account" account={employee?.bankAccountTwo} />
          <StyledRowBank icon={<EuroIcon />} label="Paycheck" cash={employee?.paycheck} />
          <StyledRowBank icon={<PlusOneIcon />} label="Bonus" cash={employee?.bonus} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
