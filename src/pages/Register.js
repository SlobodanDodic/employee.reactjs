import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { register, reset } from "../Redux/features/auth/authSlice";

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

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password } = formData;

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
    const userData = { name, email, password };
    dispatch(register(userData));
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
            Sign up
          </Typography>

          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth onChange={onChange} label="User Name" name="name" autoFocus />
            <TextField margin="normal" required fullWidth onChange={onChange} label="Email Address" name="email" />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              label="Password"
              name="password"
              type="password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={onChange}
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>

            <Grid container sx={{ justifyContent: "center" }}>
              <Grid item>
                <Link href="/" variant="body2" underline="none">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
