import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
// material icon
import Person3Icon from "@mui/icons-material/Person3";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TableViewIcon from "@mui/icons-material/TableView";
import { Link } from "react-router-dom";
// table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
// redux
import { useDispatch, useSelector } from "react-redux";
import { onAppend, onUnCheck } from "../redux/action/Action";
// axios
import axios from "axios";
import Checkbox from "@mui/material/Checkbox";
const drawerWidth = 240;

const BankDetail = () => {
  const [rows, setRows] = useState([]);
  const [checkboxColor, setCheckboxColor] = useState(true);

  const dispatch = useDispatch();
  // get api
  const handleGetRequest = () => {
    axios
      .get("https://63ea1cc8e0ac9368d64a8759.mockapi.io/bank_management")
      .then((response) => {
        setRows(response.data);
      });
  };
  useEffect(() => {
    handleGetRequest();
  }, []);
  const getData = useSelector((state) => state);
  console.log("getData", getData);
  const alreadyChecked = useSelector((state) => state?.BankBalance);
  console.log("alreadyChecked", alreadyChecked);
  useEffect(() => {
    setCheckboxColor(alreadyChecked);
  }, [alreadyChecked]);

  // handleCheckEvent
  const handleCheckEvent = (event, row) => {
    console.log("row", row);
    const checked = event.target.checked;
    if (checked == true) {
      dispatch(onAppend(event, row));
      console.log("checked", checked);
      console.log("true: checked -", row);
    } else if (checked == false) {
      console.log("event", event);
      console.log("row", row);
      console.log();
      dispatch(onUnCheck(event, row));
      console.log("false: checked - ", row);
    }

    console.log("event", event);
  };

  // checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const MaterialIconic = [
    { item: "Bank Details", link: "", icon: TableViewIcon },
    { item: "Bank Balance", link: "/bankbalance", icon: AccountBalanceIcon },
    { item: "New Customer", link: "/newcustomer", icon: Person3Icon },
  ];
  return (
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <Checkbox {...label} />
                    </TableCell>
                    <TableCell>Id</TableCell>
                    <TableCell align="center">Full Name</TableCell>
                    <TableCell align="center">Account No</TableCell>
                    <TableCell align="center">Bank Balance</TableCell>
                    <TableCell align="center">Account Type</TableCell>
                    <TableCell align="center">Transaction Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows?.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          name="checked"
                          {...label}
                          style={{
                            color:
                              checkboxColor &&
                              checkboxColor.length > 0 &&
                              checkboxColor?.find((a) => a.id == row.id)
                                ? "blue"
                                : false,
                          }}
                          id="checked"
                          onMouseOver={(e) => handleCheckEvent(e, row)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" name="id">
                        {row?.id}
                      </TableCell>
                      <TableCell align="center">{row?.FullName}</TableCell>
                      <TableCell align="center">{row?.AccountNo}</TableCell>
                      <TableCell align="center">{row?.BankBalance}</TableCell>
                      <TableCell align="center">{row?.AccountType}</TableCell>
                      <TableCell align="center">
                        {row?.TransactionType}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default BankDetail;
