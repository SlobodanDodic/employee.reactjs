// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const useStyles = makeStyles({
  sideLinksStyles: {
    color: "#000",
    textDecoration: "none",
    "&:hover": {
      color: "#0068ae",
    },
  },
});

export default function Home() {
  const classes = useStyles();

  // const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" p={1} sx={{ color: "#626262" }}>
        Welcome <span style={{ textTransform: "capitalize", fontStyle: "bold" }}>{user && user.name} !</span>
      </Typography>

      <hr />

      <Typography align="justify" p={1} my={1}>
        Welcome to Employee App. The purpose of this app is to provide a simple interface of all employees in your
        company. The basic idea was to have all necessary data regarding employees in your company in one application
        with simple interface and user friendly experience.
      </Typography>

      <Timeline position="right">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link to={"/allemployees"} className={classes.sideLinksStyles}>
              <span style={{ textDecoration: "underline", fontStyle: "italic" }}>View all Emplyees</span> - Provides a
              table view of all employees
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="success" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link to={"/addedit"} className={classes.sideLinksStyles}>
              <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Add an Employee </span> - Provides an
              option of creating an employee
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link to={"/"} className={classes.sideLinksStyles}>
              <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Contract expiry dates</span> - Provides
              a table view of all employees contract dates
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="error" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Link to={"/"} className={classes.sideLinksStyles}>
              <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Test dates</span> - Provides a table
              view of all employees test dates
            </Link>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="info" />
          </TimelineSeparator>
          <TimelineContent>
            <Link to={"/"} className={classes.sideLinksStyles}>
              <span style={{ textDecoration: "underline", fontStyle: "italic" }}>Benefit infos</span> - Provides a view
              of all benefits that employee use
            </Link>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <hr />
    </Container>
  );
}
