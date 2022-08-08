import React from "react";
import { createStyles, makeStyles } from "@mui/styles";

import logo from "../assets/favicon.png";

export const useStyles = makeStyles(() =>
  createStyles({
    rotateIcon: {
      animation: "$spin 20s linear infinite",
    },
    "@keyframes spin": {
      "0%": {
        transform: "rotate(0deg)",
      },
      "100%": {
        transform: "rotate(360deg)",
      },
    },
  })
);

const LogoSpin = () => {
  const classes = useStyles();

  return (
    <>
      <img className={classes.rotateIcon} src={logo} alt="logo" style={{ width: "10em" }} />
      <div
        style={{
          display: "flex",
          color: "grey",
          letterSpacing: "2px",
          paddingTop: "25px",
        }}
      >
        <h4 style={{ paddingRight: "10px" }}>
          <a
            href="https://www.itengine.rs/"
            rel="noopener noreferrer"
            target="_blank"
            style={{
              background: "#fb7c1b",
              color: "white",
              borderRadius: "5px",
              textDecoration: "none",
              letterSpacing: "5px",
              padding: "7px",
            }}
          >
            IT Engine
          </a>
        </h4>
        <h4 style={{ paddingRight: "10px" }}> office manager</h4>
      </div>
    </>
  );
};

export default LogoSpin;
