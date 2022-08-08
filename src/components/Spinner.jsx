import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

export default function Spinner() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Divider sx={{ width: "50%" }} />
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 0",
        }}
      >
        <CircularProgress style={{ marginRight: "20px" }} />
        <Typography>Loading...</Typography>
      </Container>
      <Divider sx={{ width: "50%" }} />
    </Box>
  );
}
