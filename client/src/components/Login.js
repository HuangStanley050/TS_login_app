import React from "react";

const Login = Props => {
  const submitHandler = e => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <div style={{ margin: "2rem auto", width: "50%" }}>
      <form
        onSubmit={submitHandler}
        style={{ textAlign: "center", fontSize: "2rem" }}
      >
        <div>
          <label>Email</label>
          <input style={{ height: "2rem" }} name="Email" />
        </div>
        <div>
          <label>Password</label>
          <input style={{ height: "2rem" }} type="password" name="Password" />
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
