import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AtomDate from "./AtomDate";
import Box from "@mui/material/Box";
import { TextareaAutosize } from "@mui/base";

export default function BenefitsInfo({ employee, setEmployee }) {
  return (
    <Box mt={3} sx={{ textAlign: "center" }}>
      <Stack justifyContent="flex-start" alignItems="center" mb={3} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <TextField
          required
          name="benefitUser"
          label="✪ Benefit User"
          value={employee.benefitUser}
          onChange={(e) => {
            setEmployee({ ...employee, benefitUser: e.target.value });
          }}
        />

        <AtomDate
          label="Fitpass Date"
          value={employee.fitpassDate}
          disableFuture={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, fitpassDate: newValue });
          }}
        />

        <AtomDate
          label="Health Date"
          value={employee.healthDate}
          disableFuture={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, healthDate: newValue });
          }}
        />
      </Stack>

      <Stack justifyContent="flex-start" alignItems="center" mb={3} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <TextareaAutosize
          required
          name="comment"
          placeholder="Enter Your Comments ... "
          minRows={4}
          value={employee.comment}
          onChange={(e) => {
            setEmployee({ ...employee, comment: e.target.value });
          }}
          style={{
            width: "300px",
            backgroundColor: "whitesmoke",
            borderColor: "#bdbdbd",
            borderRadius: "4px",
            padding: "5px",
          }}
        />
      </Stack>
    </Box>
  );
}
