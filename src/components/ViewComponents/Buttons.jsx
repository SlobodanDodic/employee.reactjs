import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../../Redux/features/employees/employeesSlice";

import Divider from "@mui/material/Divider";
// import Button from "@mui/material/Button";
import ReplyIcon from "@mui/icons-material/Reply";
// import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import DeleteIcon from "@mui/icons-material/Delete";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Buttons({ employeeId, employee }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYes = () => {
    dispatch(deleteEmployee(employeeId));
    setOpen(false);
    navigate("/allemployees");
  };

  return (
    <Divider sx={{ margin: "50px 0" }}>
      <Button
        onClick={() => navigate(`/edit/${employeeId}`)}
        variant="outlined"
        color="success"
        startIcon={<EditIcon />}
        sx={{ margin: "0 20px" }}
      >
        Edit
      </Button>

      <Button
        component={Link}
        variant="contained"
        color="primary"
        startIcon={<ReplyIcon />}
        to={"/allemployees"}
        sx={{ margin: { xs: "20px 0", md: "0 20px" }, display: { xs: "block", md: "inline-block" } }}
      >
        Go Back To Employees Table
      </Button>

      <Button
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleClickOpen}
        sx={{ margin: "0 20px" }}
      >
        Del
      </Button>
      <Dialog open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
        <DialogContent sx={{ margin: "0 auto" }} dividers>
          <Typography variant="subtitle2" gutterBottom>
            Are you sure you want to delete {employee?.name}?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ margin: "0 auto" }}>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleCloseYes}>Yes</Button>
        </DialogActions>
      </Dialog>
    </Divider>
  );
}
