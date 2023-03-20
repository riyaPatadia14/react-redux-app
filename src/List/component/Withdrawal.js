import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// menu
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { LoginAPI } from "../service/Index";
import { useSelector, useDispatch } from "react-redux";
import { onWithdrawal } from "../redux/action/Action";
// chip
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
// select
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Withdrawal = () => {
  // useState
  const [secondary, setSecondary] = useState(null);
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const SeondaryButtton = (event) => {
    setSecondary(event.currentTarget);
  };
  // const dispatch = useDispatch();
  // const handleFieldValueUpdate = (e) => {
  //   dispatch(onWithdrawal(input, e));
  // };
  // menu start
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const addData = useSelector((state) => state?.Withdrawal);
  console.log("addData", addData);
  const getData = () => {
    // LoginAPI()?.then((response) => setNewCust(response.data));
  };
  useEffect(() => {
    getData();
  }, []);

  // menu end
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={SeondaryButtton}>
            <Chip label="updated" color="success" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Chip label="pending" color="error" />
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Chip label="cancelled" color="warning" />
          </MenuItem>
        </Menu>
      </div>
      {/* <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Withdrawal Id</TableCell>
              <TableCell align="center">PayeeName</TableCell>
              <TableCell align="center">Account No</TableCell>
              <TableCell align="center">Bank Balance</TableCell>
              <TableCell align="center">Remark</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addData.map((row) => (
              <TableRow
                key={row.fullname}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="center">
                  {row.customerid}
                </TableCell>
                <TableCell align="center">{row.payeename}</TableCell>
                <TableCell align="center">{row.accountno}</TableCell>
                <TableCell align="center">{row.amount}</TableCell>
                <TableCell align="center">{row.remark}</TableCell>
                <TableCell align="center" sx={{ position: "absolute" }}>
                  <Box sx={{ position: "relative", left: "50%", top: "50%" }}>
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label="primary"
                        color="primary"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onMouseEnter={handleClick}
                      />
                    </Stack>
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <FormControl>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>update</MenuItem>
                      <MenuItem value={20}>pending</MenuItem>
                      <MenuItem value={30}>cancelled</MenuItem>
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Withdrawal;
