import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, thirdListItems } from "./LeftbarList";
import { Drawer } from "./BarStyles";

export default function Leftbar({ openToggle, onClick }) {
  return (
    <Drawer variant="permanent" open={openToggle}>
      <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", px: [1] }}>
        <IconButton onClick={onClick}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <List component="nav">
        {mainListItems}
        {/* <Divider sx={{ my: 1 }} />
        {secondaryListItems} */}
        <Divider sx={{ my: 1 }} />
        {thirdListItems}
      </List>
    </Drawer>
  );
}
