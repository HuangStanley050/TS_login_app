import React, { useState } from "react";
import axios from "axios";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = event => {
    if (event) event.preventDefault();
    callback();
  };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values
  };
};

const Login = Props => {
  const login = () => {
    console.log("you are loggging");
    console.log(values);
  };

  const { values, handleChange, handleSubmit } = useForm(login);

  return (
    <div style={{ margin: "2rem auto", width: "50%" }}>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", fontSize: "2rem" }}
      >
        <div>
          <label>Email</label>
          <input
            onChange={handleChange}
            style={{ height: "2rem" }}
            name="Email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            onChange={handleChange}
            style={{ height: "2rem" }}
            type="password"
            name="Password"
          />
        </div>
        <div>
          <button style={{ fontSize: "2rem" }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
