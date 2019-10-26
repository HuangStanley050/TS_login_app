import React from "react";
import { Link } from "react-router-dom";

const Deny = props => {
  //props.clearError();
  return (
    <div>
      <h1>Denied</h1>
      <h2>Please login</h2>
      <Link onClick={props.clearError} to="/login">
        Login
      </Link>
    </div>
  );
};

export default Deny;
