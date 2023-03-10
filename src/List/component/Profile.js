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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    axios
      .get("https://63ea1cc8e0ac9368d64a8759.mockapi.io/Register")
      .then((response) => setInfo(response.data));
    console.log("info", info);
    localStorage.setItem("Registered", JSON.stringify(info));
    navigate("/drawers/Profile");
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 10 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableBody>
                <TableRow>
                  <TableCell align="left">Id</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">UserName</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Account No</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Bank Balance</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Account Type</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="left">Transaction Type</TableCell>
                  <TableCell align="center"></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
