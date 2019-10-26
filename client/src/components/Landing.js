import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div>
    <h1>This is landing page</h1>
    <Link to="/login">Login page</Link>
  </div>
);

export default Landing;
