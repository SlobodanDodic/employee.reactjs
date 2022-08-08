import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AtomDate from "./AtomDate";
import Box from "@mui/material/Box";
import NumberFormat from "react-number-format";

export default function BasicInfo({ employee, setEmployee }) {
  const jbmgCondition = employee.jmbg.length !== 0 && employee.jmbg.length !== 13;
  const accountOneCondition = employee.bankAccountOne.length !== 0 && employee.bankAccountOne.length !== 18;
  const accountTwoCondition = employee.bankAccountTwo.length !== 0 && employee.bankAccountTwo.length !== 18;

  return (
    <Box sx={{ textAlign: "center" }}>
      <Stack justifyContent="center" alignItems="center" mb={2} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <TextField
          required
          name="name"
          label="★ Name"
          helperText=" "
          value={employee.name}
          onChange={(e) => {
            setEmployee({ ...employee, name: e.target.value });
          }}
        />

        <TextField
          required
          name="jmbg"
          label="⓭ Jmbg"
          value={employee.jmbg}
          onChange={(e) => {
            setEmployee({ ...employee, jmbg: e.target.value });
          }}
          helperText={
            jbmgCondition ? (
              <span style={{ color: "red" }}>
                JMBG must have 13 digits. You are missing {13 - employee.jmbg.length}
              </span>
            ) : (
              " "
            )
          }
        />

        <TextField
          required
          name="jobRole"
          label="🎮 Job Role"
          helperText=" "
          value={employee.jobRole}
          onChange={(e) => {
            setEmployee({ ...employee, jobRole: e.target.value });
          }}
        />

        <TextField
          required
          name="skills"
          label="🥷 Skills"
          helperText=" "
          value={employee.skills}
          onChange={(e) => setEmployee({ ...employee, skills: e.target.value.split(",") })}
        />
      </Stack>

      <Stack justifyContent="center" alignItems="center" mb={4} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <AtomDate
          label="Birthday"
          value={employee.birthday}
          disableFuture={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, birthday: newValue });
          }}
        />

        <AtomDate
          label="Contract expires"
          value={employee.contract}
          disablePast={true}
          onChange={(newValue) => {
            setEmployee({ ...employee, contract: newValue });
          }}
        />
      </Stack>

      <Stack justifyContent="center" alignItems="center" mb={3} spacing={2} direction={{ xs: "column", sm: "row" }}>
        <NumberFormat
          required
          label="💳 First account"
          customInput={TextField}
          value={employee.bankAccountOne}
          format="### ############# ##"
          onChange={(e) => setEmployee({ ...employee, bankAccountOne: e.target.value.replace(/\s/g, "") })}
          helperText={
            accountOneCondition ? (
              <span style={{ color: "red" }}>
                Account must have 18 digits. You are missing {18 - employee.bankAccountOne.length}
              </span>
            ) : (
              " "
            )
          }
        />

        <NumberFormat
          required
          label="💳 Second account"
          customInput={TextField}
          value={employee.bankAccountTwo}
          format="### ############# ##"
          onChange={(e) => setEmployee({ ...employee, bankAccountTwo: e.target.value.replace(/\s/g, "") })}
          helperText={
            accountTwoCondition ? (
              <span style={{ color: "red" }}>
                Account must have 18 digits. You are missing {18 - employee.bankAccountTwo.length}
              </span>
            ) : (
              " "
            )
          }
        />

        <NumberFormat
          required
          label="💰 Paycheck"
          customInput={TextField}
          value={employee.bonus}
          suffix={" €"}
          thousandSeparator="."
          decimalSeparator=","
          helperText=" "
          onChange={(e) => setEmployee({ ...employee, bonus: e.target.value.replace(/\D/g, "") })}
        />

        <NumberFormat
          required
          label="💰 Bonus"
          customInput={TextField}
          value={employee.paycheck}
          suffix={" €"}
          thousandSeparator="."
          decimalSeparator=","
          helperText=" "
          onChange={(e) => setEmployee({ ...employee, paycheck: e.target.value.replace(/\D/g, "") })}
        />
      </Stack>
    </Box>
  );
}
