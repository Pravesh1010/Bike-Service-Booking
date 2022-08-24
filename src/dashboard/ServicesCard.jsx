import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Route, useHistory } from "react-router-dom";
import Popover from "@mui/material/Popover";

// import { Switch } from "@mui/material";
// import { BookingPage } from "../bookingPage/BookingPage";

export default function ServicesCard() {
  const serviceData = [
    {
      img: "https://media.istockphoto.com/photos/male-mechanic-in-a-repair-workshop-picture-id481678798?k=20&m=481678798&s=612x612&w=0&h=UMKJYXyZEMX2Y5fnxFGw4MKjHBKOfxENzk7ubvZ_DfM=",
      serviceType: "Bike Service General",
      price: 999,
    },
    {
      img: "https://media.istockphoto.com/photos/man-in-the-garage-is-checking-a-motorcycle-picture-id1363985678?k=20&m=1363985678&s=612x612&w=0&h=x2UlWVe6lCmKb8FfoSbFwQarHsgECNT2MuzhCwPfqTs=",
      serviceType: "Premium Bike Service",
      price: 1499,
    },
    {
      img: "https://media.istockphoto.com/photos/washing-motorcycle-chain-with-high-pressure-jet-closeup-picture-id1186078730?k=20&m=1186078730&s=612x612&w=0&h=ztlew_o9qDB0vQJGl82eZO5to-BGkDdBATV0I0z0gLg=",
      serviceType: "Premium Water Wash",
      price: 499,
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopOver = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopOverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        padding: "10px",
        marginBottom: "20px",
        // border: "1px solid black",
        backgroundColor: "rgb(193, 203, 211)", // gap:"50px"
      }}
    >
      {serviceData.map((data) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={data.img}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.serviceType}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                ₹{data.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                variant="contained"
                onClick={() => history.push("/bookingPage")}
              >
                Book
              </Button>
              <Button size="small" variant="outlined" onClick={handlePopOver}>
                What we Do
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handlePopOverClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  General Service includes air filter cleaning, oil filter
                  cleaning, carburettor cleaning, clutch play adjustment, chain
                  adjustment and lubrication, brake shoes cleaning and exterior
                  foam wash.
                </Typography>
              </Popover>
            </CardActions>
          </Card>
        );
      })}
      {/* <Switch>
        <Route exact path="/bookingPage">
          <BookingPage />
        </Route>
      </Switch> */}
    </div>
  );
}
