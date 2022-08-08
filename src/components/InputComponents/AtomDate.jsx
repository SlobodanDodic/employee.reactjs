import * as React from "react";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

export default function AtomDate({ label, onChange, value, disablePast, disableFuture }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        required
        disablePast={disablePast}
        disableFuture={disableFuture}
        inputFormat="dd.MM.yyyy"
        openTo="year"
        views={["year", "month", "day"]}
        value={value}
        label={label}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
