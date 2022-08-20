import React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import moment from "moment";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1a76d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    width: 400,
    borderRight: "1px solid #f5f5f5",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function StyledRow({ icon, label, text, date }) {
  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        <Chip icon={icon} label={label} color="primary" variant="outlined" />
      </StyledTableCell>
      {date ? (
        <StyledTableCell align="center">{moment(date).format("DD. MMMM YYYY")}</StyledTableCell>
      ) : (
        <StyledTableCell align="center">{text}</StyledTableCell>
      )}
    </StyledTableRow>
  );
}
