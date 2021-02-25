import "./App.css";
import HomePage from "../HomePage/HomePage.js";
import SelectTrip from "../SelectTrip/SelectTrip.js";
import Confirm from "../Confirm/Confirm.js";
import Reservation from "../Reservation/Reservation.js";
 import User from "../User/User.js";
import {Route, BrowserRouter as Router} from "react-router-dom";



function App() {
  return (
  
    <Router>

    <Route path="/" exact component={HomePage} />
        <Route path="/select" exact component={SelectTrip} />
        <Route path="/confirm" exact component={Confirm} />
        <Route path="/reservation" exact component={Reservation} />
        <Route path="/user" exact component={User} />
   </Router>
  );
}

export default App;
