import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { useState } from "react";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
 
export default function BookingDetailsAdmin({ bookingDetails }) {
  const [status, setStatus] = useState(true);

  return (
    <TableContainer
      component={Paper}
      sx={{ padding: "10px", marginTop: "10px" }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "25px", color: "steelblue" }}
      >
        Order details
      </Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Pincode</TableCell>
            <TableCell align="right">Service Type</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        {bookingDetails.length ? (
          <TableBody>
            {bookingDetails.map((details, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {/* <TableCell component="th" scope="row">
                {details.FirstName}
              </TableCell> */}
                <TableCell align="right">{index + 1}</TableCell>
                <TableCell align="right">{details.firstName}</TableCell>
                <TableCell align="right">{details.lastName}</TableCell>
                <TableCell align="right">{details.address}</TableCell>
                <TableCell align="right">{details.city}</TableCell>
                <TableCell align="right">{details.pincode}</TableCell>
                <TableCell align="right">{details.serviceType}</TableCell>
                <TableCell align="right">
                  {" "}
                  {status ? "Success" : "Booking Not Confirmed"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        ) : (
          ""
        )}
      </Table>
    </TableContainer>
  );
}
