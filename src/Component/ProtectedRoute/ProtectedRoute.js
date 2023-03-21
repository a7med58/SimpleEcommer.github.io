import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated ? <Component {...props} /> : <Navigate to="/login" />
    }
  />
);

export default ProtectedRoute;
