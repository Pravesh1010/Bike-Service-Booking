// import { Switch } from "@mui/material";
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import BookingDetailsAdmin from "./bookingPage/BookingDetailsAdmin";
import { BookingPage } from "./bookingPage/BookingPage";
import { Dashboard } from "./dashboard/DashBoard";
import { NavBar } from "./navBar/NavBar";

function App() {
  const [bookingDetails, setBookingDetails] = useState([]);

  
  return (
    <div className="App">
      <NavBar />
      {/* <BookingPage /> */}
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/bookingPage">
          <BookingPage bookingDetails={bookingDetails} setBookingDetails={setBookingDetails}/>
        </Route>
        <Route exact path="/admin">
          <BookingDetailsAdmin bookingDetails={bookingDetails}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
