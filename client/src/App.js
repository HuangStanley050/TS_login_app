import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import LoginPage from "./components/Login";
import DenyPage from "./components/Deny";
import ProtectedComponent from "./components/ProtectedComponent";
import PrivateRoute from "./components/PrivateRoute";

//render={(props) => <Dashboard {...props} isAuthed={true} />}

function App() {
  const [isAuth, setAuth] = React.useState(false);
  const [loginError, setError] = React.useState(false);
  const setLogin = () => {
    setAuth(true);
  };
  const setLogout = () => {
    setAuth(false);
  };
  const authError = () => setError(true);
  const clearError = () => setError(false);

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route
        path="/login"
        render={props => (
          <LoginPage
            {...props}
            loginError={authError}
            clearError={clearError}
            error={loginError}
            login={setLogin}
            auth={isAuth}
          />
        )}
      />
      <PrivateRoute
        path="/protected"
        auth={isAuth}
        logout={setLogout}
        component={ProtectedComponent}
      />
      {loginError ? (
        <Route
          path="/error"
          render={props => <DenyPage {...props} clearError={clearError} />}
        />
      ) : null}
    </Switch>
  );
}

export default App;
