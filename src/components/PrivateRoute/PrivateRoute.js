import React, { useContext } from "react";
import { TravelContext } from "../../App";
import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const [destination, setDestination, loggedIn, setLoggedIn] = useContext(
    TravelContext
  );

  const location = useLocation();

  return (
    <Route
      {...rest}
      render={() =>
        loggedIn ? children : <Redirect to={{ pathname: "/login", location }} />
      }
    />
  );
};

export default PrivateRoute;
