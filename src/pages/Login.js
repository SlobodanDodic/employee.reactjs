import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../Redux/features/auth/authSlice";
import { toast } from "react-toastify";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Spinner from "../components/Spinner";
import LogoSpin from "../components/LogoSpin";

const theme = createTheme();

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [isError, message, isSuccess, user, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0px 10px 13px -7px #817f7f, 5px 5px 15px 5px rgb(0 0 0 / 0%)",
          }}
        >
          <LogoSpin />

          <Typography component="h1" variant="h5" sx={{ marginTop: 4 }}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              label="Email Address"
              name="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              label="Password"
              name="password"
              type="password"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/register" variant="body2" underline="none">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
