import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { onAccept, onUnCheck } from "../redux/action/Action";

const BankBalance = () => {
  // table
  const [input, setInput] = useState([]);
  const [onMove, setOnMove] = useState([]);
  const dispatch = useDispatch();
  const addData = useSelector((state) => state?.BankBalance);
  const editData = useSelector((state) => state?.Deposit);

  let totalAmount = 0;
  const xyz = addData.map(
    (x) => (totalAmount = parseFloat(totalAmount) + parseFloat(x.bankbalnce))
  );
  console.log("total", totalAmount);
  console.log("era", editData);
  console.log("xyz", xyz);
  useEffect(() => {
    setInput(editData);
  }, [editData]);
  const handleFieldValueUpdate = () => {
    dispatch(onAccept(input));
  };
  const onField = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const onRemove = (e, onMove) => {
    dispatch(onUnCheck(e, onMove));
  };
  useEffect(() => {
    setOnMove(addData);
  }, [addData]);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      <div>
        <TableContainer component={Paper}>
          {addData && addData.length == 0 ? (
            "Loading..."
          ) : (
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell align="center">Full Name</TableCell>
                  <TableCell align="center">Account No</TableCell>
                  <TableCell align="center">Bank Balance</TableCell>
                  <TableCell align="center">Account Type</TableCell>
                  <TableCell align="center">Transaction Type</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {addData?.map((row) => (
                  <TableRow
                    key={row?.fullname}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row?.id}
                    </TableCell>
                    <TableCell align="center">{row?.fullname}</TableCell>
                    <TableCell align="center">{row?.accountno}</TableCell>
                    <TableCell align="center">
                      <TextField
                        hiddenLabel
                        id=""
                        name="BankBalance"
                        defaultValue={row?.bankbalance}
                        onChange={onField}
                        variant="filled"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">{row?.accounttype}</TableCell>
                    <TableCell align="center">{row?.transactiontype}</TableCell>
                    <TableCell align="center">
                      <UpgradeIcon
                        onClick={() => handleFieldValueUpdate(row)}
                        color="primary"
                      />
                      <DeleteIcon
                        color="primary"
                        onClick={(e) => onRemove(e, row)}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TableContainer>
      </div>
      {input.length > 0 && <div>{totalAmount}</div>}
    </Box>
  );
};

export default BankBalance;
