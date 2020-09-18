import React, { createContext, useState } from "react";
import { travelDestinations } from "./FakeData/TravelDestinations";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./components/Login/firebase.config";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Booking from "./components/Booking/Booking";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Hotels from "./components/Hotels/Hotels";
import NoPage from "./components/NoPage/NoPage";

export const TravelContext = createContext();

firebase.initializeApp(firebaseConfig);

function App() {
  const destinationData = travelDestinations;
  const [destination, setDestination] = useState(destinationData[0]);

  const [loggedIn, setLoggedIn] = useState(false);

  const [name, setName] = useState("user");

  return (
    <TravelContext.Provider
      value={[
        destination,
        setDestination,
        loggedIn,
        setLoggedIn,
        name,
        setName,
      ]}
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/booking">
            <Booking />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/hotels">
            <Hotels />
          </PrivateRoute>

          <Route path="*">
            <NoPage />
          </Route>
        </Switch>
      </Router>
    </TravelContext.Provider>
  );
}

export default App;
