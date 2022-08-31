import Stack from "@mui/material/Stack";
import AtomDate from "./AtomDate";
import Box from "@mui/material/Box";

export default function TestDates({ employee, setEmployee }) {
  return (
    <Box mt={3} sx={{ textAlign: "center" }}>
      <Stack justifyContent="flex-start" alignItems="center" mb={3} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <AtomDate
          label="Eyes Check Date"
          value={employee.eyes}
          disablePast={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, eyes: newValue });
          }}
        />

        <AtomDate
          label="Safety Check Date"
          value={employee.safety}
          disablePast={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, safety: newValue });
          }}
        />

        <AtomDate
          label="Fire Check Date"
          value={employee.fire}
          disablePast={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, fire: newValue });
          }}
        />

        <AtomDate
          label="First Aid Check Date"
          value={employee.firstAid}
          disablePast={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, firstAid: newValue });
          }}
        />
      </Stack>
    </Box>
  );
}
