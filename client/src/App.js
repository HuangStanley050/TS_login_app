import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import LoginPage from "./components/Login";
import ProtectedComponent from "./components/ProtectedComponent";
import PrivateRoute from "./components/PrivateRoute";

//render={(props) => <Dashboard {...props} isAuthed={true} />}

function App() {
  const [isAuth, setAuth] = React.useState(false);
  const setLogin = () => {
    setAuth(true);
  };
  const setLogout = () => {
    setAuth(false);
  };
  //console.log("Auth status from <App>: ", isAuth);
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path="/login"
        render={props => (
          <LoginPage {...props} login={setLogin} auth={isAuth} />
        )}
      />
      <PrivateRoute
        path="/protected"
        auth={isAuth}
        logout={setLogout}
        component={ProtectedComponent}
      />
      {/*<Route path="/protected" component={ProtectedComponent} />*/}
      {/*<PrivateRoute path="/store" component={DragDrop} />
      <PrivateRoute exact path="/dashboard" component={DashBoard} />
      <PrivateRoute path="/dashboard/data/:type" component={Data} />
    */}
    </Switch>
  );
}

export default App;
