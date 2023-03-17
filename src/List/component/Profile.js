import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { LoginAPI } from "../service/Index";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    LoginAPI()?.then((response) => setInfo(response.data));
    // console.log("info", info);
    navigate("/drawers/profile");
  };
  useEffect(() => {
    getData();
  }, []);

  // let getInfo = localStorage.getItem("mappedData");
  let text = localStorage.getItem("testJSON");
  let obj = JSON.parse(text);
  console.log("text", obj);
  return (
    <Box sx={{ flexGrow: 1, p: 10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              {obj.map((x) => (
                <TableBody>
                  <TableRow>
                    <TableCell align="left">Id</TableCell>
                    <TableCell align="center">{x.id}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="center">{x.fullname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">UserName</TableCell>
                    <TableCell align="center">{x.username}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Email</TableCell>
                    <TableCell align="center">{x.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Account No</TableCell>
                    <TableCell align="center">{x.accountno}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Bank Balance</TableCell>
                    <TableCell align="center">{x.bankbalance}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Account Type</TableCell>
                    <TableCell align="center">{x.accounttype}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">Transaction Type</TableCell>
                    <TableCell align="center">{x.transactiontype}</TableCell>
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
