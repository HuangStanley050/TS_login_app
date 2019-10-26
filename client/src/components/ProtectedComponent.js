import React from "react";

const ProtectedComponent = props => {
  console.log(props);
  return (
    <div>
      <h1>Protected Page</h1>
      <button onClick={() => props.logout()}>Log out</button>
    </div>
  );
};

export default ProtectedComponent;
