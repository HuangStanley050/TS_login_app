import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

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

function check_cookie_name(name) {
  var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    console.log(match[2]);
  } else {
    console.log("--something went wrong---");
  }
}

const Login = Props => {
  const login = () => {
    axios
      .post("/api/login", values)
      .then(res => {
        // console.log(res.data.data);
        console.log("login success");
      })
      .catch(err => console.log(err));
  };

  const { values, handleChange, handleSubmit } = useForm(login);

  check_cookie_name("app");

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
