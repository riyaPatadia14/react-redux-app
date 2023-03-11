import React, { useState, useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
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
import { Link, useNavigate } from "react-router-dom";
import PaymentIcon from "@mui/icons-material/Payment";
import Toolbar from "@mui/material/Toolbar";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LockIcon from "@mui/icons-material/Lock";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Person4Icon from "@mui/icons-material/Person4";

const drawerWidth = 240;
const Drawers = () => {
  const [profile, setProfile] = useState([]);
  const navigate = useNavigate();
  const LogOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  const Admin = [
    { item: "Bank Details", link: "/drawers/bankdetail", icon: TableViewIcon },
    {
      item: "Bank Balance",
      link: "/drawers/bankbalance",
      icon: AccountBalanceIcon,
    },
    { item: "New Customer", link: "/drawers/newcustomer", icon: Person3Icon },
  ];
  const User = [
    { item: "Payment", link: "/drawers/payments", icon: PaymentIcon },
    { item: "Profile", link: "/drawers/profile", icon: Person4Icon },
  ];
  const getData = () => {
    axios
      .get("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register")
      .then((response) => setProfile(response.data));
  };
  useEffect(() => {
    getData();
  }, []);
  const Uname = localStorage.getItem("Uname");
  const Adminy = localStorage.getItem("Admin");

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
                <div style={{ textAlign: "center", fontSize: "20px" }}>
                  SEBI
                </div>
                <div style={{ textAlign: "center", paddingLeft: "85%" }}>
                  {Uname}
                  {Adminy}
                </div>
                <div style={{ textAlign: "center", paddingLeft: "2%" }}>
                  <Fingerprint onClick={LogOut} />
                </div>
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
                {
                  <div>
                    {Uname && (
                      <List>
                        {User.map((text) => (
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
                    )}
                    <Divider />
                    {!Uname && (
                      <List>
                        {Admin.map((text) => (
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
                    )}
                  </div>
                }
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
