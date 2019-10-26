import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import LoginPage from "./components/Login";
import ProtectedComponent from "./components/ProtectedComponent";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/login" component={LoginPage} />
      <Route path="/protected" component={ProtectedComponent} />
      {/*<PrivateRoute path="/store" component={DragDrop} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} />
      <PrivateRoute path="/dashboard/data/:type" component={Data} />
    */}
    </Switch>
  );
}

export default App;
