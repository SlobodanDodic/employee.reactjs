import { useDispatch } from "react-redux";
import { logout, reset } from "../../Redux/features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
// import LoginIcon from "@mui/icons-material/Login";
import { AppBar } from "./BarStyles";

export default function Topbar({ openToggle, onClick }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <AppBar position="absolute" open={openToggle}>
      <Toolbar sx={{ pr: "24px" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onClick}
          sx={{ marginRight: "36px", ...(openToggle && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Employees App
        </Typography>
        <Link to="/login" onClick={onLogout} style={{ textDecoration: "none" }}>
          <IconButton style={{ color: "#edf4fc" }}>
            <Typography component="h1" variant="h6" p={1}>
              Logout{" "}
            </Typography>
            <LogoutIcon />
          </IconButton>
        </Link>
        {/* 
        {user ? (
          <Link to="/login" onClick={onLogout} style={{ textDecoration: "none" }}>
            <IconButton style={{ color: "#edf4fc" }}>
              <Typography component="h1" variant="h6" p={1}>
                Logout{" "}
              </Typography>
              <LogoutIcon />
            </IconButton>
          </Link>
        ) : (
          <Link to="/login" onClick={onLogout} style={{ textDecoration: "none" }}>
            <IconButton style={{ color: "#edf4fc" }}>
              <Typography component="h1" variant="h6" p={1}>
                Login{" "}
              </Typography>
              <LoginIcon />
            </IconButton>
          </Link>
        )}
         */}
      </Toolbar>
    </AppBar>
  );
}
