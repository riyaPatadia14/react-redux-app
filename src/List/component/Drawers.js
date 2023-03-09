import React from "react";
import { Outlet } from "react-router-dom";
// drawers
import Person3Icon from "@mui/icons-material/Person3";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TableViewIcon from "@mui/icons-material/TableView";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import LogoutIcon from "@mui/icons-material/Logout";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
// sdks
import Toolbar from "@mui/material/Toolbar";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
const drawerWidth = 240;
const Drawers = () => {
  const MaterialIconic = [
    // { item: "Registration", link: "/registration", icon: HowToRegIcon },
    { item: "Bank Details", link: "/drawers/bankdetail", icon: TableViewIcon },
    {
      item: "Bank Balance",
      link: "/drawers/bankbalance",
      icon: AccountBalanceIcon,
    },
    { item: "New Customer", link: "/drawers/newcustomer", icon: Person3Icon },
  ];

  return (
    <>
      <div>
        <div>
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
              position="fixed"
              sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
            >
              <Toolbar>
                <Typography variant="h6" noWrap component="div">
                  SBI Bank
                </Typography>
                <Link to="/registration">
                  <HowToRegIcon />
                </Link>
                <IconButton aria-label="fingerprint" color="secondary">
                  <Fingerprint onMouseEnter={() => console.log("sign out")} />
                </IconButton>
                <LockIcon />
                <button>logout</button>
              </Toolbar>
            </AppBar>
            <Drawer
              variant="permanent"
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: "auto" }}>
                <List></List>
                <Divider />
                <List>
                  {MaterialIconic.map((text) => (
                    <Link to={text.link}>
                      <ListItem key={text} disablePadding>
                        <ListItemButton>
                          <ListItemIcon>
                            <text.icon />
                          </ListItemIcon>
                          <ListItemText primary={text.item} />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  ))}
                </List>
              </Box>
            </Drawer>
            <Outlet />
          </Box>
        </div>
      </div>
    </>
  );
};

export default Drawers;
