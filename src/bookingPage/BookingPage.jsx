import { Avatar, Box } from "@mui/material";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
// import { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Route, Switch, useHistory } from "react-router-dom";
import { deepOrange, deepPurple } from '@mui/material/colors';


export const BookingPage = (props) => {
  const includedServices = [
    "Castrol Oil",
    "Air Filter Cleaning",
    "Clutch Adjustment",
    "Chain sproket Adjusment",
    "Exterior Form Wash & More",
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("")
  const [openDialog, setOpenDialog] = useState(false);
  const [userDetails, setUserDetails] = useState({});
//   const [bookingDetails, setBookingDetails] = useState([]);

  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
    console.log(event.target.value);
  };
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangePincode = (event) => {
    setPincode(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeServiceType = (event) => {
    setServiceType(event.target.value)
  }
  const handleCheckAvailablity = () => {
    // userDetails.firstName = firstName;
    // userDetails.lastName = lastName;
    // userDetails.pincode = pincode;
    // userDetails.city = city;
    // console.log(userDetails)
    props.setBookingDetails([
      ...props.bookingDetails,
      {
        firstName: firstName,
        lastName: lastName,
        city: city,
        pincode: pincode,
        address: address,
        serviceType: serviceType,
      },
    ]);
    console.log(props.bookingDetails);
    setOpenDialog(true);
  };

  const history = useHistory();
  const handleCheck = () => {
    console.log(props.bookingDetails);
    setOpenDialog(false);
    history.push("/admin")
  };

  
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <div>
          <img
            style={{ width: "80%" }}
            alt="service"
            src="https://static.gobumpr.com/new_carousel_webp/bike-general-service/img_1"
          ></img>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography sx={{fontWeight: "bold", fontSize: "25px", color:"steelblue"}}>Book Service</Typography>
          <TextField
            id="outlined-name"
            label="First Name"
            // value={name}
            onChange={handleChangeFirstName}
          />
          <TextField
            id="outlined-name"
            label="Last name"
            // defaultValue="foo"
            onChange={handleChangeLastName}
          />
          <TextField
            id="outlined-name"
            label="City"
            // defaultValue="foo"
            onChange={handleChangeCity}
          />
          <TextField
            id="outlined-name"
            label="Pincode"
            // defaultValue="foo"
            onChange={handleChangePincode}
          />
          <TextField
            id="outlined-name"
            label="Address"
            // defaultValue="foo"
            onChange={handleChangeAddress}
          />
          <InputLabel id="demo-simple-select-label">ServiceType</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={serviceType}
            label="Service"
            onChange={handleChangeServiceType}
          >
            <MenuItem value={10}>General Service</MenuItem>
            <MenuItem value={20}>Preminum Service</MenuItem>
            <MenuItem value={30}>Water Wash</MenuItem>
          </Select>
          <Button onClick={handleCheckAvailablity} variant="contained">
            Check
          </Button>
        </Box>
      </div>
      <Box>
        <Card
          sx={{ minWidth: "275" }}
          className="shadow-lg p-3 mb-5 bg-white rounded"
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
            Whats included!!
          </Typography>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              padding: "10px    ",
            }}
          >
            {includedServices.map((service, key) => {
              return (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                    }}
                  >
                    <Avatar sx={{ padding: "10px",bgcolor: deepPurple[500] }}>{key + 1}</Avatar>
                    <Typography
                      variant="h6"
                      component="div"
                      sx={{ marginTop: "20px" }}
                    >
                      {service}
                    </Typography>
                  </Box>
                </>
              );
            })}
          </CardContent>
        </Card>
      </Box>
      {openDialog ? (
        <Dialog
          open={openDialog}
          //   onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm service</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Our service mechanic will reach you in few Hours.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCheck} autoFocus variant="contained">
              Book Service
            </Button>
          </DialogActions> 
        </Dialog>
      ) : (
        ""
      )}
      {/* <Switch>
        <Route exact path="/admin"> */}
            {/* <BookingDetailsAdmin /> */}
        {/* </Route>
      </Switch> */}
      
    </>
  );
};
