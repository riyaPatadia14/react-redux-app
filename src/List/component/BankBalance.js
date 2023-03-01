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
import { onAccept } from "../redux/action/Action";

const drawerWidth = 240;

const BankBalance = () => {
  // table
  const [input, setInput] = useState([]);
  // function Row() {
  //   const { row } = props;
  //   const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const editData = useSelector((state) => state?.BankBalance);
  console.log(editData);
  useEffect(() => {
    console.log("UseEffect Data ", editData);

    setInput(editData);
    console.log("input", input);
  }, [editData]);

  const handleFieldValueUpdate = () => {
    dispatch(onAccept(input));
  };

  const MaterialIconic = [
    { item: "Bank Details", link: "/", icon: TableViewIcon },
    { item: "Bank Balance", link: "", icon: AccountBalanceIcon },
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
                    <TableCell>Id</TableCell>
                    <TableCell align="center">Full Name</TableCell>
                    <TableCell align="center">Account No</TableCell>
                    <TableCell align="center">Bank Balance</TableCell>
                    <TableCell align="center">Account Type</TableCell>
                    <TableCell align="center">Transaction Type</TableCell>
                    <TableCell align="center">Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    input && input.length == 0 ? (
                      "false"
                    ) : (
                      // input..map((x) => (
                      <TableRow
                        key={input.FullName}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {input.id}
                        </TableCell>
                        <TableCell align="center">{input.FullName}</TableCell>
                        <TableCell align="center">{input.AccountNo}</TableCell>
                        <TableCell align="center">
                          {input.BankBalance}
                        </TableCell>
                        <TableCell align="center">
                          {input.AccountType}
                        </TableCell>
                        <TableCell align="center">
                          {input.TransactionType}
                        </TableCell>
                        <TableCell align="center">
                          <Button variant="contained">Update</Button>
                        </TableCell>
                      </TableRow>
                    )
                    // ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default BankBalance;
