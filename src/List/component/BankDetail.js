import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { LoginAPI } from "../service/Index";
import { useDispatch, useSelector } from "react-redux";
import { onAppend, onUnCheck, onCheck } from "../redux/action/Action";
import Checkbox from "@mui/material/Checkbox";

const BankDetail = () => {
  const [rows, setRows] = useState([]);
  const dispatch = useDispatch();
  const handleGetRequest = () => {
    setTimeout(() => {
      LoginAPI()?.then((response) => {
        setRows(response.data);
      });
    }, 500);
  };
  useEffect(() => {
    handleGetRequest();
  }, []);
  const alreadyChecked = useSelector((state) => state?.BankBalance);
  const handleCheckEvent = (event, row) => {
    const checked = event.target.checked;
    const found = alreadyChecked.filter((x) => x.id === row.id);
    if (found.length === 0 && checked == true) {
      dispatch(onCheck(event, row));
      dispatch(onAppend(event, row));
    } else if (checked == false) {
      dispatch(onUnCheck(event, row));
    } else {
      toast.error("Already exists");
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <div>
          <ToastContainer />
        </div>
        {rows.length == 0 && rows ? (
          <SkeletonTheme baseColor="#808080" highlightColor="#FFFFFF">
            <Skeleton count={40} />
          </SkeletonTheme>
        ) : (
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
                    <TableCell align="center">Customer Id</TableCell>
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
                          // style={{
                          //   color:
                          //     checkboxColor &&
                          //     checkboxColor.length > 0 &&
                          //     checkboxColor?.find((a) => a.id == row.id)
                          //       ? "blue"
                          //       : "grey",
                          // }}
                          id="checked"
                          onClick={(e) => handleCheckEvent(e, row)}
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" name="id">
                        {row?.id}
                      </TableCell>
                      <TableCell align="center">{row?.fullname}</TableCell>
                      <TableCell align="center">{row?.accountno}</TableCell>
                      <TableCell align="center">{row?.bankbalance}</TableCell>
                      <TableCell align="center">{row?.accounttype}</TableCell>
                      <TableCell align="center">
                        {row?.transactiontype}
                      </TableCell>
                      <TableCell align="center">{row?.customerid}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        )}
      </Box>
    </>
  );
};

export default BankDetail;
