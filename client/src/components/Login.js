import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

const useForm = () => {
  const [values, setValues] = useState({});

  // const handleSubmit = event => {
  //   if (event) event.preventDefault();
  //   callback();
  // };

  const handleChange = event => {
    event.persist();
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  };

  return {
    handleChange,
    //handleSubmit,
    values
  };
};

const Login = props => {
  const { values, handleChange } = useForm();

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/login", values)
      .then(res => {
        // console.log(res.data.data);
        console.log("login success");
        props.login();
      })
      .catch(err => console.log(err));
  };

  //console.log("From login authstatus: ", props.auth);
  if (props.auth) {
    return <Redirect to="/protected" />;
  }
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
