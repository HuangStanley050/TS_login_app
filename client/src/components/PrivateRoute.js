import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, auth, logout, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      auth ? (
        <Component logout={logout} {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login"
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
