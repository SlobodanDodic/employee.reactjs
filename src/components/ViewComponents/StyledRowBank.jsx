import React from "react";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import NumberFormat from "react-number-format";
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

export default function StyledRowBank({ icon, label, account, cash }) {
  return (
    <StyledTableRow>
      <StyledTableCell align="center">
        <Chip icon={icon} label={label} color="primary" variant="outlined" />
      </StyledTableCell>
      {account ? (
        <StyledTableCell align="center">
          <NumberFormat displayType={"text"} format="###-#############-##" value={account} />
        </StyledTableCell>
      ) : (
        <StyledTableCell align="center">
          <NumberFormat displayType={"text"} thousandSeparator={true} suffix={".00 €"} value={cash} />
        </StyledTableCell>
      )}
    </StyledTableRow>
  );
}
