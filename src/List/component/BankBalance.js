import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
// material icon
import Person3Icon from "@mui/icons-material/Person3";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import TableViewIcon from "@mui/icons-material/TableView";
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
// skeleton
// import Box from '@mui/material/Box';
import Skeleton from "@mui/material/Skeleton";

const BankBalance = () => {
  // table
  const [input, setInput] = useState([]);
  const dispatch = useDispatch();
  const addData = useSelector((state) => state?.BankBalance);
  const editData = useSelector((state) => state?.Deposit);
  console.log("editData 1", editData);
  useEffect(() => {
    // debugger;
    console.log("UseEffect Data ", editData);
    setInput(editData);
  }, [editData]);
  // console.log("editData", editData);

  const handleFieldValueUpdate = () => {
    // debugger;
    dispatch(onAccept(input));
    console.log("handleFieldValueUpdate: ", dispatch(onAccept(input)));
  };
  const onField = (e) => {
    // debugger;
    console.log("name", e.target.name);
    console.log("value", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div>
        <TableContainer component={Paper}>
          {/* {addData && addData.length == 0 ? (
                "Loading..."
              ) : ( */}
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
              {addData?.map((row) => (
                <TableRow
                  key={row?.FullName}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                >
                  <TableCell component="th" scope="row">
                    {row?.id}
                  </TableCell>
                  <TableCell align="center">{row?.FullName}</TableCell>
                  <TableCell align="center">{row?.AccountNo}</TableCell>
                  <TableCell align="center">
                    <TextField
                      hiddenLabel
                      id=""
                      name="BankBalance"
                      defaultValue={row?.BankBalance}
                      onChange={onField}
                      variant="filled"
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="center">{row?.AccountType}</TableCell>
                  <TableCell align="center">{row?.TransactionType}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      onClick={() => handleFieldValueUpdate(row)}
                    >
                      Update
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {/* )} */}
        </TableContainer>
      </div>
    </Box>
  );
};

export default BankBalance;
